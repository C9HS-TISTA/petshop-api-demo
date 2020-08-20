import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {
 // var getURL = 'http://54.157.159.142:4000/v1/businessstatus';


  constructor(private http: HttpClient) { }

  getRequest(businessName: string): Observable<any> {

    const options = {
      'headers': {
        Accept: 'application/json',
        'x-api-key': 'Api-Key 36QwZFehatFQwzcVYMzxfkgGxT9m5bjP',
        // 'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/x-www-form-urlencoded',
        "Access-Control-Allow-Origin" : '*',
        "Access-Control-Allow-Methods" : 'GET,POST,PATCH,DELETE,PUT,OPTIONS',
        "Access-Control-Allow-Headers" :'Origin, Content-Type, X-Auth-Token, content-type'
        // businessName: businessName
      },
      data: {
        businessName: businessName
      },
      mode: 'no-cors'

    };
    // return this.http.get(
    //   'http://54.157.159.142:4000/v1/businessstatus',options
    // );

    return this.http.get<any>('http://54.157.159.142:4000/v1/businessstatus', options);
 }

 sendRequest(form: any) {
  var options = {
    'headers': {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      'x-api-key': '36QwZFehatFQwzcVYMzxfkgGxT9m5bjP'
    }
  };
  var postURL :string;
  postURL ='https://54.157.159.142:4000/v1/addbusiness';

     return this.http.post(postURL, form, options);
 }
}