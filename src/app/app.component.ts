import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  produtos: Object[] = [];

  constructor(http: HttpClient){

    http
    .get<any[]>('http://localhost:8080/TabacariaApp/produto')
    .subscribe(produtos => this.produtos = produtos );


  }
}
