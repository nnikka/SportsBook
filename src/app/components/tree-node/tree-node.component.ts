import { TreeNode } from "./../../models/TreeNode";
import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-tree-node",
  templateUrl: "./tree-node.component.html",
  styleUrls: ["./tree-node.component.css"]
})
export class TreeNodeComponent {
  @Input() treeNode: TreeNode<any>;
  @Output() clickOnLeaf: EventEmitter<number> = new EventEmitter<number>();
  showChildNodes: Boolean = false;

  constructor() {}

  isLeaf(): boolean {
    return this.treeNode.nodes === null;
  }

  onItemClick() {
    if (this.isLeaf()) {
      this.clickOnLeaf.emit(this.treeNode.id);
    } else {
      this.showChildNodes = !this.showChildNodes;
    }
  }

  catchItemClick(e) {
    this.clickOnLeaf.emit(e);
  }
}
