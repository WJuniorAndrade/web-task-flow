import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SubSink } from 'subsink';
import { ITasks } from '../../../interface/tasks.interface';
import { TasksPresenter } from '../../../store/tasks-presenter';
import { ITabeData } from '../../../../ui/src/interfaces/table-interface';

@Component({
  selector: 'code-view-table-tasks',
  templateUrl: './view-table-tasks.component.html',
  styleUrl: './view-table-tasks.component.scss'
})
export class ViewTableTasksComponent implements OnInit {

  private subsink: SubSink = new SubSink();

  @Input() tasks!: any;

  public tableData!: ITabeData;

  constructor(
    private presenter: TasksPresenter,
  ) {}
  
  ngOnInit(): void {
    this.presenterSubscriptions();  

  }

  ngOnDestroy():void {
    this.subsink.unsubscribe();
  }

  presenterSubscriptions() {
    this.subsink.add(
      this.presenter.getAllTask$.subscribe(data => {if(data) this.setTableData(data)}),
    )
  }


  setTableData(data: ITabeData) {
    this.tasks = data;

    this.tableData = {
      columns: [
        {title: 'Id', propertyName: 'id_task'},
        {title: 'Titulo', propertyName: 'title'},
        {title: 'Descrição', propertyName: 'description'},
        {title: 'Data inicial', propertyName: 'start_dt', type: 'date'}
      ],
      tableRow: this.tasks
    }
  }
}
