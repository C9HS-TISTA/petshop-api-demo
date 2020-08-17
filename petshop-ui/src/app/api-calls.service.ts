import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {

  constructor(private http: HttpClient) { }

  getRequest(businessName: string): Observable<any> {
    const options = {
      'headers': {
        'Accept': 'application/json',
        'x-api-key': 'Api-Key 36QwZFehatFQwzcVYMzxfkgGxT9m5bjP',
        // 'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      form: {
        'businessName': businessName
      }
    };
    
    return this.http.get<any>('http://54.157.159.142:4000/v1/businessstatus', options);
//    return this.http.get<any>('https://reqres.in/api/users', options);
 }

 sendRequest(req: any) {
  var options = {
    'headers': {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      'x-api-key': '36QwZFehatFQwzcVYMzxfkgGxT9m5bjP'
    },
    form: {
      req
    }
  };
     return this.http.post('https://54.157.159.142:4000/v1/addbusiness', options);
  // return this.http.post('https://reqres.in/api/users', options);
 }
 
 postUser(postData: any) {

 }
}