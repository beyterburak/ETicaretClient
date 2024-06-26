import { Component, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Create_Product } from 'src/app/contracts/craete_product';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent {
  constructor(spinner: NgxSpinnerService) {
    super(spinner);
  }
  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallScaleMultiple);
  }

  @ViewChild(ListComponent) listComponents: ListComponent;

  createdProduct(createdProduct: Create_Product) {
    this.listComponents.getProducts();
  }
}
