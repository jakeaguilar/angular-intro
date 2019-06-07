import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AmiiboInterface } from '../interfaces/amiibo-interface';

@Component({
  selector: 'app-individual-amiibo',
  templateUrl: './individual-amiibo.component.html',
  styleUrls: ['./individual-amiibo.component.css']
})
export class IndividualAmiiboComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
  }

}
