import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Company } from 'src/app/shared/model/company-model.model';

@Component({
  selector: 'spring-company-list-item',
  templateUrl: './company-list-item.component.html',
  styleUrls: ['./company-list-item.component.css']
})
export class CompanyListItemComponent implements OnInit {

  @Input() companyItem: Company

  constructor() { }

  @Output() selectionCompany: EventEmitter<Company> = new EventEmitter<Company>();

  ngOnInit(): void {
  }

  public selectionHandler(): void {
    this.selectionCompany.emit(this.companyItem)
  }

}
