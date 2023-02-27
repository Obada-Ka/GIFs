import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-gifs-favorite',
  templateUrl: './gifs-favorite.component.html',
  styleUrls: ['./gifs-favorite.component.scss']
})
export class GifsFavoriteComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<GifsFavoriteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }

}
