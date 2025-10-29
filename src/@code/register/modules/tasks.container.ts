import { Component, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks-service';
import { SubSink } from 'subsink';
import { IAssistant, ICategory, ITasks } from '../interface/tasks.interface';
import { TasksPresenter } from '../store/tasks-presenter';

@Component({
  selector: 'codes-tasks-container',
  templateUrl: './tasks.container.html',
  styleUrls: ['./tasks.container.scss']
})
export class TasksContainer implements OnInit {

  private subsink: SubSink = new SubSink();

  public content: any;

  public assistant!: IAssistant;

  constructor(
    private service: TasksService,
    private presenter: TasksPresenter,
  ) { }

  ngOnInit(): void {
    this.presenterSubscriptions();
    this.serviceSubscription();
  }

  ngOnDestroy():void {
    this.subsink.unsubscribe();
  }

  presenterSubscriptions():void {
    this.subsink.add(
      this.presenter.createTasks$.subscribe(data => this.createTasks(data)),
      this.presenter.createCategory$.subscribe(data => this.createCategory(data)),
      this.presenter.getTask$.subscribe(id => this.getTask(id)),
      // this.presenter.createCategory$.subscribe(content => this.createTasks(content)),
    )
  }

  serviceSubscription() {
    this.subsink.add(
      this.getAssistant()
    )
  }

  createTasks(data: ITasks): void {
    console.log({ response: data })
    this.subsink.add(
  
    )
  }

  getTask(id: string) {
    this.subsink.add(
      this.service.getTask(id).subscribe({
        next:(res: Response) => {
          this.content = res;
        },
      })
    )
  } 

  createCategory(data: ICategory) {
    this.subsink.add(
      this.service.createCategory(data).subscribe({
        next:(res: Response) => {
          
        },
      })
    )
  }

  getAssistant() {
    return this.service.getAssistant().subscribe({
      next:(res) => {
        this.assistant = res;
      },
    })
  }
}
