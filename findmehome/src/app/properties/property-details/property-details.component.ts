import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertiesService } from '../shared/properties.service';

@Component({
	selector:'property-details',
	templateUrl:'./property-details.component.html'
})
export class PropertyDetailsComponent implements OnInit
{
	prop:any;

	constructor(private propertyService:PropertiesService, private route:ActivatedRoute)
	{

	}

	ngOnInit()
	{
		this.prop = this.propertyService.getPropertyById(+this.route.snapshot.params['id']);		
	}
}