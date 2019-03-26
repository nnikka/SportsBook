import { Odd } from "./Odd";

export class OddType {
  index: string;
  name: string;
  priority: number;
  odds: Odd[];

  constructor(index: string, name: string, priority: number, odds: Odd[]) {
    this.index = index;
    this.name = name;
    this.priority = priority;
    this.odds = odds.sort((a, b) =>  (a.priority < b.priority) ? -1 : (a.priority > b.priority) ? 1 : 0 )
  }
}
