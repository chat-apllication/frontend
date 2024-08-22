import { Component } from '@angular/core';
import { CommonService } from './shared/services/common/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // totalArray :any = []
  // enterNumber! :any
  // showtext: boolean = false;
  // middleNumber: any;
  constructor(private commonService: CommonService) {
  }
  // submit(){
  //   this.totalArray = Array(this.enterNumber).fill(0);
  //   this.middleNumber = Math.ceil(this.enterNumber/2)
  // }
}
