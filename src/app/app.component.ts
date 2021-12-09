import { Component, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation:ViewEncapsulation.None
})




export class AppComponent {
  title = 'demo';
  hai='';
  posts:any={};


  constructor( private httpclient: HttpClient){

  }
  onSubmit(data: any){
   this. httpclient.get('https://jsonplaceholder.typicode.com/posts').subscribe((data)=>{
      this.posts=data
      // console.warn("result",result);
    })

  }

  createpost(input: HTMLInputElement){
    let post:any ={title :input.value}
    input.value='';

    this.httpclient.post('https://jsonplaceholder.typicode.com/posts',JSON.stringify(post))
    .subscribe(result =>{
      post.id = result;
      this.posts.splice(0,0,post);
      console.log(result);

    })

  }

  updatepost(post :any){
    this.httpclient.patch('https://jsonplaceholder.typicode.com/posts'+ '/' +post.id,JSON.stringify({isRead:true}))
    // this.httpclient.put('https://jsonplaceholder.typicode.com/posts',JSON.stringify(post));
    .subscribe(result=>{
      console.log(result);
    })

  }

items=[
  {
    id:'1',
    name:'item1',
    icon:'bi-pencil-square',
    delete:'bi-trash-fill',
  },{
    id:'2',
    name:'item2',
    icon:'bi-pencil-square',
    delete:'bi-trash-fill',

  },{
    id:'3',
    name:'item3',
    icon:'bi-pencil-square',
    delete:'bi-trash-fill',

  },{
    id:'4',
    name:'item4',
    icon:'bi-pencil-square',
    delete:'bi-trash-fill',

  },{
    id:'5',
    name:'item5',
    icon:'bi-pencil-square',
    delete:'bi-trash-fill',

  },{
    id:'6',
    name:'item6',
    icon:'bi-pencil-square',
    delete:'bi-trash-fill',

  },

];

val:any=200;

bar:any=500;
bal:any=700;
hav:any=800;
lal:any=900;
nav:any=1500;
a:any=10;
b:any=20;
c:any=30;
d:any=40;
e:any=50;
f:any=60;
g:any=70;
h:any=80;
i:any=90;
j:any=120;
k:any=150;
l:any=110;

save(root:any): void{
  console.log(root);
}



show = false;

  close() {
    this.show = false;
    setTimeout(() => this.show );
  }

  onAdd(){

  }
  onRemove(){}







}

function result(arg0: string, result: any) {
  throw new Error('Function not implemented.');
}

