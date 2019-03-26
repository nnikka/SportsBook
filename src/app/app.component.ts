import { Match } from './models/Match';
import { MatchesService } from "./services/matches.service";
import { LayoutService } from "./services/layout.service";
import { TreeData } from "./models/TreeData";
import { Component, OnInit } from "@angular/core";
import { SportsbookTreeService } from "./services/sportsbook-tree.service";
import { OddsLayout } from './models/OddsLayout';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  treeData: TreeData = null;
  oddsLayout: OddsLayout = null;
  matches: Match[] = null;
  matchesNotFound: boolean = false;

  constructor(
    private sportsbookTree: SportsbookTreeService,
    private layoutService: LayoutService,
    private matchesService: MatchesService,
  ) {}

  ngOnInit() {
    this.sportsbookTree.getData().subscribe(treeData => {
      this.treeData = treeData;
    });
    this.layoutService.getOddsLayout().subscribe(oddsLayout => {
      this.oddsLayout = oddsLayout
    });
  }

  chooseId(e) {
    this.matchesService.getMatches(e).subscribe(
      matches => {
        this.matches = matches
        this.matchesNotFound = false
      },
      err => {
        this.matches = null
        this.matchesNotFound = true
      }
    );
  }
}
