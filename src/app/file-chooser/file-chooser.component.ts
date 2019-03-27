import { Component, OnInit } from '@angular/core';
declare var Papa: any;

@Component({
  selector: 'app-file-chooser',
  templateUrl: './file-chooser.component.html',
  styleUrls: ['./file-chooser.component.sass']
})
export class FileChooserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  fileLoad(event: Event) {
    // @ts-ignore
    Papa.parse((<HTMLInputElement>event.srcElement).files[0], {
      header: true,
      dynamicTyping: true,
      comments: "#",
      complete: result => console.log(result),
      transformHeader: input => input.toString().trim(),
      transform: input => input.toString().trim()
    });
  }
}
