import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../model/category';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  category: Category;
  categories: Category[] = [];
  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormGroup({
      id: new FormControl(),
      name: new FormControl()
    }),
  });
  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAllCategory();
  }

  submit() {
    const product = this.productForm.value;
    this.categoryService.findById(product.category.id).subscribe(value => {
      this.category = value;
      console.log(value);
      product.category.name = this.category.name;
      this.productService.saveProduct(product).subscribe(() => {
        alert('Tạo thành công');
        this.productForm.reset();
        this.router.navigateByUrl('/product/list');
      }, e => console.log(e));
      this.productForm.reset();
    });
  }

  getAllCategory() {
    this.categoryService.getAll().subscribe(value => {
      this.categories = value;
    }, error => {
      console.log('error');
    });
  }
}
