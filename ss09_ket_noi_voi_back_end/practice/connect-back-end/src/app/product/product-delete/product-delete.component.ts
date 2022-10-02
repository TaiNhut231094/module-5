import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  productForm: FormGroup;
  id: number;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      const product = this.productService.getProduct(this.id);
      this.productForm = new FormGroup({
        id: new FormControl(product.id),
        name: new FormControl(product.name),
        price: new FormControl(product.price),
        description: new FormControl(product.description),
      });
    });
  }

  deleteProduct(id: number) {
    this.productService.delete(id);
    this.router.navigateByUrl('/product/list');
  }
}
