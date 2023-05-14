import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Assignment1';
  show = false;
  counter=0
  counter1(){
    this.counter++;

  };
  
  newItem!: string; 
  items: string[] = [];
  addItem()
   {
    this.items.push(this.newItem);
    this.newItem = ''; // Clear the input field
   }
   isFifthItem(index: number): boolean {
    return (index + 1) % 5 === 0; // add 1 to index to make it 1-based
  }

  }

  

  


