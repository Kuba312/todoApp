import {Component} from '@angular/core';
import {Task} from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // taskName: string;
  editMode = false;
  taskName = 'Siłownia';
  taskDate = '';
  config: { [key: string]: string } = null;

  tasks: Task[] = [{
    name: 'Siłownia',
    deadLine: '2020-06-12',
    done: false
  },
    {
      name: 'Nauka Angulara',
      deadLine: '2020-10-06',
      done: false
    },
  ];


  constructor() {
    setTimeout(() => {
      this.config = {
        title: 'Lista zadań',
        footer: 'Lista Zadań zbudowanych w Angularze',
        date: new Date().toDateString(),
      };
    }, 500);
    this.sortTasks();
  }

  clearTasks() {
    this.tasks = [];
  }

  // onKeyUp(key: KeyboardEvent) {
  //   const target = key.target as HTMLInputElement;
  //   this.taskName = target.value;
  // }

  createTask() {
    const task: Task = {
      name: this.taskName,
      deadLine: this.taskDate,
      done: false
    };
    this.tasks.push(task);
    this.taskName = '';
    this.taskDate = '';
    this.sortTasks();
    // Add to interface tasks
  }

  switchEditMode() {
    this.editMode = !this.editMode;
  }

  markTaskAsDone(task: Task) {
    task.done = true;
    this.sortTasks();
  }

  deleteTask(task: Task) {
    this.tasks = this.tasks.filter(e => e !== task);
    this.sortTasks();
  }

  private sortTasks() {
    this.tasks = this.tasks.sort((a: Task, b: Task) =>
      a.done === b.done ? 0 : a.done ? 1 : -1
    );
  }


}
