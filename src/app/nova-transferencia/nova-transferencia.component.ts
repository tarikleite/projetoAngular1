import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: [ './nova-transferencia.component.scss' ]
})
export class NovaTransferenciaComponent  {
  @Output() aoTransferir= new EventEmitter<any>();

      valor: number;
      destino: number;

  transferir(){
    const valorEmitir = { valor: this.valor, destino: this.destino};
    console.log('Transferido com sucesso');
    this.aoTransferir.emit(valorEmitir)
  }
  
}