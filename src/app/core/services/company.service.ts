import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompanyRoutingModule } from 'src/app/features/company/company-routing.module';
import { CompanyModule } from 'src/app/features/company/company.module';
import { CompanyContainerComponent } from 'src/app/features/company/components/company-container/company-container.component';
import { Company } from 'src/app/shared/model/company-model.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class CompanyService {

  constructor(private Http: HttpClient) { }

  public getAllCompany(): Observable<Company[]> {
    const url = environment.baseUrl + '/companies';
    return this.Http.get<Company[]>(url);
  }

  public getOneCompanyById(companyId: Number): Observable<Company> {
    const url = environment.baseUrl + '/companies/' + companyId;
    return this.Http.get<Company>(url);
  }
}
