import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import * as itemsActions from './items.actions';
import { Item } from '@workspace/core-data';

export const ITEMS_FEATURE_KEY = 'items';

export interface ItemsState extends EntityState<Item> {
  selectedItemId?: string | number;
  isLoading: boolean;
}

export interface ItemsPartialState {
  readonly [ITEMS_FEATURE_KEY]: ItemsState;
}

export const itemsAdapter: EntityAdapter<Item> = createEntityAdapter<Item>();

export const initialState: ItemsState = itemsAdapter.getInitialState({
  // set initial required properties
  selectedItemId: null,
  isLoading: false
});

const itemsReducer = createReducer(
  initialState,
  on(itemsActions.itemSelected, (state, { selectedItemId }) =>
    Object.assign({}, state, { selectedItemId })
  ),
  on(itemsActions.itemsLoaded, (state, { items }) =>
    itemsAdapter.addAll(items, { ...state, isLoading: false })
  ),
  on(itemsActions.itemCreated, (state, { item }) =>
    itemsAdapter.addOne(item, { ...state, isLoading: false })
  ),
  on(itemsActions.itemUpdated, (state, { item }) =>
    itemsAdapter.upsertOne(item, { ...state, isLoading: false })
  ),
  on(itemsActions.itemDeleted, (state, { item }) =>
    itemsAdapter.removeOne(item.id, { ...state, isLoading: false })
  ),
  on(
    itemsActions.loadItems,
    itemsActions.createItem,
    itemsActions.updateItem,
    itemsActions.deleteItem,
    (state) => ({
      ...state,
      isLoading: true
    })
  ),
);

export function reducer(state: ItemsState | undefined, action: Action) {
  return itemsReducer(state, action);
}
