import { Component } from '@angular/core';

@Component({
    selector:'nav-bar',
    templateUrl:'./nav-bar.component.html',
    styles:[`
    .navbar {background-color: #005ca8; box-shadow: 0 3px 8px 0 rgba(0,106,194,.2);}
    .nav-link {color: #fff} .nav-link:hover,.nav-link:active {color: rgb(240, 148, 10)}
    `]
})
export class NavBarComponent
{

}