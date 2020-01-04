import { ActionReducerMap } from '@ngrx/store';

import * as fromItems from './items/items.reducer';

// tslint:disable-next-line: no-empty-interface
export interface AppState {
  [fromItems.ITEMS_FEATURE_KEY]: fromItems.ItemsState;
}

export const reducers: ActionReducerMap<AppState> = {
  [fromItems.ITEMS_FEATURE_KEY]: fromItems.reducer
}

//---------------------------------------
// Aggregated Data Selectors
//---------------------------------------
