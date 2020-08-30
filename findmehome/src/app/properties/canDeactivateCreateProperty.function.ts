import { CreatePropertyComponent } from './new-property.component';

export function IsFormTouched(component:CreatePropertyComponent)
{
    if(component.isTouched)
        return window.confirm("You have not saved the property. Are you sure you want to exit?");
    return true;    
}