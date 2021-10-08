import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-category',
  template: `<app-products [products]="products" (loadMore)="onLoadMore()"></app-products>`,
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categoryId: string | null = null;
  limit = 5;
  offset = 2;
  products: Product[] = [];

  constructor(private route: ActivatedRoute, private productService: ProductsService) { }

  ngOnInit(): void {
    this.route.paramMap
    .pipe(
      switchMap(params => {
        this.categoryId = params.get('id');
        if (this.categoryId) {
          return this.productService.getByCategory(this.categoryId, this.limit, this.offset);
        }
        return [];
      })
    ).subscribe( (data) => {
      this.products = data
    });
  }

  onLoadMore() {
    if (this.categoryId) {
      this.productService
        .getByCategory(this.categoryId, this.limit, this.offset)
        .subscribe((data) => {
          this.products = this.products.concat(data);
          this.offset += this.limit;
        });
    }
  }
}
