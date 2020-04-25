import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'image classifier';
  promptEvent;
  update: boolean = false;

  constructor(updates: SwUpdate,) {

    updates.available.subscribe(event => {

      updates.activateUpdate().then(() => document.location.reload());
    });
  }
}
