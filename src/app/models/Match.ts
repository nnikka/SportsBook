import * as moment from "moment";
import { OddsLayout } from './OddsLayout';

export class Match {
  id: number;
  sd: string;
  h: string;
  a: string;
  odds: any;

  get pair() {
    return this.h + " - " + this.a;
  }

  get date() {
    return moment(new Date(this.sd)).format("MM-DD HH:mm");
  }

  constructor(id: number, sd: string, h: string, a: string, odds: any) {
    this.id = id;
    this.sd = sd;
    this.h = h;
    this.a = a;
    this.odds = odds;
  }

  public getOdd(oddType: string, name: string) {
    if (!this.odds[oddType]) return null
    let result = null
    this.odds[oddType].map(odd => {
        if (odd.name == name) result = odd
    })
    return result
  }
}
