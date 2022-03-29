import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, Output } from "@angular/core";
import { Transferencia } from '../models/transferencia.model';
import { Router } from '@angular/router';

@Component({
    selector:'app-nova-transferencia',
    templateUrl:'./nova-transferencia.component.html',
    styleUrls:['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent{

    @Output() aoTransferir = new EventEmitter<any>()

    valor: number = 0;
    destino: number = 0;
    transferencia: any;

    constructor(private service: TransferenciaService, private router: Router){

    }


    transferir(){
        console.log("Valor:"+this.valor+" ")
        const valorAEmitir: Transferencia = {valor:this.valor, destino: this.destino}
        this.service.adicionar(valorAEmitir).subscribe((resultado)=>{
          console.log(resultado);
          this.limparCampo();
          this.router.navigateByUrl('extrato');
        },
        erro=>{
          console.log(erro);
        })
    }

    limparCampo(){
        this.valor = 0;
        this.destino = 0;
    }
}
