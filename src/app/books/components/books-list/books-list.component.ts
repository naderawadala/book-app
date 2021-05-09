import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs/operators';
import { Book } from '../../models/book.model';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'lq-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  books: Book[];

  selectedBook: Book;
  modalRef: BsModalRef;

  constructor(private booksService: BooksService,
              private bsModalService: BsModalService,
              private toastrService: ToastrService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  openDeleteDialog(template: TemplateRef<any>, book: Book): void {
    this.selectedBook = book;
    this.modalRef = this.bsModalService.show(template);
  }

  deleteBook(): void {
    this.booksService.delete$(this.selectedBook.id).pipe(
      take(1)
    ).subscribe(() => {
      this.getAll();
      this.toastrService.success('Book was successfully deleted.', 'Success');
      this.modalRef.hide();
    }, (response: HttpErrorResponse) => {
      this.toastrService.error(response.message, 'Error', {
        disableTimeOut: true,
        closeButton: true
      });
    })
  }

  private getAll(): void {
    this.booksService.getAll$().pipe(
      take(1)
    ).subscribe((response) => {
      this.books = response;
    });
  }

}
