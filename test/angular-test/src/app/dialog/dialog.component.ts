import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../service/product.service';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  // productRadio = ["new","like new","old"]

  productForm !: FormGroup;
  actionBtn: string= "save"
  constructor(private formBuilder: FormBuilder,
              private productService: ProductService,
              private dialogRef :MatDialogRef<DialogComponent>,
              @Inject(MAT_DIALOG_DATA) public editData : any) {
  }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
      // date:['',Validators.required]
    });
    if (this.editData){
      this.actionBtn = "update";
      this.productForm.controls['name'].setValue(this.editData.name);
      this.productForm.controls['price'].setValue(this.editData.price);
      this.productForm.controls['category'].setValue(this.editData.category);
    }
  }

  addProduct() {
    if (this.editData){
      if (this.productForm.valid){
        this.productService.postProduct(this.productForm.value).subscribe({
          next:(res)=>{
            alert("product add successfully")
            this.productForm.reset();
            this.dialogRef.close('save');
          },
          error:()=>{
            alert("Error while adding the product")
          }
        })
      }
    }
    else {
      this.updateProduct()
    }
  }
  updateProduct(){
    this.productService.putProduct(this.productForm.value,this.editData.id).subscribe({
      next:(res)=>{
        alert("Product update successfully");
        this.productForm.reset();
        this.dialogRef.close('update');
      },
      error:()=>{
        alert("Error while updating the record");
    }
    })
  }
}
