import { Component, OnInit } from '@angular/core';
import { catService } from './services/test.service';
import { NgbdModalComponent } from './popup-details/popup-details.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'apiCallsTest';
  posts: any;
  breeds: any;
  constructor(private service: catService) { }

  ngOnInit() {
    this.service.getRandomCats().subscribe(response => {
      this.posts = response;
    })

    this.service.getAllBreeds().subscribe(response => {
      const breedsArray = Object.values(response);
      this.breeds = breedsArray;
    })
  }
}
