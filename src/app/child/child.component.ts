import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Fruit } from '../fruits';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Output() newFruitEvent = new EventEmitter<Fruit>();

  ngOnInit(): void {}

  addNewFruit(name: string) {
    name = name.trim();
    if (!name) {
      return;
    }
    let today: number = Date.now();
    let id: string = Math.floor(today / 1000).toString() + name;

    this.newFruitEvent.emit({ name, id });
  }
}
