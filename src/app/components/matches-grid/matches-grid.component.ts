import { Match } from './../../models/Match';
import { OddsLayout } from './../../models/OddsLayout';
import { Component, OnInit, Input } from '@angular/core';
import { GridService } from '../../services/grid.service';

@Component({
  selector: 'app-matches-grid',
  templateUrl: './matches-grid.component.html',
  styleUrls: ['./matches-grid.component.css']
})
export class MatchesGridComponent {

  @Input() oddsLayout: OddsLayout;
  @Input() matches: Match[];

  get headerParams() {
    return this.oddsLayout ? this.gridService.createMatchesGridHeaderParams(this.oddsLayout) : []
  }

  get bodyParams() {
    return this.matches ? this.gridService.createMatchesGridBodyParams(this.oddsLayout, this.matches) : null
  }

  constructor(private gridService: GridService) { }

}
