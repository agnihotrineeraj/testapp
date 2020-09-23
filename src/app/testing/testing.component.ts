import { Component, OnInit } from '@angular/core';
import{Router} from  '@angular/router';


@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  adddata()
  {
    this.route.navigateByUrl('add');
    

  }
}
