import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorie',
  templateUrl: './favorie.component.html',
  styleUrls: ['./favorie.component.css']
})
export class FavorieComponent implements OnInit {


   favMovs: any = [];
  constructor() { }

  ngOnInit(): void {
  }

  getFavMovs(){
    return this.favMovs;
  }
  pushToFavMovs(val : any ){
    this.favMovs.push(val);
  }

}
