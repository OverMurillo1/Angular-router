import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'

import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { ReversePipe } from '../shared/pipes/reverse.pipe';
import { ImgComponent } from '../shared/components/img/img.component';

import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    ProductComponent,
    ProductsComponent,
    TimeAgoPipe,
    HighlightDirective,
    ReversePipe,
    ImgComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SwiperModule
  ],
  exports:[
    ProductComponent,
    ProductsComponent,
    TimeAgoPipe,
    HighlightDirective,
    ReversePipe,
    ImgComponent
  ]
})
export class SharedModule { }
