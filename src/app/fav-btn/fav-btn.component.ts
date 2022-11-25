import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-fav-btn',
  templateUrl: './fav-btn.component.html',
  styleUrls: ['./fav-btn.component.css']
})
export class FavBtnComponent implements OnInit {

  @Input() selected: boolean =false;
  @Output() selectedChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  public toggleSelected(event:any) {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
  }

}
