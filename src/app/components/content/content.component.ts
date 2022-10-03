import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/components/services/shared.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(public shared: SharedService) { }

  ngOnInit(): void {
  }

}
