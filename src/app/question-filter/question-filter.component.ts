import { CategoryService } from './../Services/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'question-filter',
  templateUrl: './question-filter.component.html',
  styleUrls: ['./question-filter.component.css']
})
export class QuestionFilterComponent implements OnInit {
  categories;
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
      this.categoryService.getCategories().subscribe(categories => {
         this.categories = categories.json();
      });
  }

}
