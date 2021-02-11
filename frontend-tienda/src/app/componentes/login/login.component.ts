import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form = {
    email: null,
    password: null
  };

  error:string;

  constructor(private http: HttpClient) { }

  onSubmit() {

    return this.http.post('http://127.0.0.1:8000/api/login', this.form).subscribe(data => {
        // Entra aquí con respuesta del servicio correcta código http 200
        console.log(data)
    }, err => {
        // Puedes pasarle el err en caso de que mandes el mensaje desde el 
    
        this.error = "Email o password no existe"
    })}

  ngOnInit() {
  }

}
