import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IData } from '../interfaces/IData.interface';
import { IDataSource } from '../interfaces/IDataSource.interface';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  constructor(private httpClient: HttpClient) {
    this.getter = this.getter.bind(this);
    this.TransData = this.TransData.bind(this);
  }
  

  
  getter():Observable<IDataSource[]>{
    return this.httpClient.get(`http://localhost:`+3000+"/data").pipe(map(data => {console.log("2   ",data);return this.TransData(data)}));
  }

  
  

  private TransData = (Data: Object):IDataSource[] => {

    const DataValues: IData[] = Object.values(Data);
    var TransData: IDataSource[] = [];

    for (let i = 0; i < DataValues.length; i++) {

      var startDate =  DataValues[i].StartDate.join('-')+"T"+DataValues[i].StartTime.join(':');

      TransData = TransData.concat([{
        Id : DataValues[i].UUID,
        Subject : DataValues[i].Name,
        StartTime : new Date(startDate),
        EndTime : new Date(new Date(startDate).setMinutes(new Date(startDate).getMinutes()+DataValues[i].Duration)),
      }])
    };
    return TransData;
  };

}