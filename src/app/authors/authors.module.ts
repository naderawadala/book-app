import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SharedModule } from '../shared/shared.module';
import { AuthorEditComponent } from './components/author-edit/author-edit.component';
import { AuthorDetailsComponent } from './components/author-details/author-details.component';
import { AuthorsListComponent } from './components/authors-list/authors-list.component';
import { AuthorsRoutingModule } from './authors-routing.module';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BsDatepickerModule,
    ModalModule.forChild(),
    SharedModule,
    AuthorsRoutingModule
  ],
  declarations: [
    AuthorsListComponent,
    AuthorDetailsComponent,
    AuthorEditComponent
  ],
  exports: [
    AuthorsListComponent
  ]
})
export class AuthorsModule {
}
