import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CatalogComponent } from './catalog.component';
import { SharedModule } from '../shared/shared.module'
import { OrderByPipe } from './order-by.pipe';

@NgModule({
  imports: [RouterModule, SharedModule],
  declarations: [CatalogComponent, OrderByPipe],
  exports: [],
  providers: []
})
export class CatalogModule { };
