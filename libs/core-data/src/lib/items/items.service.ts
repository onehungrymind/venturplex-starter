import { Injectable } from '@angular/core';

import { Apollo } from 'apollo-angular';
import { ApolloQueryResult } from 'apollo-client';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Item } from './item.model';
import { itemsQuery, createItemMutation, updateItemMutation, deleteItemMutation } from './items.graphql';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  constructor(private apollo: Apollo) {}

  all(): Observable<Item[]> {
    return this.apollo.query({
      query: itemsQuery,
      fetchPolicy: 'network-only'
    }).pipe(
      map((res: ApolloQueryResult<any>) => res.data.items)
    );
  }

  create(item: Partial<Item>) {
    return this.apollo.mutate({
      mutation: createItemMutation,
      variables: {
        item
      }
    }).pipe(
      map((res: ApolloQueryResult<any>) => res.data.insert_items.returning[0])
    );
  }

  update(item: Partial<Item>) {
    return this.apollo.mutate({
      mutation: updateItemMutation,
      variables: {
        id: item.id,
        item
      }
    }).pipe(
      map((res: ApolloQueryResult<any>) => res.data.update_items.returning[0])
    );
  }

  delete(id: string) {
    return this.apollo.mutate({
      mutation: deleteItemMutation,
      variables: {
        id
      }
    }).pipe(
      map((res: ApolloQueryResult<any>) => res.data.delete_items.returning[0])
    );
  }
}
