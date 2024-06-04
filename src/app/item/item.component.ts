// Input, Output, and EventEmitter allows ItemComponent to share data with AppComponent.
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Item } from "../item";


@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})

export class ItemComponent {

  // editable property helps toggle a section of the template where a user can edit an item
  // editable is the same property in the HTML as in the *ngIf statement, *ngIf="editable". 
  // When you use a property in the template, you must also declare it in the class
  editable = false;

  // @Input(), @Output(), and EventEmitter facilitate communication between your two components.
  // The @Input() decorator serves as a doorway for data to come into the component
  // @Output() acts as a doorway for data to go out of the component
  // @Output() has to be of type EventEmitter, 
  // so that a component can raise an event when there's data ready to share with another component.
  @Input() item!: Item;
  @Output() remove = new EventEmitter<Item>();

  // saveItem() method takes as an argument a description of type string
  // The description is the text that the user enters into the HTML <input> when editing an item in the list.
  // If a user enters text and clicks save, saveItem() sets editable to false,
  //  which causes the *ngIf in the template to remove the edit feature and render the Edit and Delete buttons again.
  saveItem(description: string) {
    // If the user doesn't enter a value but clicks Save, saveItem() returns nothing and does not update the description. 
    // If you didn't have this if statement, the user could click Save with nothing in the HTML <input>, 
    // and the description would become an empty string.
    if (!description) return;

    this.editable = false;
    this.item.description = description;
  }
}

