import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import {AmiiboService} from '../services/amiibo.service';
import { AmiiboInterface } from '../interfaces/amiiboInterface';


@Component({
 selector: 'app-amiibos',
 templateUrl: './amiibos.component.html',
 styleUrls: ['./amiibos.component.css']
})

export class AmiibosComponent implements OnInit {
​
 constructor(private amiiboService: AmiiboService) { }
​
 amiibos: AmiiboInterface[];
​
 setAmiibos(): void {
  this.amiibos = this.amiiboService.getAmiibos();
 }
​
 getAmiiboLink(head: string, tail: string): string {
  const id = head + tail;
  return '/amiibo/${id}';
 }
 ngOnInit() {
  this.setAmiibos();
 
 }
​
}

