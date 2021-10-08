import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DayService, MonthService, View, WeekService, WorkWeekService } from '@syncfusion/ej2-angular-schedule';
import { IDataSource } from './interfaces/IDataSource.interface';
import { AppServiceService } from './services/app-service.service';

@Component({
  selector: 'app-root',
  providers: [DayService,WeekService, MonthService, WorkWeekService],
  styleUrls: ['./app.component.css'],
  template: `<ejs-schedule [selectedDate]="selectedDate" [eventSettings]="{ dataSource : this.Data }" [currentView]='currentView' ></ejs-schedule>`
})
export class AppComponent implements OnInit{

  constructor(
    public AppServiceService: AppServiceService,
    private cdr: ChangeDetectorRef,
    ){}
  title = 'todo-app';
  Data: IDataSource[] = [{
    Id: 1,
    Subject : "string",
    StartTime : new Date("2020-10-13"),
    EndTime : new Date("2020-10-13T20:00:00.300Z"),
  }];

  public currentView: View = "Month";
  public selectedDate: Date = new Date(["2020","10","13"].join('-'));

  ngOnInit (): void {
    this.AppServiceService.getter().subscribe(data => {this.Data = data,console.log("4   ",this.Data)});
  }

}
