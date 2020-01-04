import gql from 'graphql-tag';

export const itemsFragment = gql`
  fragment itemsFragment on items {
    id
    name
    description
    created_at
    updated_at
  }
`;

export const itemsQuery = gql`
  query itemsQuery {
    items {
      ...itemsFragment
    }
  }
  ${itemsFragment}
`;

export const createItemMutation = gql`
  mutation createItemMutation($item: [items_insert_input!]!) {
    insert_items(objects: $item) {
      returning {
        ...itemsFragment
      }
    }
  }
  ${itemsFragment}
`;

export const updateItemMutation = gql`
  mutation updateItemMutation($id: uuid, $item: items_set_input) {
    update_items(where: {id: {_eq: $id}}, _set: $item) {
      returning {
        ...itemsFragment
      }
    }
  }
  ${itemsFragment}
`;

export const deleteItemMutation = gql`
  mutation deleteItemMutation($id: uuid) {
    delete_items(where: {id: {_eq: $id}}) {
      returning {
        ...itemsFragment
      }
    }
  }
  ${itemsFragment}
`;
