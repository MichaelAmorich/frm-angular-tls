import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { map } from 'rxjs';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  tasks: any[] = [];
  newTask: string;

  constructor(private _taskService: TaskService) { }

  ngOnInit(): void {
    this._taskService.getTasksSnapshotChanges().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  addTask() {
    if (this.newTask) {
      this._taskService.addTask({ name: this.newTask });
      this.newTask = '';
    }
  }

  deleteTask(key: string) {
    this._taskService.deleteTask(key).then(() => {
      console.log('Tâche supprimée avec succès');
    }).catch(error => {
      console.error('Erreur lors de la suppression de la tâche:', error);
    });
  }
}
