import { Component, OnInit } from '@angular/core';
import { MiscService } from '../services/misc.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  public numArray: number[] = [2, 4, 6, 8, 10];
  constructor(
    private miscService: MiscService
  ) { }

  ngOnInit() {
    this.miscService.foo(this.numArray).subscribe();
  }

}
