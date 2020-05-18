import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nodatafound',
  templateUrl: './nodatafound.page.html',
  styleUrls: ['./nodatafound.page.scss'],
})
export class NodatafoundPage implements OnInit {

  title : any;
  constructor(public activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.title = this.activatedRoute.snapshot.params['title'];
  }

  goBackword(){
    window.history.back();
  }
}
