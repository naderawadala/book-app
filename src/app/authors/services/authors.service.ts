import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Author } from '../models/author.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private httpClient: HttpClient) {
  }

  getAll$(): Observable<Author[]> {
    const url = environment.apiUrl + '/authors'

    return this.httpClient.get<Author[]>(url);
  }

  getById$(id: number): Observable<Author> {
    const url = `${environment.apiUrl}/authors/${id}`;

    return this.httpClient.get<Author>(url);
  }

  save$(author: Author): Observable<Author> {
    if (!author.id) {
      return this.create$(author);
    } else {
      return this.edit$(author);
    }
  }

  create$(author: Author): Observable<Author> {
    const url = environment.apiUrl + '/authors'

    author.created = new Date();
    author.lastUpdated = new Date();

    return this.httpClient.post<Author>(url, author);
  }

  edit$(author: Author): Observable<Author> {
    const url = `${environment.apiUrl}/authors/${author.id}`;

    author.lastUpdated = new Date();

    return this.httpClient.put<Author>(url, author);
  }

  delete$(id: number): Observable<void> {
    const url = `${environment.apiUrl}/authors/${id}`;

    return this.httpClient.delete<void>(url);
  }

}
