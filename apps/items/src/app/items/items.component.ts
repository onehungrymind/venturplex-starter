import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Observable } from 'rxjs';

import { Item } from '@workspace/core-data';
import { ItemsFacade } from '@workspace/core-state';

@Component({
  selector: 'workspace-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  form: FormGroup;
  item: Item;
  items$: Observable<Item[]> = this.itemsFacade.allItems$;

  constructor(
    private formBuilder: FormBuilder,
    private itemsFacade: ItemsFacade
  ) { }

  ngOnInit() {
    this.initForm();
    this.itemsFacade.loadItems();
    this.itemsFacade.mutations$
      .subscribe(() => this.reset());
  }

  select(item: Item) {
    this.item = item;
    this.form.patchValue(item);
  }

  save(item: Item) {
    if (this.form.valid) {
      if (item.id) {
        this.itemsFacade.updateItem(item);
        return;
      }
      const {id, ...payload} = item;
      this.itemsFacade.createItem(payload);
    }
  }

  delete(item: Item) {
    this.itemsFacade.deleteItem(item);
  }

  reset() {
    this.form.reset();
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: null,
      name: ['', Validators.compose([Validators.required])],
      description: ['']
    });
  }
}
