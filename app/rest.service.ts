import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import 'rxjs/Rx';
import Data from './data.ts';

@Injectable()
export class DataService {
  constructor(
    private http: HttpClient
  ) {}

  /* mock method - DO NOT DELETE */
  /* istanbul ignore next */
  getJSONData(jsonFileName) {
    let jsonurl = Data;
    return this.http.get(jsonurl).map(
      /*istanbul ignore next*/ (res: any) => {
        console.log(res);
        return res;
      }
    ); 
  }
  /* END - mock method */
}
