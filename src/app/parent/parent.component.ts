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
      id: 0,
      name: 'Banane',
    },
    { id: 1, name: 'Birne' },
    { id: 3, name: 'Apfel' },
  ];
}
