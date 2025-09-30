import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Clientes } from "./clientes";

@Injectable({
    providedIn: 'root'
})
export class ClientesSerivices {
    private options;
    private url = 'http://127.0.0.1:5000/api/v1/lista_clientes';
    constructor(public http: HttpClient){
        let headers = new HttpHeaders({
            'Content-Type': 'application/json'
        })
        this.options = {headers:headers}
    }
    ObtenerClientes(): Observable<any>{
         return this.http.get<Observable<any>>(
            this.url
        );
    }
    GuardarClientes(cliente: Clientes){
        let clienteJson = JSON.stringify(cliente);
        return this.http.post(this.url,cliente, this.options)
    }
}