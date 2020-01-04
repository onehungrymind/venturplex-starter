import { createFeatureSelector, createSelector } from '@ngrx/store';

import {
  ITEMS_FEATURE_KEY,
  itemsAdapter,
  ItemsPartialState,
  ItemsState
} from './items.reducer';

// Lookup the 'Items' feature state managed by NgRx
export const selectItemsState = createFeatureSelector<
  ItemsPartialState,
  ItemsState
>(ITEMS_FEATURE_KEY);

const { selectAll, selectEntities } = itemsAdapter.getSelectors();

export const selectItemsLoading = createSelector(
  selectItemsState,
  (state: ItemsState) => state.isLoading
);

export const selectAllItems = createSelector(
  selectItemsState,
  (state: ItemsState) => selectAll(state)
);

export const selectItemsEntities = createSelector(
  selectItemsState,
  (state: ItemsState) => selectEntities(state)
);

export const selectItemId = createSelector(
  selectItemsState,
  (state: ItemsState) => state.selectedItemId
);

export const selectItem = createSelector(
  selectItemsEntities,
  selectItemId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
