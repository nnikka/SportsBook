import { TreeNode } from './TreeNode';
import { Country } from './Country ';

export class Sport implements TreeNode<Country> {
  id: number;
  priority: number;
  name: string;
  total: number;
  countries: Country[] = [];

  get nodes() {
    return this.countries
  }

  constructor(id:number, priority:number, name:string, total:number, countries:Country[]) {
    this.id = id
    this.priority = priority
    this.name = name
    this.total = total
    countries.sort((a, b) =>  (a.name.toUpperCase() < b.name.toUpperCase()) ? -1 : (a.name.toUpperCase() > b.name.toUpperCase()) ? 1 : 0 )
    .map(country => this.countries.push(new Country(country.id, country.name, country.total, country.leagues)))
  }
}
