import { Component } from '@angular/core';


 
class Movie {
  title!: string;
  director!: string;
}
@Component({
  selector: 'app-trackngfor',
  templateUrl: './trackngfor.component.html',
  styleUrls: ['./trackngfor.component.css']
})
export class TrackngforComponent {
  title: string = "Top 5 Movies";
  
  movies=[];
 


  mTitle:string="";
  mDirector:string="";
 
  ngOnInit() {
    this.Refresh();
  }
 
  remove(i:any) {
    this.movies.splice(i,1);
  }
 
  addMovie() {
    // this.movies.push({ title: this.mTitle, director: this.mDirector})
    // this.mTitle=""
    this.mDirector=""
  }
 
  Refresh() {
    console.log("refresh")
    // this.movies = [
    //   { title: 'Zootopia', director: 'Byron Howard, Rich Moore'},
    //   { title: 'Batman v Superman: Dawn of Justice', director: 'Zack Snyder'},
    //   { title: 'Captain American: Civil War', director: 'Anthony Russo, Joe Russo'},
    //   { title: 'X-Men: Apocalypse', director: 'Bryan Singer'},
    //   { title: 'Warcraft', director: 'Duncan Jones'},
    // ]
  }
}
