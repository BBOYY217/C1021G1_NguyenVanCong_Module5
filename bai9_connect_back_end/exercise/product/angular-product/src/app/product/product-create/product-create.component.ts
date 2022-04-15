import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Category} from '../../model/category';
import {ProductService} from '../../service/product.service';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl()
  });
  category1: Category;
  categories: Category[] = [];

  constructor(private productService: ProductService,
              private categoryService: CategoryService) {
  }
  ngOnInit(): void {
    this.getAllCategory();
  }

  submit() {
    this.categoryService.findById(this.productForm.get('category').value).subscribe(category => {
      this.category1 = category;
      console.log(this.category1);
      const product = this.productForm.value;
      product.category = this.category1;
      this.productService.saveProduct(product).subscribe(() => {
        alert('Successfully');
      });
    });
  }

  getAllCategory() {
    this.categoryService.getAll().subscribe(categoires => {
      this.categories = categoires;
    });
  }

}
