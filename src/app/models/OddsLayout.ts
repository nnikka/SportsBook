import { OddType } from "./OddType";

export class OddsLayout {
  oddTypes: OddType[] = [];

  constructor(oddTypes: OddType[]) {
    oddTypes.sort((a, b) =>  (a.priority < b.priority) ? -1 : (a.priority > b.priority) ? 1 : 0 )
    .map(oddType => this.oddTypes.push(new OddType(oddType.index, oddType.name, oddType.priority, oddType.odds)))
  }
}
