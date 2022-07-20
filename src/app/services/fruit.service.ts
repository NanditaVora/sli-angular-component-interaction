import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fruit } from '../models/fruit';

@Injectable()
export class FruitService {
  constructor(private http: HttpClient) {

  }

  getFruits(): Observable<Array<Fruit>> {
    return this.http.get<Array<Fruit>>("http://localhost:3000/fruits")
  }

  addFruit(fruit?: Fruit): Observable<Fruit> {
    return this.http.post<Fruit>("http://localhost:3000/fruits",fruit);
  }
}
