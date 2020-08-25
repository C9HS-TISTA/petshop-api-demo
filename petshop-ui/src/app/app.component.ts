import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from './api-calls.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { BusinessInfomation } from './business.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'petshop-ui';

  business: BusinessInfomation = {
    businessName : '',
    businessInfo : {
        acccountid : '',
        companyname : '',
        veteranemployees : '',
        duns : '',
        registration : '',
        expirationdate : '',
        sdvosb : '',
        naics : '',
        hubzone : '',
        vosb : '',
        isverified : '',
        webaddress : '',
        wosb : '',
        lastverified : '',
        yearestablished : '',
        mentorprotege : '',
        mosb : '',
        companyemail : ''
     }
  };
  businessNameGT: string;
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
      this.statusText = error.status;
      console.log('response from GET businessstatus call' + error.response);
    }
    );
  }

  onSubmitForm(BusinessForm:NgForm) {
    this.business.businessName = BusinessForm.value.businessName;
    this.business.businessInfo.acccountid = BusinessForm.value.acccountid;
    this.business.businessInfo.companyname = BusinessForm.value.companyname;
    this.business.businessInfo.veteranemployees = BusinessForm.value.veteranemployees;
    this.business.businessInfo.duns = BusinessForm.value.duns;
    this.business.businessInfo.registration = BusinessForm.value.registration;
    this.business.businessInfo.expirationdate = BusinessForm.value.expirationdate;
    this.business.businessInfo.sdvosb = BusinessForm.value.sdvosb;
    this.business.businessInfo.naics = BusinessForm.value.naics;
    this.business.businessInfo.hubzone = BusinessForm.value.hubzone;
    this.business.businessInfo.vosb = BusinessForm.value.vosb;
    this.business.businessInfo.isverified = BusinessForm.value.isverified;
    this.business.businessInfo.webaddress = BusinessForm.value.webaddress;
    this.business.businessInfo.wosb = BusinessForm.value.wosb;
    this.business.businessInfo.lastverified = BusinessForm.value.lastverified;
    this.business.businessInfo.yearestablished = BusinessForm.value.yearestablished;
    this.business.businessInfo.mentorprotege = BusinessForm.value.mentorprotege;
    this.business.businessInfo.mosb = BusinessForm.value.mosb;
    this.business.businessInfo.companyemail = BusinessForm.value.companyemail;

    this.apiCallsService.sendRequest(this.business).subscribe(
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
