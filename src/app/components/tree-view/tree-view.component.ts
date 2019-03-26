import { TreeData } from "./../../models/TreeData";
import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-tree-view",
  templateUrl: "./tree-view.component.html",
  styleUrls: ["./tree-view.component.css"]
})
export class TreeViewComponent {
  @Input() TreeData: TreeData;
  @Output() chooseId: EventEmitter<number> = new EventEmitter<number>();

  get data() {
    return this.TreeData ? this.TreeData.data : [];
  }

  constructor() {}

  catchId(e) {
    this.chooseId.emit(e);
  }
}
