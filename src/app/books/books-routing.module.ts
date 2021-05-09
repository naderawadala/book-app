import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookEditComponent } from './components/book-edit/book-edit.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BooksListComponent } from './components/books-list/books-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: BooksListComponent
  },
  {
    path: 'details/:id',
    component: BookDetailsComponent
  },
  {
    path: 'create',
    component: BookEditComponent
  },
  {
    path: 'edit/:id',
    component: BookEditComponent
  },
  {
    path: '',
    redirectTo: 'list'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule {
}
