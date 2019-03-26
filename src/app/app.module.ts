import { HttpClientModule } from  '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TreeViewComponent } from './components/tree-view/tree-view.component';
import { TreeNodeComponent } from './components/tree-node/tree-node.component';
import { MatchesGridComponent } from './components/matches-grid/matches-grid.component';
import { DataTableComponent } from './components/data-table/data-table.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeViewComponent,
    TreeNodeComponent,
    MatchesGridComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
