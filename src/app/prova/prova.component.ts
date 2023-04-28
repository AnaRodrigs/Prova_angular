import { Component } from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css']
})
export class ProvaComponent {
dolar : number = 0;
euro : number =0;
libra : number =0;
cambio : number =0;
dolarconvertido : string = '';
euroconvertido : string ='';
libraconvertido : string ='';


calculo ()
{

this.dolarconvertido= (this.cambio / this.dolar).toFixed(2);
this.euroconvertido= (this.cambio / this.euro).toFixed(2);
this.libraconvertido= (this.cambio / this.libra).toFixed(2);

}
}
