import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gif-card',
  templateUrl: './gif-card.component.html',
  styleUrls: ['./gif-card.component.scss']
})
export class GifCardComponent implements OnInit {
  @Input() gif: any;
  isLoading = true;
  isExpaned = false;
  constructor() { }

  ngOnInit(): void {
  }

  handleLoading(): void {
    this.isLoading = false;
  }

}
