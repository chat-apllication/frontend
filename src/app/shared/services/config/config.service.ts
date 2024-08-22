import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  apiUrl! :string
  configData:any
  constructor(private http :HttpClient) { }
  loadConfig(){
     return this.http.get('../../../assets/enviroment.config.json').pipe(
      map((data:any)=>{
        this.configData = data;
        this.apiUrl = data.apiUrl
        console.log(data, "data")
        return data
      })
     )
  }

}
