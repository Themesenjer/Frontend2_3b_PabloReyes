import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaPedidoComponent } from './components/lista-pedido/lista-pedido.component';
import { NuevoPedidoComponent } from './components/nuevo-pedido/nuevo-pedido.component';



@NgModule({
  declarations: [
    ListaPedidoComponent,
    NuevoPedidoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PedidoModule { }
