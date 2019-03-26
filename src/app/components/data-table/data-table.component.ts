import { GridBody } from './../../models/GridBody';
import { GridHeader } from "./../../models/GridHeader";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-data-table",
  templateUrl: "./data-table.component.html",
  styleUrls: ["./data-table.component.css"]
})
export class DataTableComponent {
  @Input() header: GridHeader;
  @Input() body: GridBody;

  constructor() {}
}
