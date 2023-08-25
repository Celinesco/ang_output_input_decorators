import { Component } from '@angular/core';
import { Fruit } from '../fruits';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  fruitList: Fruit[] = [
    {
      id: '0',
      name: 'Banane',
    },
    { id: '1', name: 'Birne' },
    { id: '3', name: 'Apfel' },
  ];

  addFruit(newFruit: Fruit) {
    let norepetedFruit = this.fruitList.every((fruit: Fruit) => {
      return fruit.name.toLowerCase() !== newFruit.name.trim().toLowerCase();
    });
    if (norepetedFruit) {
      this.fruitList.push(newFruit);
      console.log('Current List', this.fruitList);
    } else {
      console.log('fruit already exists');
    }
  }
}
