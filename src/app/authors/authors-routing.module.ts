import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorDetailsComponent } from './components/author-details/author-details.component';
import { AuthorEditComponent } from './components/author-edit/author-edit.component';
import { AuthorsListComponent } from './components/authors-list/authors-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: AuthorsListComponent
  },
  {
    path: 'details/:id',
    component: AuthorDetailsComponent
  },
  {
    path: 'create',
    component: AuthorEditComponent
  },
  {
    path: 'edit/:id',
    component: AuthorEditComponent
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
export class AuthorsRoutingModule {
}
