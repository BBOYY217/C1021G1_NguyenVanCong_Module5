import {Injectable} from '@angular/core';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    {
      id: 1,
      name: 'IPhone 8',
      price: 5000,
      description: 'New'
    }, {
      id: 2,
      name: 'IPhone 10',
      price: 6000,
      description: 'Like new'
    }, {
      id: 3,
      name: 'IPhone 11',
      price: 7000,
      description: '50%'
    }, {
      id: 4,
      name: 'IPhone X',
      price: 8000,
      description: '85%'
    }, {
      id: 5,
      name: 'IPhone 11 Pro',
      price: 9000,
      description: 'Like new'
    }];

  constructor() {
  }

  findAll() {
    return this.products;
  }

  saveProduct(product) {
    this.products.push(product);
  }

  findById(id: number) {
    return this.products.find(product => product.id === id);
  }

  editProduct(product) {
    this.products.find(pr => pr.id === product.id).name = product.name;
    this.products.find(pr => pr.id === product.id).price = product.price;
    this.products.find(pr => pr.id === product.id).description = product.description;
  }

  deleteProduct(id: number) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        this.products.splice(i, 1);
      }
    }
  }
}
