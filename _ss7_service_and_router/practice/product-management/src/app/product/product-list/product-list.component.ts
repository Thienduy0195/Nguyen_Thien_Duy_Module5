import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  categories: Category[] = [];

  constructor(private productService: ProductService,
              private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.productService.getAll().subscribe(value => {
      this.products = value;
    }, error => {
      console.log('error');
    });
  }

  getAllCategory() {
    this.categoryService.getAll().subscribe(value => {
      this.categories = value;
    }, error => {
      console.log('error');
    });
  }

  delete(id: number) {
    this.productService.deleteProduct(id);
    // console.log('OKE');
  }
}
