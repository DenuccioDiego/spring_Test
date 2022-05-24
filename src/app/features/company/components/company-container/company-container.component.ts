
import { DATE_PIPE_DEFAULT_TIMEZONE } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/core/services/company.service';
import { Company } from 'src/app/shared/model/company-model.model';
import { environment } from 'src/environments/environment';
import { __spreadArrays } from 'tslib';

@Component({
  selector: 'spring-company-container',
  templateUrl: './company-container.component.html',
  styleUrls: ['./company-container.component.css']
})

export class CompanyContainerComponent implements OnInit {

  loading: string = 'loading';
  companyList: Company[] = [];


  constructor(private router: Router, private companyService: CompanyService) {
    this.companyService.getAllCompany().subscribe({
      next: (v) => this.companyList = v,
      error: (e) => this.loading = "error",
      complete: () => this.loading = this.companyList.length > 0 ? "loaded" : "empity"
    })
  }

  ngOnInit(): void { }

  public selectionHandler(companyItem: Company): void {
    const url = `company/show/${companyItem.id}`
    console.log(url);

    this.router.navigateByUrl(url)
  }


}
