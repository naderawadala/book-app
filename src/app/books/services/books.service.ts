import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private httpClient: HttpClient) {
  }

  getAll$(): Observable<Book[]> {
    const url = environment.apiUrl + '/books'

    return this.httpClient.get<Book[]>(url);
  }

  getById$(id: number): Observable<Book> {
    const url = `${environment.apiUrl}/books/${id}`;

    return this.httpClient.get<Book>(url);
  }

  save$(book: Book): Observable<Book> {
    if (!book.id) {
      return this.create$(book);
    } else {
      return this.edit$(book);
    }
  }

  create$(book: Book): Observable<Book> {
    const url = environment.apiUrl + '/books'

    book.created = new Date();
    book.lastUpdated = new Date();

    return this.httpClient.post<Book>(url, book);
  }

  edit$(book: Book): Observable<Book> {
    const url = `${environment.apiUrl}/books/${book.id}`;

    book.lastUpdated = new Date();

    return this.httpClient.put<Book>(url, book);
  }

  delete$(id: number): Observable<void> {
    const url = `${environment.apiUrl}/books/${id}`;

    return this.httpClient.delete<void>(url);
  }

}
