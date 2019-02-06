import { Component, OnInit } from '@angular/core';

import { Model } from '../model';

@Component({
  selector: 'app-junior-artist-bill',
  templateUrl: './junior-artist-bill.component.html',
  styleUrls: ['./junior-artist-bill.component.css']
})
export class JuniorArtistBillComponent implements OnInit {

  public entry: Array<Model> = [];
  private newAttribute: any = {};

  addFieldValue() {
      // this.newAttribute.Total = parseInt(this.newAttribute.Qty, 10) * parseInt(this.newAttribute.Rate, 10 * parseInt(this.newAttribute.CallSheet, 10);
      this.entry.push(this.newAttribute);
      this.newAttribute = {};
  }
  saveAndPrint() {
    const reqObj = {    // this will be sent as a req
      companyName: '',
      agentName: '',
      date: '',
      amount: 0,
      billEntries : this.entry,
    };
    this.entry.forEach((eachEntry) => {
      reqObj.amount += eachEntry.Total;
    });
  }
  deleteFieldValue(index) {
    this.entry.splice(index, 1);
  }
  constructor() { }

  ngOnInit() {
  }

}
