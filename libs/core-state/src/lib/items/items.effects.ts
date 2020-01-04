import { Injectable } from '@angular/core';

import { Actions, createEffect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map } from 'rxjs/operators';

import * as itemsActions from './items.actions';
import { Item, ItemsService, NotifyService } from '@workspace/core-data';
import { ItemsPartialState } from './items.reducer';

@Injectable()
export class ItemsEffects {
  loadItems$ = createEffect(() =>
    this.dataPersistence.fetch(itemsActions.loadItems, {
      run: (
        action: ReturnType<typeof itemsActions.loadItems>,
        state: ItemsPartialState
      ) => {
        return this.itemsService.all().pipe(
          map((items: Item[]) => itemsActions.itemsLoaded({ items }))
        );
      },
      onError: (action: ReturnType<typeof itemsActions.loadItems>, error) => {
        this.notifyService.error(error.message);
      }
    })
  );

  addItem$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(itemsActions.createItem, {
      run: (
        action: ReturnType<typeof itemsActions.createItem>,
        state: ItemsPartialState
      ) => {
        return this.itemsService.create(action.item).pipe(
          map((item: Item) => itemsActions.itemCreated({ item }))
        );
      },
      onError: (action: ReturnType<typeof itemsActions.createItem>, error) => {
        this.notifyService.error(error.message);
      }
    })
  );

  updateItem$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(itemsActions.updateItem, {
      run: (
        action: ReturnType<typeof itemsActions.updateItem>,
        state: ItemsPartialState
      ) => {
        return this.itemsService.update(action.item).pipe(
          map((item: Item) => itemsActions.itemUpdated({ item }))
        );
      },
      onError: (action: ReturnType<typeof itemsActions.updateItem>, error) => {
        this.notifyService.error(error.message);
      }
    })
  );

  deleteItem$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(itemsActions.deleteItem, {
      run: (
        action: ReturnType<typeof itemsActions.deleteItem>,
        state: ItemsPartialState
      ) => {
        return this.itemsService.delete(action.item).pipe(
          map((item: Item) => itemsActions.itemDeleted({ item }))
        );
      },
      onError: (action: ReturnType<typeof itemsActions.deleteItem>, error) => {
        this.notifyService.error(error.message);
      }
    })
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<ItemsPartialState>,
    private itemsService: ItemsService,
    private notifyService: NotifyService
  ) {}
}
