import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CompanyContainerComponent } from './components/company-container/company-container.component';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';

const routes: Routes = [
  { path: '', component: CompanyContainerComponent },
  { path: 'show/:companyId', component: CompanyDetailsComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CompanyRoutingModule { }
