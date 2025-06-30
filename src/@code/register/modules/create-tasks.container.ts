import { Component, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks-service';
import { SubSink } from 'subsink';
import { Tasks } from '../interface/tasks.interface';
import { TasksPresenter } from '../store/tasks-presenter';

@Component({
  selector: 'codes-tasks-container',
  templateUrl: './create-tasks.container.html',
  styleUrls: ['./create-tasks.container.scss']
})
export class CreateTasksContainer implements OnInit {

  private subsink: SubSink = new SubSink();

  constructor(
    private service: TasksService,
    private presenter: TasksPresenter,
  ) { }

  ngOnInit(): void {
    this.presenterSubscriptions();
    this.createTasks()
  }

  ngOnDestroy():void {
    this.subsink.unsubscribe();
  }

  presenterSubscriptions():void {
    this.subsink.add(
      this.presenter.createTasks$.subscribe(content => this.createTasks()),
      // this.presenter.createCategory$.subscribe(content => this.createTasks(content)),
    )
  }

  createTasks() {
    // this.subsink.add(
    //   this.service.getDados().subscribe((data) => {
    // )
  }
}
