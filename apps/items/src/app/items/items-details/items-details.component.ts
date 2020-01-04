import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Item } from '@workspace/core-data';

@Component({
  selector: 'workspace-items-details',
  templateUrl: './items-details.component.html',
  styleUrls: ['./items-details.component.scss']
})
export class ItemsDetailsComponent {
  @Input() group: FormGroup;
  @Input() set item(value: Item) {
    this.selectedItem = {...value};
  };

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  selectedItem: Item;

  save() {
    this.saved.emit(this.group.value);
  }

  cancel() {
    this.cancelled.emit();
  }
}
