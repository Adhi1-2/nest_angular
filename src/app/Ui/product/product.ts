import { Component } from '@angular/core';
import { Apiservice } from '../../apiservice';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-product',
  imports: [RouterLink],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
 //cards = Array(6);
 //title = 'One piece ';
 //description = 'King of the Pirates ';
 //cards = [
     //{ name: 'Luffy', Image: 'https://i.pinimg.com/736x/91/b9/bd/91b9bd9a96f302e353e91bc7a28cf061.jpg',description: 'Monkey D Luffy is the main protagonist of One Piece. He is the captain of the Straw Hat Pirates and dreams of becoming the Pirate King by finding the legendary treasure known as One Piece.'},
     //{ name: 'Zoro', Image: 'https://i.pinimg.com/736x/53/f1/11/53f111e24ce06d5675603a651b1fcb4e.jpg',description: 'Roronoa Zoro is a swordsman and one of the main protagonists of One Piece. He is the first member of the Straw Hat Pirates and is known for his incredible swordsmanship skills.'},
     //{ name: 'Nami', Image: 'https://i.pinimg.com/736x/98/96/f7/9896f7bc8b2a75b858f1368765eaccb4.jpg',description: 'Nami is a navigator and one of the main protagonists of One Piece. She is the second member of the Straw Hat Pirates and is known for her ability to predict weather patterns.'},
     //{ name: 'Usopp', Image: 'https://i.pinimg.com/736x/ef/c7/6c/efc76cdae7e81a1232b5b1f839ca0796.jpg',description: 'Usopp is a sniper and one of the main protagonists of One Piece. He is the third member of the Straw Hat Pirates and is known for his incredible accuracy with his slingshot.'},
     //{ name: 'Sanji', Image: 'https://i.pinimg.com/736x/7c/7c/83/7c7c8370c6ef45cd85373d52166f15df.jpg',description: 'Sanji is a cook and one of the main protagonists of One Piece. He is the fourth member of the Straw Hat Pirates and is known for his incredible cooking skills.'},
     //{ name: 'Chopper', Image: 'https://i.pinimg.com/736x/18/2d/3d/182d3d2b5886dbd1d924ac4ae8f390dd.jpg',description: 'Chopper is a doctor and one of the main protagonists of One Piece. He is the fifth member of the Straw Hat Pirates and is known for his ability to transform into different forms.'},
 //];
products:any[]=[];
constructor(private api:Apiservice){}
ngOnInit(){
  this.api.getproducts().subscribe((data:any)=>{
    this.products=data;
  
  })}

}