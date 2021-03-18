import { Component, OnInit, ViewChild } from '@angular/core';
import { AlianzafServiceService } from '../services/alianzaf-service.service';
import { Clientes } from '../models/clientes';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component
(
    {
        selector: 'app-conscedula',
        templateUrl: './conscedula.component.html',
        styleUrls: ['./conscedula.component.css']
    }
)
export class ConscedulaComponent implements OnInit 
{
    @ViewChild(MatPaginator)
    paginator!: MatPaginator;
    @ViewChild(MatSort)
    sort!: MatSort;

  displayedColumns: string[] = [ 'fondo',  'contrato', 'fondo1','digito', 'estado', 'nombre', 'clasetitu', 'estadot', 'clase', 
                                'relacion', 'fechaa', 'direccion', 'ciudad', 'tele', 'ejecutivo', 'fechac',
                                  'compartimiento' ];
  dataSource: MatTableDataSource<any>;

  DATASOURCE: any[] =
  [
      {
          "cedula": 10101010011,
          "fondo": 1123123123,
          "contrato": 100020202,
          "digito": 0,
          "clasetitu": "Alejandro Lindarte",
          "nombre":"ALEJO LINDARTE",
          "relacion": "A",
          "estadot": "ACV",
          "nombrecuenta": "CTA LA VERGA",
          "estado": "ACTIVO",
          "fechac": "1992/11/22",
          "ejecutivo": "EJECTUVO PRUEBA",
          "tele": 6908723,
          "direccion": "Carrera 106a #143-31",
          "ciudad": "BOGOTA",
          "ttpadescripcion": "PERSONA NATURAL",
          "fechaa": "29/11/1992",
          "clase": "Principal",
          "compartimiento": "ALAA"
       },

       {
        "cedula": 10101010011,
        "fondo": 1123123123,
        "contrato": 100000202,
        "digito": 0,
        "clasetitu": "Carlos barrera",
        "nombre":"ALEJO LINDARTE",
        "relacion": "I",
        "estadot": "ACV",
        "nombrecuenta": "CTA LA VERGA",
        "estado": "ACTIVO",
        "fechac": "1992/11/22",
        "ejecutivo": "EJECTUVO PRUEBA",
        "tele": 6908723,
        "direccion": "Carrera 106a #143-31",
        "ciudad": "BOGOTA",
        "ttpadescripcion": "PERSONA NATURAL",
        "fechaa": "29/11/1992",
        "clase": "Principal",
        "compartimiento": "ALAA"
     }   ,
     {
        "cedula": 43331212,
        "fondo": 11232,
        "contrato": 100000202,
        "digito": 1,
        "clasetitu": "Carlos barrera",
        "nombre":"ALEJO LINDARTE",
        "relacion": "A",
        "estadot": "ACV",
        "nombrecuenta": "CTA LA VERGA",
        "estado": "ACTIVO",
        "fechac": "1992/11/22",
        "ejecutivo": "EJECTUVO PRUEBA",
        "tele": 690223323,
        "direccion": "Carrera 106a #143-31",
        "ciudad": "BOGOTA",
        "ttpadescripcion": "PERSONA NATURAL",
        "fechaa": "29/11/1992",
        "clase": "Principal",
        "compartimiento": "ALAA"
     }      
  ]


  displayedColumnsencargo: string[] = ['Nombre', 'Identificacion', 'Tipo de lista', 'Clase de lista'];
  dataSourceencargo:  MatTableDataSource<any>;

  displayedColumnscontrato: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSourcecontrato: MatTableDataSource<any>;

  modelo: Clientes = {ndocumento :'N/A'}


  submit_findAll:boolean= false;
  submit_encargo:boolean= false;
  submit_contrato:boolean= false;

  bgColor: string = this.getRandomColor(false);

  accent : string = "accent";

  constructor(private conectar:AlianzafServiceService, private _snackBar: MatSnackBar) 
  {
      this.dataSource = new MatTableDataSource();
      this.dataSourceencargo = new MatTableDataSource();
      this.dataSourceencargo.data = [];
      this.dataSourcecontrato = new MatTableDataSource();
  }

  ngOnInit() 
  {}

  ngAfterViewInit() 
  {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
  }
   
  submit()
  {
      
      this.submit_findAll = false;
      this.submit_encargo = false;
      this.submit_contrato = false;

      this.dataSource = new MatTableDataSource(this.DATASOURCE);
      /*this.conectar.findAll(this.modelo.ndocumento).subscribe
      (
          data => 
          {
              this.dataSource.data = data;
              this.submit_findAll = false;                          
          },
          error =>
          {
              this.submit_findAll = false; 
              this.openSnackBar(error, '');

          }
          
      )

      this.submit_findAll = false; 
      this.conectar.findAllEncargo(this.modelo.ndocumento).subscribe
      (
          data => 
          {
              this.dataSourceencargo.data = data;
              this.submit_encargo = false;

          },
          error =>
          {
              this.submit_encargo = false;
              this.openSnackBar(error, '');

          }
      )


    this.conectar.findAllContrato(this.modelo.ndocumento).subscribe
    (
          data => 
          {              
                this.dataSourcecontrato = data;
                this.submit_contrato = false;

          },
          error =>
          {
                this.submit_contrato = false;
                this.openSnackBar(error, '');

          }
    )*/



   }

    getRandomColor(is_white: boolean) 
    {
        var gray = "#" + "999999"
        var white = "#" + "ffffff"
        return is_white ? gray : white;
    }

   back()
   {
        this.dataSource.data = [];
        this.dataSourceencargo.data = [];
   }

    openSnackBar(message: string, action: string) 
    {
        this._snackBar.open(message, action, 
        {
            duration: 2000,
        });

    }
}
