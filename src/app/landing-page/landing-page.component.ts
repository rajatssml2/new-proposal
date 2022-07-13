import { Component, OnInit } from '@angular/core';
declare var require: any;

// const logo1 = require('../../assets/images').default as string;


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  imageSrc = 'assets/images/logo.png'
  // l1 = logo1;
  // img1= require("../../assets/images/logo.PNG");
  // img2= require("../../assets/images/Banner3.jpg");
  // img3= require("../../assets/images/Banner4.jpg");
  imageObject = [
    {
      image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg',
      thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg',
      title: 'Hummingbirds are amazing creatures'
  }, {
      image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/9.jpg',
      thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/9.jpg'
  }, {
      image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/4.jpg',
      thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/4.jpg',
      title: 'Example with title.'
  }
//     {
//     image: this.img1,
//     thumbImage: this.img1,
//     // title: 'Hummingbirds are amazing creatures'
// }, 
// {
//     image: this.img2,
//     thumbImage: this.img2
// }, {
//     image: this.img3,
//     thumbImage: this.img3,
//     title: 'Example with title.'
// }
];

  constructor() { }

  ngOnInit(): void {
    console.log("====",this.imageSrc)
  }

}
