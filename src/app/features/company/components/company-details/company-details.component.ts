import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from 'src/app/core/services/company.service';
import { Company } from 'src/app/shared/model/company-model.model';

@Component({
  selector: 'spring-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  companyDetail: Company
  loading: string = "loading"

  constructor(private route: ActivatedRoute, private companyService: CompanyService) {

  }

  ngOnInit(): void {

    this.route.params.subscribe({
      next: (p) => this.requestDetailCompany(p['companyId']),
      error: (e) => this.loading = "error"
    })
  }

  public requestDetailCompany(companyId: number) {
    this.companyService.getOneCompanyById(companyId).subscribe({
      next: (v) => this.companyDetail = v,
      error: (e) => this.loading = "error",
      complete: () => this.loading = this.companyDetail != undefined ? "loaded" : "empity"
    })
  }

}


