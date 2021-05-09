import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs/operators';
import { Author } from '../../models/author.model';
import { AuthorsService } from '../../services/authors.service';

@Component({
  selector: 'lq-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.scss']
})
export class AuthorEditComponent implements OnInit {

  id: number;
  author: Author;

  formGroup: FormGroup;

  constructor(private authorsService: AuthorsService,
              private toastrService: ToastrService,
              private router: Router,
              private route: ActivatedRoute,
              private fb: FormBuilder) {
    this.id = +this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    if (this.id) {
      this.authorsService.getById$(this.id).pipe(
        take(1)
      ).subscribe((response) => {
        this.author = response;
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

    const body: Author = {
      ...this.author,
      ...this.formGroup.value
    };

    this.authorsService.save$(body).pipe(
      take(1)
    ).subscribe(() => {
      this.toastrService.success('Author was successfully saved.', 'Success');
      this.router.navigate(['authors']);
    });
  }

  private buildForm(author?: Author): void {
    if (!author) {
      author = new Author();
    }

    let bornAt;
    if (author.bornAt) {
      bornAt = new Date(author.bornAt);
    } else {
      bornAt = new Date();
    }

    this.formGroup = this.fb.group({
      name: [author.name, [Validators.required, Validators.minLength(3)]],
      surname: [author.surname, [Validators.required, Validators.minLength(3)]],
      
      nationality: [author.nationality, Validators.required],
      coverImgURL: author.photo,
      bornAt: [bornAt, Validators.required]
    });
  }
}
