import { Component, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  produtos: Object[] = [];
  readonly url = 'http://localhost:8080/TabacariaApp';

  constructor(private http: HttpClient){

    /* http
    .get<any[]>(`${this.url}/produto`)
    .subscribe(produtos => {
      console.log(produtos)
      this.produtos = produtos
    }); */

    this.getProdutos().subscribe(produtos => {
      console.log(produtos)
      this.produtos = produtos
    });
    
  }
  
  // TODO: Método que retorne os produtos
  // ...

  public getProdutos(): Observable<Object[]> {
    return this.http.get<any[]>(`${this.url}/produto`);
  }

}
