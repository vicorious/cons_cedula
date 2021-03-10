import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AlianzafServiceService {

  private alianzaUrl: string;
  constructor(private http: HttpClient) {
    this.alianzaUrl = 'http://localhost:8080/sifi/EnviarInformacion';
    this.alianzaUrl = 'http://localhost:8080/sifi/InformacionEncargos';
    this.alianzaUrl = 'http://localhost:8080/sifi/InformacionDatosGenerales';
  }

  public findAll(documento:string): Observable<any> {
    let params=null;
     params = new HttpParams().set("cedula",documento)

    return this.http.get(this.alianzaUrl , {params:params} );

  }

  public findAllEncargo(encargo:string): Observable<any> {
    let params=null;
     params = new HttpParams().set("encargo",encargo)

    return this.http.get(this.alianzaUrl , {params:params} );

  }

  public findAllContrato(contrato:string): Observable<any> {
    let params=null;
     params = new HttpParams().set("contrato",contrato)

    return this.http.get(this.alianzaUrl , {params:params} );

  }


}
