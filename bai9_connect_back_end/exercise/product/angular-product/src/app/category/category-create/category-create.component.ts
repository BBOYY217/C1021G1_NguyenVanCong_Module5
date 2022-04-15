import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
  categoryForm: FormGroup = new FormGroup({
    name: new FormControl(),
  });

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
  }

  // submit() {
  //   const category = this.categoryForm.value;
  //   this.categoryService.saveCategory(category).subscribe(() => {
  //     this.categoryForm.reset();
  //     alert('create successfully');
  //   }, e => {
  //     console.log(e);
  //   });
  // }
  submit() {
    const category = this.categoryForm.value;
    this.categoryService.saveCategory(category).subscribe({
      next:()=>{
        this.categoryForm.reset();
        alert('create successfully');
      },
      error:(e)=>{
            console.log(e);
      }
    })
  }
}
