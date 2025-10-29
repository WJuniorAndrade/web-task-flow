import { Component, OnInit } from '@angular/core';
import { SubSink } from 'subsink';
import { TasksService } from '../../services/tasks-service';
import { TasksPresenter } from '../../store/tasks-presenter';
import { ITasks } from '../../interface/tasks.interface';

@Component({
  selector: 'code-table-tasks-container',
  templateUrl: './table-tasks-container.html',
  styleUrl: './table-tasks-container.scss'
})
export class TableTasksContainer implements OnInit {
  
  private subsink: SubSink = new SubSink();


  constructor(
    private service: TasksService,
    private presenter: TasksPresenter,
  ) {}

  ngOnInit(): void {
    // this.presenterSubscriptions();
    this.serviceSubscription();
  }

  ngOnDestroy():void {
    this.subsink.unsubscribe();
  }


  serviceSubscription() {
    this.subsink.add(
      this.getAllTasks(),
    )
  }

  getAllTasks() {
    return this.service.getAllTasks().subscribe({
      error: (err) => console.error(err),
      next:(res: any) => {
        this.presenter.getAllTask(res)
      },
    })
  } 
}
