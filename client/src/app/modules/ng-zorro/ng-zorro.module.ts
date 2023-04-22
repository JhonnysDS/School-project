import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    NzLayoutModule,
    NzBreadCrumbModule,
    NzButtonModule
  ]
})
export class NgZorroModule { }
