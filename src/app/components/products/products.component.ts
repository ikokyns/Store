import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent {
	
	private products: any = [];

	constructor() {
			this.products = [
	  		{
	  			id: 1,
	  			name: 'milk',
	  			lagerAvailable: '20'
	  		},
	  		{
	  			id: 2,
	  			name: 'honey',
	  			lagerAvailable: '10'
	  		},
	  		{
	  			id: 3,
	  			name: 'flour',
	  			lagerAvailable: '20'
	  		}
	  	]
	   }

}
