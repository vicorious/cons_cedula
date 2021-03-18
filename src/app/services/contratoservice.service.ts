import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable
(
    {
        providedIn: 'root'
    }
)
export class ContratoserviceService 
{
  private alianzaUrl: string;
  private alianzaEncargoUrl: string;
  private alianzaContratoUrl: string;
  private alianzaHistoricosUrl: string;
  private host: string;

  constructor(private http: HttpClient) 
  {
      this.host = ' https://8cf84b1e451b.ngrok.io';
      this.alianzaUrl           = this.host+'/sifi/MovimientosByContrato';
      this.alianzaEncargoUrl    = this.host+'/sifi/SaldosByContrato';
      this.alianzaContratoUrl   = this.host+'/sifi/SaldosPendientesByContrato';
      this.alianzaHistoricosUrl = this.host+'/sifi/HistoricoSaldosByContrato' 
  }

  public findAll(documento:string): Observable<any> 
  {
      let params = new HttpParams().set("cedula",documento)
      return this.http.get(this.alianzaUrl , {params:params} ).pipe(catchError(this.errorHandler));

  }

  public findAllEncargo(encargo:string): Observable<any> 
  {    
      let params = new HttpParams().set("cedula",encargo)
      return this.http.get(this.alianzaEncargoUrl , {params:params} ).pipe(catchError(this.errorHandler));

  }

  public findAllContrato(contrato:string): Observable<any> 
  {
      let params = new HttpParams().set("contrato",contrato)
      return this.http.get(this.alianzaContratoUrl , {params:params} ).pipe(catchError(this.errorHandler));
  }

  public findAllHistoricos(contrato:string): Observable<any> 
  {
      let params = new HttpParams().set("contrato",contrato)
      return this.http.get(this.alianzaHistoricosUrl , {params:params} ).pipe(catchError(this.errorHandler));
  }  

  errorHandler(error: HttpErrorResponse) 
  {    
      return throwError(error.message || "server error.");
  }
    
}
