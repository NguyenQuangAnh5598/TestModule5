import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../module/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private API_BOOK = environment.API_LOCAL;
  constructor(private http: HttpClient) {
  }

  showList(): Observable<Book[]> {
    return this.http.get<Book[]>(this.API_BOOK);
  }

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.API_BOOK,book);
  }

  deleteBook(id: number): Observable<Book> {
    return this.http.delete<Book>(this.API_BOOK + '/' + id);
  }

  editStudent(id: number,book: Book): Observable<Book> {
    return this.http.put<Book>(this.API_BOOK + '/' + id,book);
  }

  findBookByID(id: number): Observable<Book> {
    return this.http.get<Book>(this.API_BOOK + '/' + id);
  }
}
