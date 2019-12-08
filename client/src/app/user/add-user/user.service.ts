import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  addBusiness(person_name, business_name, business_gst_number) {
    const obj = {
      person_name: person_name,
      business_name: business_name,
      business_gst_number: business_gst_number
    };
    console.log(obj);
    this.http.post(`${this.uri}/postData`, obj)
        .subscribe(res => console.log('Done'));
  }

  getBusinesses() {
    return this
           .http
           .get(`${this.uri}/getData`);
  }

  editBusiness(id) {
    return this
            .http
            .get(`${this.uri}/user/${id}`);
    }
  
    updateBusiness(person_name, business_name, business_gst_number, id) {

      const obj = {
          id: id,
          person_name: person_name,
          business_name: business_name,
          business_gst_number: business_gst_number
        };
      this
        .http
        .put(`${this.uri}/putData/${id}`, obj)
        .subscribe(res => console.log('Done'));
    }
    
    deleteBusiness(id) {
      return this
                .http
                .get(`${this.uri}/deleteUser/${id}`);
    }
}
