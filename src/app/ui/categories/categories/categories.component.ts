import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriesDto } from 'src/app/domain/models/categories/categories';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  public categories: CategoriesDto[] = [{
    id:"1",
    code:"1001",
    title:"Category One",
    description:"First Category"
  },{
    id:"2",
    code:"1002",
    title:"Category Two",
    description:"Second Category"
  },{
    id:"3",
    code:"1003",
    title:"Category Three",
    description:"Third Category"
  },{
    id:"4",
    code:"1004",
    title:"Category Four",
    description:"Fourth Category"
  },{
    id:"5",
    code:"1005",
    title:"Category Five",
    description:"Fifth  Category"
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
