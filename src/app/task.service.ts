import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasksRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
    this.tasksRef = db.list('/tasks');
  }

  getTasksSnapshotChanges() {
    return this.tasksRef.snapshotChanges().pipe(
      map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))
    );
  }

  addTask(task: any) {
    return this.tasksRef.push(task);
  }

  deleteTask(key: string) {
    return this.tasksRef.remove(key);
  }
}
