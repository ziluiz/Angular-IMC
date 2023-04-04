import { Component } from '@angular/core';

@Component({
  selector: 'app-calcular',
  templateUrl: './calcular.component.html',
  styleUrls: ['./calcular.component.css']
})
export class CalcularComponent {


  peso : number = 0;
  altura : number = 0;
  imc : number = 0;

  calimc(){

    this.imc=this.peso*(this.altura)^2


  }

}
