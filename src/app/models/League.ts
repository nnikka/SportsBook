import { TreeNode } from "./TreeNode";

export class League implements TreeNode<any> {
  id: number;
  name: string;
  total: number;

  get nodes() {
    return null;
  }

  constructor(id: number, name: string, total: number) {
    this.id = id;
    this.name = name;
    this.total = total;
  }
}
