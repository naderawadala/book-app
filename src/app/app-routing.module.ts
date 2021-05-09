import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'books',
    loadChildren: () => import('./books/books.module').then(m => m.BooksModule)
  },
  {
    path: 'authors',
    loadChildren: () => import('./authors/authors.module').then(m => m.AuthorsModule)
  },
  {
    path: 'reporting',
    loadChildren: () => import('./reporting/reporting.module').then(m => m.ReportingModule)
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
