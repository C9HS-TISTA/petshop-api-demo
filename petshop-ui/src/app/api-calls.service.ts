import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {
  constructor(private http: HttpClient) { }

// Block chain API for getting the business details */
  getBusinessCall(businessName: string): Observable<any> {
    /* Test API gateway call
      const url = 'https://rmsxqazen1.execute-api.us-east-1.amazonaws.com/tista-mock-api-dev/businessname';
   */
    const url = 'http://54.157.159.142:4000/v1/businessstatus';
    const options = {

      'headers': {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        'x-api-key': 'Api-Key 36QwZFehatFQwzcVYMzxfkgGxT9m5bjP'
      }
    };
    const form = 'businessName=' + businessName;

    return this.http.post(url, form, options);
  }

// Block chain API for adding the business details */
  addBusiness(form: any) {
    var postURL: string;
    postURL = 'http://54.157.159.142:4000/v1/addbusiness';
    var options = {
      'headers': {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        'x-api-key': 'Api-Key 36QwZFehatFQwzcVYMzxfkgGxT9m5bjP'
      }
    };

    const req = 'businessName=' + form.businessName + '&' + 'businessInfo=' + JSON.stringify(form.businessInfo)
    return this.http.post(postURL, req, options);
  }
}