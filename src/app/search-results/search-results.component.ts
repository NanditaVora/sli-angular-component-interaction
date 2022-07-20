import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent implements OnInit {
  results = [
    'apple',
    'apricot',
    'banana',
    'sugarcane',
    'jack fruit',
    'avocado',
    'pineapple',
    'pomegranate',
    'orange',
    'melon',
    'watermelon',
    'chikoo',
    'mango',
  ];

  filteredResults: string[] = [...this.results];

  constructor() {}

  ngOnInit() {}

  onSearchTextChanged(searchValue: string) {
    console.log(searchValue);
    console.log(this.results);
    if (searchValue === '') this.filteredResults = [...this.results];
    else
      this.filteredResults = this.results.filter((result) =>
        result.startsWith(searchValue)
      );
  }
}
