import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SharedModule } from '../shared/shared.module';
import { BookEditComponent } from './components/book-edit/book-edit.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { BooksRoutingModule } from './books-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BsDatepickerModule,
    ModalModule.forChild(),
    SharedModule,
    BooksRoutingModule
  ],
  declarations: [
    BooksListComponent,
    BookDetailsComponent,
    BookEditComponent
  ],
  exports: [
    BooksListComponent
  ]
})
export class BooksModule {
}
