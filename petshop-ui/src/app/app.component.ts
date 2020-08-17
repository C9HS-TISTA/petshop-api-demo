import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from './api-calls.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';

export interface  BusinessInfo {
  businesName: string;
  accoundId : string;
  companyName: string;
  
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'petshop-ui';
  businessName: string;
  responseData: string;
  post_response: string;
  responseObj: any;
  result = false;
  getUsersSuccess = false;
  errorMessage = '';
  statusText = '';
  reqObj = {
    businessName: '',
    businessInfo : {
      acccountid : '',
      companyname: '',
      veteranemployees: '',
      duns: '',
      registration: '',
      expirationdate: '',
      sdvosb: '',
      naics: '',
      hubzone: '',
      vosb: '',
      isverified: '',
      webaddress: '',
      wosb: '',
      lastverified: '',
      yearestablished: '',
      mentorprotege: '',
      mosb: '',
      companyemail: ''
    }
  }
  successResponse: any;
  constructor( private apiCallsService: ApiCallsService, private http: HttpClient) {
   }

  ngOnInit(): void {
    
  }

   getUsers(name: string): void {
    console.log(name);
    this.apiCallsService.getRequest(name).subscribe(
      data => {
        this.getUsersSuccess = true;
      this.responseData = JSON.stringify(data);
    },
    error => {
      this.getUsersSuccess = false;
      this.errorMessage = error.message;
      this.statusText = error.statusText;
      console.log('response from GET businessstatus call' + error);
    }
    );
  }

  onSubmitForm(formData:NgForm) {
    this.reqObj.businessName = formData[0].value;
    this.reqObj.businessInfo.acccountid = formData[1].value;
    this.reqObj.businessInfo.companyname = formData[2].value;
    this.reqObj.businessInfo.veteranemployees = formData[3].value;
    this.reqObj.businessInfo.duns = formData[4].value;
    this.reqObj.businessInfo.registration = formData[5].value;
    this.reqObj.businessInfo.expirationdate = formData[6].value;
    this.reqObj.businessInfo.sdvosb = formData[7].value;
    this.reqObj.businessInfo.naics = formData[8].value;
    this.reqObj.businessInfo.hubzone = formData[9].value;
    this.reqObj.businessInfo.vosb = formData[10].value;
    this.reqObj.businessInfo.isverified = formData[11].value;
    this.reqObj.businessInfo.webaddress = formData[12].value;
    this.reqObj.businessInfo.wosb = formData[13].value;
    this.reqObj.businessInfo.lastverified = formData[14].value;
    this.reqObj.businessInfo.yearestablished = formData[15].value;
    this.reqObj.businessInfo.mentorprotege = formData[16].value;
    this.reqObj.businessInfo.mosb = formData[17].value;
    this.reqObj.businessInfo.companyemail = formData[18].value;

    this.apiCallsService.sendRequest(this.reqObj).subscribe(
      data => {
        if (data !== undefined) {
          this.result = true;
          this.successResponse = data;
          
        }
       
      console.log('Response from addbusiness post call' + data);

    }, error => {
      this.result = false;
      console.log('Response from addbusiness post call' + error);
    });
  }
}
