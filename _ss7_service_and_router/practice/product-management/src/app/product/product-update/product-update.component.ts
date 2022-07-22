import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../service/product.service';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  productForm: FormGroup;
  id: number;
  product: Product;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
     this.id = Number(this.activatedRoute.snapshot.params.id);
     this.product = this.getProduct(this.id);
     this.productForm = new FormGroup({
      id: new FormControl(this.product.id),
      name: new FormControl(this.product.name),
      price: new FormControl(this.product.price),
      description: new FormControl(this.product.description),
    });
  }

  getProduct(id: number) {
    return this.productService.findById(id);
  }

  updateProduct(id: number) {
    const product = this.productForm.value;
    this.productService.updateProduct(id, product);
    this.router.navigateByUrl('/product/list');
    alert('Cập nhật thành công');
  }

}
