import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Item } from '@workspace/core-data';

@Component({
  selector: 'workspace-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent {
  @Input() items: Item[];

  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

  constructor() {}

  select(item: Item) {
    this.selected.emit(item);
  }

  delete(item: Item, event: MouseEvent) {
    event.stopImmediatePropagation();
    this.deleted.emit(item);
  }
}
