export type Flavour =
  | 'ctp-mocha'
  | 'ctp-latte'
  | 'ctp-macchiato'
  | 'ctp-frappe';

export interface ITask {
  title: string;
  description: string;
  color: string;
  setDate?: Date;
  completed: boolean;
  createdAt: Date;
}
