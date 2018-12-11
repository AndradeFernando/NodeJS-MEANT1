import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {

  /*posts = [
    {   'title': 'first post' , 'content' : 'this is the first post of the day'},
    {   'title': 'second post' , 'content' : 'this is the second post of the day'},
    {   'title': 'third post' , 'content' : 'this is the third post of the day'},
    {   'title': 'fourth post' , 'content' : 'this is the fourth post of the day'},
  ]
*/
@Input()
posts = [];
}
