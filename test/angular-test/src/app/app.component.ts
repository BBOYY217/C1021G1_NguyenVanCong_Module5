import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogComponent} from './dialog/dialog.component';
import {ProductService} from './service/product.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-test';
  displayedColumns: string[] = ['id','name', 'price', 'category' , 'action'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dialog: MatDialog,
              private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getAllProduct();
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '30%'
    }).afterClosed().subscribe(val=>{
      if (val === 'save'){
        this.getAllProduct();
      }
    })
  }

  getAllProduct() {
    this.productService.getProduct().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort= this.sort;
      },
      error: () => {
        alert('Error while fetching the record !!');
      }
    });
  }

  editProduct(row : any){
    this.dialog.open(DialogComponent,{
      width:'30%',
      data: row,
    }).afterClosed().subscribe(val=>{
      if (val === 'update'){
        this.getAllProduct();
      }
    })
  }

  deleteProduct(id:number){
    this.productService.deleteProduct(id).subscribe({
      next:()=>{
        alert("product delete successfully");
        this.getAllProduct();
      },
      error:()=>{
        alert('Error while fetching the record !!');
    }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}
