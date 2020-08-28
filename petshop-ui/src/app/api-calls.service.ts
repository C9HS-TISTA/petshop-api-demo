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
  //  const url = 'http://localhost:8080/api/v1/business/name/'+businessName;
  //  const url = 'https://fveiyib1lg.execute-api.us-east-1.amazonaws.com/dev/myrestgw?transactionId=1&type=Pur&amount=600';
  //  const url = 'https://rmsxqazen1.execute-api.us-east-1.amazonaws.com/tista-mock-api-dev/api?queryStringParameters'+businessName;
  //  const url = 'https://rmsxqazen1.execute-api.us-east-1.amazonaws.com/tista-mock-api-dev/businessname';
  const url = 'http://54.157.159.142:4000/v1/businessstatus';
//  var urlencoded = new URLSearchParams();
// urlencoded.append("queryStringParameters", "testsandeep");
    const options = {
    
      'headers': {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
// // BLOCKCHAIN
'x-api-key': 'Api-Key 36QwZFehatFQwzcVYMzxfkgGxT9m5bjP'
//         // 'ContentType': 'application/x-www-form-urlencoded'

// //VEMS API 
//          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJteXVzZXJuYW1lIiwiZXhwIjoxNTk5MTY3Mjc5fQ.7_wRjuqtUr0YOwIWtZKXisLLD3t78pC4s4WckgiK2D-cUgNEeqgQW1nuy10pGjAh7T8fXOa1aWnD4bo2NN4a4Q'

      //   'Access-Control-Allow-Origin': '*'
//         // 'Content-Type': 'application/json',
// "sec-fetch-dest":"empty",
// "sec-fetch-mode":"cors",
// "sec-fetch-site":"cross-site",
      
//        //  "Access-Control-Allow-Origin" : '*'
//         //  "Access-Control-Allow-Methods" : 'GET,POST,PATCH,DELETE,PUT,OPTIONS',
//         //  "Access-Control-Allow-Headers" :'Origin, Content-Type, X-Auth-Token, content-type'
//       //   // businessName: businessName
      }   //  ,
// BLOCKCHAIN

  //  data: {
  //     "businessName": businessName
  //    }
    
    };
    const form = 'businessName=' + businessName;
    
// BLOCKCHAIN
    // return this.http.get(
    //   'https://rmsxqazen1.execute-api.us-east-1.amazonaws.com/tista-mock-api-dev/businessname',options
    //  // 'http://54.157.159.142:4000/v1/businessstatus',options
    // );

//VEMS API 
return this.http.post(url, form, options);
//   return this.http.get<any>(url,options);
//WEATHER FORECAST
  //  return this.http.get('https://api.aerisapi.com/forecasts/minneapolis,mn?&format=json&filter=day&limit=7&client_id=AcxJ7pqDEeRA8kcDUOTPS&client_secret=srQU1W4bKuWF1E660KRBsAgJMeOFmTY1Vhl3csAM', options);
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