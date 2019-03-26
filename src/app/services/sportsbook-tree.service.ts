import { Sport } from '../models/Sport';
import { HttpJsonResponse } from '../models/HttpJsonResponse';
import { TreeData } from './../models/TreeData';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SportsbookTreeService {

  constructor(private http: HttpClient) { }

  public getData(): Observable<TreeData> {
    return this.http.get<HttpJsonResponse<Sport>>("./assets/samples/tree.json").pipe(map(response => {
      return new TreeData(response.data);
    }));
  }
}
