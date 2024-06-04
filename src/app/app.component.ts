// import Angular libraries
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// connect to ItemComponent
import { item } from "./item";
import { ItemComponent } from "./item/item.component";


// Specify metadata about the component
@Component({
  selector: 'app-root', //Tells you the the CSS selector that you use in a template to place this component.
  standalone: true, //specifies whether the component needs an ngModule or not
  imports: [CommonModule, ItemComponent], //Allows you to specify the component's dependencies that can be used within its template.
  templateUrl: './app.component.html', //Specifies the HTML file to associate with this component.
  styleUrl: './app.component.css' //Specifies the CSS file to associate with this component.
})
export class AppComponent {
  componentTitle = 'My To-do List';

  // The filter propery is of type union, it describes all values it can hold
  filter: "all" | "active" | "done" = "all";

  //The allItems array contains the to-do items and whether they are done. 
  allItems = [
    { description: "eat", done: true },
    { description: "sleep", done: false },
    { description: "play", done: false },
    { description: "laugh", done: false },
  ];

  //The addItems() method takes an item that the user provides and adds it to the array when the user clicks the Add button.
  addItems(description:string) {
    if(!description) return
    // the array method unshift() adds a new item to the beginning of the array and the top of the list. push() add the item to the bottom of the list.
    this.allItems.unshift({ 
      description,
      done: false
    })
  }

  // The getter
  get items() {
    // retrieve the items from the allItems array if the filter is equal to all
    if (this.filter === "all"){
      return this.allItems;
    }
    // otherwise it returns the done or pending items depending on how the user filters the view
    return this.allItems.filter((item) =>
      this.filter === "done" ? item.done : !item.done
    );
  }
  //  splice() method removes the item from the array
  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
  
}
