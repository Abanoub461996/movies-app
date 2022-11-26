import { Router } from '@angular/router';
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input() movie:any;
  @Output() sendMovie = new EventEmitter<object>()
  constructor(private router:Router) {}
  ngOnInit(): void {   
    this.movie = {...this.movie,selected:false} 
  }
  addToFav(selsectedMovie:object):void{
    console.log(selsectedMovie);
  }
  sendToParent(){ // not used just to try sending data to the parent
    this.sendMovie.emit(this.movie)  
  }
  handleCardClick(){
    this.router.navigate([`movie/${this.movie.title}/${this.movie.id}`])
  }


}
