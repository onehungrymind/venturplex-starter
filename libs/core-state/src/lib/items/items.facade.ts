import { Injectable } from '@angular/core';

import { Action, select, Store } from '@ngrx/store';

import * as fromItems from './items.reducer';
import * as itemsActions from './items.actions';
import * as itemsSelectors from './items.selectors';
import { Item } from '@workspace/core-data';

@Injectable({
  providedIn: 'root'
})
export class ItemsFacade {
  allItems$ = this.store.pipe(select(itemsSelectors.selectAllItems));
  selectedItem$ = this.store.pipe(select(itemsSelectors.selectItem));
  itemLoading$ = this.store.pipe(select(itemsSelectors.selectItemsLoading));

  constructor(private store: Store<fromItems.ItemsPartialState>) {}

  selectItem(selectedItemId: string) {
    this.dispatch(itemsActions.itemSelected({ selectedItemId }));
  }

  loadItems() {
    this.dispatch(itemsActions.loadItems());
  }

  createItem(item: Item) {
    this.dispatch(itemsActions.createItem({ item }));
  }

  updateItem(item: Item) {
    this.dispatch(itemsActions.updateItem({ item }));
  }

  deleteItem(item: Item) {
    this.dispatch(itemsActions.deleteItem({ item }));
  }

  private dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
