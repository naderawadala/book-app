import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs/operators';
import { Author } from '../../models/author.model';
import { AuthorsService } from '../../services/authors.service';

@Component({
  selector: 'lq-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.scss']
})
export class AuthorsListComponent implements OnInit {

  authors: Author[];

  selectedAuthor: Author;
  modalRef: BsModalRef;

  constructor(private authorsService: AuthorsService,
              private bsModalService: BsModalService,
              private toastrService: ToastrService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  openDeleteDialog(template: TemplateRef<any>, author: Author): void {
    this.selectedAuthor = author;
    this.modalRef = this.bsModalService.show(template);
  }

  deleteAuthor(): void {
    this.authorsService.delete$(this.selectedAuthor.id).pipe(
      take(1)
    ).subscribe(() => {
      this.getAll();
      this.toastrService.success('Author was successfully deleted.', 'Success');
      this.modalRef.hide();
    }, (response: HttpErrorResponse) => {
      this.toastrService.error(response.message, 'Error', {
        disableTimeOut: true,
        closeButton: true
      });
    })
  }

  private getAll(): void {
    this.authorsService.getAll$().pipe(
      take(1)
    ).subscribe((response) => {
      this.authors = response;
    });
  }

}
