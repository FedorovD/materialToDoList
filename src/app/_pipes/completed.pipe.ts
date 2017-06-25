import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'completed',
  pure: false
})
export class CompletedPipe implements PipeTransform {

  transform(todos: any[], completed: boolean): any[] {
    if (completed) {
      return todos;
    } else {
      return todos.filter(todo => {
        return !todo.completed;
      });
    }
  }

}
