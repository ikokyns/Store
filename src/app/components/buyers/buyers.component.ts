import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buyers-component',
  templateUrl: './buyers.component.html'
})
export class BuyersComponent {

	private buyers: any = [];

	constructor() {
		this.buyers = [
  		{
  			id: 1,
  			firstName: 'John',
  			lastName: 'Doe',
  			email: 'jonhdoe@gmail.com'
  		},
  		{
  			id: 2,
  			firstName: 'Daniel',
  			lastName: 'Doe',
  			email: 'danieldoe@gmail.com'
  		},
  		{
  			id: 3,
  			firstName: 'Martin',
  			lastName: 'Doe',
  			email: 'martindoe@gmail.com'
  		}
  	]
   }

   addBuyer(id, firstName, lastName, email){
  	return this.buyers.push();
   }

   remove(buyer){
	const index = this.buyers.indexOf(buyer);
    this.buyers.splice(index, 1);
   }

}
