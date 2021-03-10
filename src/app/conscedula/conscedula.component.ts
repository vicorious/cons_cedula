import { Component, OnInit } from '@angular/core';
import { AlianzafServiceService } from '../services/alianzaf-service.service';
import { Clientes } from '../models/clientes';
import Swal from 'sweetalert2';




export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [


  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-conscedula',
  templateUrl: './conscedula.component.html',
  styleUrls: ['./conscedula.component.css']
})

export class ConscedulaComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;


  displayedColumnsencargo: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSourceencargo = ELEMENT_DATA;

  displayedColumnscontrato: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSourcecontrato = ELEMENT_DATA;

modelo: Clientes = {ndocumento :'',encargo:'',contrato:''}


respuestamovimiento:boolean= true;

  constructor(private conectar:AlianzafServiceService) {

  }

  ngOnInit() {
  }
   submit(){

      this.conectar.findAll(this.modelo.ndocumento).subscribe(data => {
          this.respuestamovimiento =false;

         this.dataSource = data;
         console.log(data);
         var mensaje = JSON.stringify(data.mensaje);
         var errormsg = mensaje.replace(/["]/g, "");

          Swal.fire({
              icon: 'error',
              title: '...Mensaje De Error...',
              text :errormsg
            });

      })

      this.conectar.findAllEncargo(this.modelo.encargo).subscribe(data => {
        this.respuestamovimiento =false;

       this.dataSource = data;

    })


    this.conectar.findAllContrato(this.modelo.contrato).subscribe(data => {
      this.respuestamovimiento =false;

     this.dataSource = data;

  })


   }
}
