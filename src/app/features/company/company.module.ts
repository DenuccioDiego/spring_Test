import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyContainerComponent } from './components/company-container/company-container.component';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';
import { CompanyListItemComponent } from './components/company-list-item/company-list-item.component';
import { CompanyRoutingModule } from './company-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    CompanyContainerComponent,
    CompanyDetailsComponent,
    CompanyListItemComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    SharedModule
  ],
  exports: [
    CompanyContainerComponent
  ]
})
export class CompanyModule { }
