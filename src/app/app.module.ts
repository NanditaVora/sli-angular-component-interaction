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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchResultsComponent,
    ResultCardComponent,
    AddFruitComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, BrowserAnimationsModule, 
    MatFormFieldModule, MatInputModule, MatExpansionModule, MatCardModule, MatToolbarModule, MatButtonModule],
  providers: [FruitService],
  bootstrap: [AppComponent],
})
export class AppModule { }
