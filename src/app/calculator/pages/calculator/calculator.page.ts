import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {
  public n1: number;
  public n2: number;
  public answer: number;
  public user: any = {};

  constructor() { }

  ngOnInit() {
  }

  public calculate = () => {
    let n1 = this.n1;
    let n2 = this.n2;
    this.answer = this.gcd(n1, n2);
  }

  public gcd = (n1, n2) => {
    let lcm = (n1 > n2) ? n1 : n2;

    while(true)
    {
        if( lcm % n1 == 0 && lcm % n2 == 0 )
        {
            break;
        }
        ++lcm;
    }
    return lcm;
  }
  
}
