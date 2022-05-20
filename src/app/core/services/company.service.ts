import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from 'src/app/shared/model/company-model.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private Http: HttpClient) { }

  public getAllCompany(): Observable<Company[]> {
    const url = environment.baseUrl + '/company';
    return this.Http.get<Company[]>(url);
  }

  public getOneCompanyById(companyId: number): Observable<Company> {
    const url = environment.baseUrl + '/company/' + companyId;
    return this.Http.get<Company>(url);
  }
}
