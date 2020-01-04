import { createAction, props } from '@ngrx/store';

import { Item } from '@workspace/core-data';

export const itemSelected = createAction(
  '[ITEM] Item Selected',
  props<{ selectedItemId: string }>()
);

// Load Actions
export const loadItems = createAction('[ITEM] Load Items');

export const itemsLoaded = createAction(
  '[ITEM] Items Loaded',
  props<{ items: Item[] }>()
);

// Create Actions
export const createItem = createAction(
  '[ITEM] Create Item',
  props<{ item: Item }>()
);

export const itemCreated = createAction(
  '[ITEM] Item Created',
  props<{ item: Item }>()
);

// Update Actions
export const updateItem = createAction(
  '[ITEM] Update Item',
  props<{ item: Item }>()
);

export const itemUpdated = createAction(
  '[ITEM] Item Updated',
  props<{ item: Item }>()
);

// Delete Actions
export const deleteItem = createAction(
  '[ITEM] Delete Item',
  props<{ item: Item }>()
);

export const itemDeleted = createAction(
  '[ITEM] Item Deleted',
  props<{ item: Item }>()
);
