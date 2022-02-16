export interface ITodo {
  id: number; // generate random id of 4 digits 1000 - 9999
  title: string;
  isCompleted: boolean; // default false
  createdAt: string; // default current date ISO string
  modifiedAt: string; // default current date
}

export class Todo implements ITodo {
    id: number;
    title: string;
    isCompleted: boolean;
    createdAt: string;
    modifiedAt: string;

    constructor(title: string) {
    }
}