import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/core/services/company.service';
import { Company } from 'src/app/shared/model/company-model.model';

@Component({
  selector: 'spring-company-container',
  templateUrl: './company-container.component.html',
  styleUrls: ['./company-container.component.css']
})
export class CompanyContainerComponent implements OnInit {

  companyList: Company[] = [];

  constructor(private router: Router, private companyService: CompanyService) {
    this.companyService.getAllCompany().subscribe(
      r => {
        this.companyList = r;
        console.log(this.companyList)
      }, e => {
        console.log(e);
      }
    )


  }

  ngOnInit(): void {
  }


}
