import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs/operators';
import { Book } from '../../models/book.model';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'lq-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {

  id: number;
  book: Book;

  formGroup: FormGroup;

  constructor(private booksService: BooksService,
              private toastrService: ToastrService,
              private router: Router,
              private route: ActivatedRoute,
              private fb: FormBuilder) {
    this.id = +this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    if (this.id) {
      this.booksService.getById$(this.id).pipe(
        take(1)
      ).subscribe((response) => {
        this.book = response;
        this.buildForm(response);
      });
    } else {
      this.buildForm();
    }
  }

  onSubmit(): void {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();

      return;
    }

    const body: Book = {
      ...this.book,
      ...this.formGroup.value
    };

    this.booksService.save$(body).pipe(
      take(1)
    ).subscribe(() => {
      this.toastrService.success('Book was successfully saved.', 'Success');
      this.router.navigate(['books']);
    });
  }

  private buildForm(book?: Book): void {
    if (!book) {
      book = new Book();
    }

    let publishAt;
    if (book.publishAt) {
      publishAt = new Date(book.publishAt);
    } else {
      publishAt = new Date();
    }

    this.formGroup = this.fb.group({
      title: [book.title, [Validators.required, Validators.minLength(3)]],
      subtitle: [book.subtitle, [Validators.required, Validators.minLength(3)]],
      category: [book.category, Validators.required],
      language: [book.language, Validators.required],
      pages: [book.pages, [Validators.required, Validators.min(0)]],
      coverImgURL: book.coverImgURL,
      publishAt: [publishAt, Validators.required]
    });
  }
}
