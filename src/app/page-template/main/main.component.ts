import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public page: number;
  constructor() { 
    this.page = 1;
  }

  ngOnInit(): void {
  }

  public onPageChange(page: number): void{
    console.log(page);
  }

}
