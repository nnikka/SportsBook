import { Match } from './../models/Match';
import { OddsLayout } from "./../models/OddsLayout";
import { GridHeader } from "./../models/GridHeader";
import { GridBody } from "./../models/GridBody";
import { Injectable } from "@angular/core";
import { OddType } from '../models/OddType';

@Injectable({
  providedIn: "root"
})
export class GridService {
  constructor() {}

  public createMatchesGridHeaderParams(oddsLayout: OddsLayout): GridHeader {
      let result:GridHeader = { headerParams: [{name: 'Date', title: null}, {name: 'Pairs', title: null}] }
      oddsLayout.oddTypes.map(oddType => {
        oddType.odds.map(odd => {
          result.headerParams.push({name: odd.name, title: oddType.name})
        })
      })
      return result;
  }

  public createMatchesGridBodyParams(oddsLayout: OddsLayout, matches: Match[]): GridBody {
    let result: GridBody = {bodyParams: []}
    matches.map(match => {
      let matchRow = [{value: match.date}, {value: match.pair}]
      oddsLayout.oddTypes.map(oddType => {
        oddType.odds.map(odd => {
          matchRow.push(match.getOdd(oddType.index, odd.id))
        })
      })
      result.bodyParams.push(matchRow)
    })
    return result;
  }
}
