import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { ServiceService } from '../../../service/service.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {
  public n1: number;
  public answer: number;
  public user: any = {};
  public a: string;
  public lcm_of_array_elements: number;
  public divisor: number;
  public counter:number;
  public divisible: boolean;

  constructor(
    public fAuth: AngularFireAuth,
    public service: ServiceService,
    ) { }

  ngOnInit() {
  }

  public calculate = () => {
    let record = {};
    let n1 = this.n1;
    this.a = String(n1);
    var b = this.a.split(',' && ' ').map(function(item) {
        return parseInt(item, 10);
      });
    this.answer = this.LCM(b);
    record['numbers'] = this.a;
    record['answer'] = this.answer;
    this.service.create_record(record);
    this.answer;
  }
  
  public LCM(element_array) {
    this.lcm_of_array_elements = 1; 
      this.divisor = 2; 
          
      while (true) { 
        this.counter = 0; 
        this.divisible = false; 
          
        for (let i = 0; i < element_array.length; i++) { 
          if (element_array[i] == 0) { 
            return 0; 
          } 
          else if (element_array[i] < 0) { 
            element_array[i] = element_array[i] * (-1); 
          } 
          if (element_array[i] == 1) { 
            this.counter++; 
          } 
          if (element_array[i] % this.divisor == 0) { 
            this.divisible = true; 
            element_array[i] = element_array[i] / this.divisor; 
          } 
        } 
        if (this.divisible) { 
          this.lcm_of_array_elements = this.lcm_of_array_elements * this.divisor; 
        } 
        else { 
          this.divisor++; 
        } 
        if (this.counter == element_array.length) { 
          return this.lcm_of_array_elements; 
        } 
      } 
  }
}
