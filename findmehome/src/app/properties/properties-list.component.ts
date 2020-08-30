import { Component, OnInit } from '@angular/core';
import { PropertiesService } from './shared/properties.service';
import { ToastrService } from '../common/toastr.service';

@Component({
    selector:'properties-list',
    templateUrl:'./properties-list.component.html'    
})
export class PropertyListComponent implements OnInit
{
    props:any[];

    constructor(private propertiesService:PropertiesService, private toastrService:ToastrService)
	  {
	  }

    ngOnInit()
    {
      this.props = this.propertiesService.getProperties();
    }
	
    handleThumbnailClick(propertyName)
    {
      this.toastrService.success('Clicked ' + propertyName, 'Attention!!');
    }
}