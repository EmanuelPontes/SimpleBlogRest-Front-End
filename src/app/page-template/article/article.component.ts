import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor() { }

  @Input() imgSrc: string;
  @Input() title: string;
  @Input() text: string;
  ngOnInit(): void {
  }

}
