import { Base } from '../base.model';

export interface Item extends Base {
  title: string;
  description?: string;
}

export const emptyItem: Item = {
  id: null,
  title: '',
  description: '',
  created_at: '',
  updated_at: ''
}
