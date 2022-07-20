import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public products = new Array();
  title = 'Products';
  productToUpdate: any;

  ngOnInit() {
    this.products = this.getProducts();
  }

  getProducts() {
    return [
      {id: 'PR-232', title: 'Screw Driver', price: 400, stock: 11},
      {id: 'PR-986', title: 'Nut Volt', price: 200, stock: 5},
      {id: 'PR-123', title: 'Resistor', price: 78, stock: 45},
      {id: 'PR-555', title: 'Tractor', price: 20000, stock: 1},
      {id: 'PR-333', title: 'Roller', price: 62, stock: 15},
    ];
  }

  changeStockValue(p: any) {
    this.productToUpdate = this.products.find(
      elementProduct => elementProduct.id === p.id);
    // for (const elementProduct of this.products) {
    //   if (elementProduct.id === p.id) {
    //     this.productToUpdate = elementProduct;
    //     break;
    //   }
    // }
    this.productToUpdate.stock += p.updatedStockValue;
  }
}