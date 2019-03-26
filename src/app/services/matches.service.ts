import { HttpJsonResponse } from "./../models/HttpJsonResponse";
import { Match } from "./../models/Match";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { map, take } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class MatchesService {
  constructor(private http: HttpClient) {}

  public getMatches(id: number): Observable<Match[]> {
    return this.http
      .get<HttpJsonResponse<Match>>(
        "./assets/samples/matches/league_" + id + ".json"
      )
      .pipe(take(1))
      .pipe(
        map(response => {
          let result: Match[] = [];
          response.data.map(match => {
            result.push(
              new Match(match.id, match.sd, match.h, match.a, match.odds)
            );
          });
          return result;
        })
      );
  }
}
