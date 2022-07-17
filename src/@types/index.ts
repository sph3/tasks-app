export type Flavour = 'ctp-mocha' | 'ctp-latte' | 'ctp-macchiato' | 'ctp-frappe';
export interface ITask {
  title: string;
  description: string;
  date: Date;
}