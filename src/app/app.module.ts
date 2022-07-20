import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ResultCardComponent } from './result-card/result-card.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchComponent } from './search/search.component';
import { FruitService } from './services/fruit.service';
import { HttpClientModule } from '@angular/common/http';
import { AddFruitComponent } from './add-fruit/add-fruit.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchResultsComponent,
    ResultCardComponent,
    AddFruitComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [FruitService],
  bootstrap: [AppComponent],
})
export class AppModule {}
