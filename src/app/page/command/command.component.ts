import { Component, OnInit} from '@angular/core';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.css']
})


export class CommandComponent implements OnInit {

	data : any = {
	  "abonnement_plans":
	  [
	    {
	      durée_mois: 3,
	      price_usd_per_gb: 3
	    },
	    {
	      durée_mois: 6,
	      price_usd_per_gb: 2.5
	    },
	    {
	      durée_mois: 12,
	      price_usd_per_gb: 2
	    }
	  ]
	}


	// constructor(private http: HttpClient) { }
	ngOnInit() {
           
  }

valider() {
	console.log('valider ', this.data)
}

}
