import { Observable, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { timeout, timeInterval, take, delay, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MiscService {

  private apiUrl: string = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }

  getPosts(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/posts`);
  }

  useFrom(numbers: number[]): Observable<number> {
    return from(numbers).pipe(
      tap(num => num * num)
    );
  }

  foo(numbers: number[]): Observable<number> {
    return from(numbers).pipe(
      take(3),
      tap(x => {
        console.log(x + 3);
      })
    );
  }
}
