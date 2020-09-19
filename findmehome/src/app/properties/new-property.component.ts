import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl:'./new-property.component.html'
})
export class CreatePropertyComponent
{
    isTouched:boolean = true;
    constructor(private router:Router)
    {

    }

    cancel()
    {
        this.router.navigate(['/properties']);
    }
}