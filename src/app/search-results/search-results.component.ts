import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Fruit } from '../models/fruit';
import { FruitService } from '../services/fruit.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent implements OnInit, OnChanges {
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

  fruits: Fruit[] = [];
  filteredFruits: Fruit[] = [];

  @Input() fruitAdded: string = "";
  constructor(private fruitService: FruitService) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.fruitService.getFruits().subscribe(data => {
      this.fruits = data;
      this.filteredFruits = [...this.fruits];
      console.log(this.fruits);
    })
  }

  ngOnInit() {
    this.fruitService.getFruits().subscribe(data => {
      this.fruits = data;
      this.filteredFruits = [...this.fruits];
      console.log(this.fruits);
    })
  }

  onSearchTextChanged(searchValue: string) {
    console.log(searchValue);
    console.log(this.fruits);
    // if (searchValue === '')
    //   this.filteredResults = [...this.results];
    // else
    //   this.filteredResults = this.results.filter((result) =>
    //     result.startsWith(searchValue)
    //   );

    if (searchValue === '')
      this.filteredFruits = [...this.fruits];
    else
      this.filteredFruits = this.fruits.filter((result) =>
        result?.name?.startsWith(searchValue)
      );
  }
}
