import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from 'src/app/model/product';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../model/category';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {


  // id: number;
  product: Product;
  categories: Category[] = [];
  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormGroup({
      id: new FormControl(),
      name: new FormControl()
    })
  });
  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private categoryService: CategoryService) {
  }

  ngOnInit() {
    const id = Number(this.activatedRoute.snapshot.params.id);
    this.getProduct(id);
    this.getAllCategory();
  }

  getProduct(id: number) {
    return this.productService.findById(id).subscribe(product => {
      this.productForm.patchValue(product);
    });
  }

  submit() {
    this.product = this.productForm.value;
    this.findCategoryById(this.product.category.id);
  }


  getAllCategory() {
    this.categoryService.getAll().subscribe(value => {
      this.categories = value;
    }, error => {
      console.log('error');
    });
  }

  findCategoryById(id: number) {
    this.categoryService.findById(id).subscribe(category => {
      this.product.category.name = category.name;
      this.updateCategory();
    });
  }
  updateCategory() {
    this.productService.updateProduct(this.product.id, this.product).subscribe(() => {
      console.log('cap nhat thanh cong');
      this.router.navigateByUrl('/product/list');
    }, e => {
      console.log(e);
    });
  }

}
