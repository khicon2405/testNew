import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'ite-image-view-by-file',
  templateUrl: './image-view-by-file.component.html',
  styles: [`
    .viewer {
      margin: 10px 0 6px;
    }

    img {
      width: 400px;
      /* height: 300px; */
      border: 1px solid #dee2e6;
    }
  `]
})
export class ImageViewByFileComponent implements OnInit {
  public imageUrl: any;
  public imageUrlStatus = true;
  public mainImageUrl: any;
  constructor(public dialogRef: MatDialogRef<ImageViewByFileComponent>) {}

  ngOnInit(): void {
    this.mainImageUrl = this.imageUrl;
    if (!this.imageUrlStatus) {
      let file = new FileReader();
      file.readAsDataURL(this.imageUrl);
      file.onload = () => {
        this.imageUrl = file.result;
      };
    }
  }

  cancel() {
    this.dialogRef.close(false);
  }
}
