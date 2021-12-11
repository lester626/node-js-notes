import { Component, OnInit } from '@angular/core';
import {Product} from "../models/product.model";

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent implements OnInit {

  product: Product = new Product();
  products: Array<Product> = [];
  categories: Array<string> = [];

  constructor() { }

  ngOnInit(): void {
    this.categories.push('All')
    this.categories.push('Electronics')
    this.categories.push('Food')
    this.categories.push('Drinks')
  }

  addProduct(){
    this.products.push({...this.product})
    this.product = new Product();
  }

}
