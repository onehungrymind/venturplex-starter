import { Base } from '../base.model';

export interface Item extends Base {
  name: string;
  description?: string;
}

export const emptyItem: Item = {
  id: null,
  name: '',
  description: '',
  created_at: '',
  updated_at: ''
}
