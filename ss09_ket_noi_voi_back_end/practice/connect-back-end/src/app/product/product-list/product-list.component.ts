import {Component, OnInit} from '@angular/core';
import {ProductService} from '../product.service';
import {Product} from '../../model/product';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  idDelete: number;
  nameDelete: string;

  constructor(private productService: ProductService, private toastrService: ToastrService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.products = this.productService.getAll();
  }

  openDelete(product: Product) {
    this.idDelete = product.id;
    this.nameDelete = product.name;
  }

  deleteProduct() {
    this.productService.delete(this.idDelete);
    this.ngOnInit();
    this.toastrService.success('Xóa thành công', 'Thông báo');
  }
}
