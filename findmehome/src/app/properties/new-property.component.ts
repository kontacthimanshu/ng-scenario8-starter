import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  template:`
  <h1>New Property</h1>
  <hr>
  <div class="col-md-6">
    <h3>[Create Property Form | Dummy ]</h3>
    <br/>
    <br/>
    <button type="submit" class="btn btn-primary">Save</button>
    <button type="button" class="btn btn-primary" (click)="cancel()">Cancel</button>
  </div>
  `
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