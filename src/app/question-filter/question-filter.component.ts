import { CategoryService } from './../Services/category.service';
import { Component, OnInit, Input } from '@angular/core';
import { DfficultyLevelService } from 'app/Services/difficulty-level.service';

@Component({
  selector: 'question-filter',
  templateUrl: './question-filter.component.html',
  styleUrls: ['./question-filter.component.css']
})
export class QuestionFilterComponent implements OnInit {
  categories : any;
  dificulties : any;
  @Input('category') category;
  @Input('difficulty') difficulty;
  constructor(private categoryService: CategoryService, private difficultyLevel: DfficultyLevelService) { }

  ngOnInit() {
      this.categoryService.getCategories().take(1).subscribe(data => {
         this.categories = data.json();
      });

      // this.difficultyLevel.getDifficultyLevel().take(1).subscribe(data => {
      //   this.difficulty = data.json();
      // })
  }

}
