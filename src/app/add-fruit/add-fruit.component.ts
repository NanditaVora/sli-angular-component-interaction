import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Fruit } from '../models/fruit';
import { FruitService } from '../services/fruit.service';

@Component({
  selector: 'app-add-fruit',
  templateUrl: './add-fruit.component.html',
  styleUrls: ['./add-fruit.component.css']
})
export class AddFruitComponent  {

  @Output()
  fruitAdded: EventEmitter<string> = new EventEmitter<string>();
  fruit: Fruit = {};
  constructor(private http: FruitService) { }

  
  saveFruit() {
    console.log(this.fruit);
    this.http.addFruit(this.fruit).subscribe(data=>{
      this.fruitAdded.emit(this.fruit.name);
    });
    
  }
}
