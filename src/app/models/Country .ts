import { TreeNode } from './TreeNode';
import { League } from "./League";

export class Country implements TreeNode<League> {
  id: number;
  name: string;
  total: number;
  leagues: League[] = [];

  get nodes() {
    return this.leagues;
  }

  constructor(id: number, name: string, total: number, leagues: League[]) {
    this.id = id;
    this.name = name;
    this.total = total
    leagues.sort((a, b) =>  (a.name.toUpperCase() < b.name.toUpperCase()) ? -1 : (a.name.toUpperCase() > b.name.toUpperCase()) ? 1 : 0 )
    .map(league => this.leagues.push(new League(league.id, league.name, league.total)))
  }
}
