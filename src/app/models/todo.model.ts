export class Todo {
  id?: number;
  task?: string;
  isComplete?: boolean;

  constructor(id?: number, task?: string, isComplete?: boolean) {
    this.id = id;
    this.task = task;
    this.isComplete = isComplete;
  }
}
