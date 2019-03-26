import { OddType } from './../models/OddType';
import { Injectable } from '@angular/core';
import { HttpJsonResponse } from '../models/HttpJsonResponse';
import { OddsLayout } from '../models/OddsLayout';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  constructor(private http: HttpClient) { }

  public getOddsLayout(): Observable<OddsLayout> {
    return this.http.get<HttpJsonResponse<OddType>>("./assets/samples/layout.json").pipe(map(response => {
      return new OddsLayout(response.data);
    }));
  }
}
