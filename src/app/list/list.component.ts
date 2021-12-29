import {Component, OnInit} from '@angular/core';
import {HttpService} from "../services/http.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  brews: any

  constructor(private  _http: HttpService) { }

  ngOnInit() {
    this._http.getBeer().subscribe(data => {
      this.brews=data
      console.log(this.brews)
    })
  }








}
