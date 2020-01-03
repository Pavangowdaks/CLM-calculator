import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  public customerLogin = [
    {
      id: 1, name: 'pavan' , phone: 8722258171, email: 'pavangowda@gmail.com', password: '8722258171' 
    }, {
      id: 2, name: 'arun' , phone: 8722258172, email: 'pavan@gmail.com', password: '8722258172' 
    }, {
      id: 3, name: 'arun' , phone: 8722258172, email: 'arun@gmail.com', password: '8722258172' 
    },
  ];

  public logins(data) {
    console.warn('data', data);
    console.warn(this.customerLogin);
    
    return this.customerLogin.filter((d)=> {
      return d.email === data.email && d.password === data.password;
    });
  }

  public create(customer) {
    console.warn("customer details", customer);
    return customer;
  }

}
