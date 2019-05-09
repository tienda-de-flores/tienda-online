import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Product } from '../shared/models/product';

@Injectable()
export class ProductosService {
constructor(private db: AngularFirestore) { }

  getProductos(): Observable<Product[]>{
    return this.db.collection<Product>('productos').valueChanges();     
  }
  //observable= coleccion de valores ue vive cierto tiempo
  //observador = el qe esta suscrito al observable y ve os cambios de la colecion
  
}
