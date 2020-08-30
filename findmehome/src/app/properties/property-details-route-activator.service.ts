import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { PropertiesService } from './shared/properties.service';

@Injectable()
export class PropertyDetailsRouteActivatorService implements CanActivate
{
    constructor(private propertiesService:PropertiesService, private router:Router)
    {

    }

    canActivate(activatedRoute:ActivatedRouteSnapshot)
    {
        const validPropertyId = !!this.propertiesService.getPropertyById(+activatedRoute.params['id']);
        
        if(!validPropertyId)
            this.router.navigate(['/notfound']);

        return validPropertyId;    
    }
}