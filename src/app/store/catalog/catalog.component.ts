import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/models/product';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'iso-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit{
  productos$: Observable<Product[]>;

  constructor(private productsService: ProductosService) { }

  ngOnInit(): void{
    this.productos$ = this.productsService.getProductos();
  }

  buy(product: Product){
    //funcion comprar producto
  }

}
