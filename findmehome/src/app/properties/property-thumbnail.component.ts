import { Component, Input } from '@angular/core';

@Component({
    selector:'property-thumbnail',
    templateUrl:'./property-thumbnail.component.html',
    styles: [`
    .pad-left { margin-left: 10px; }
    .bold { font-weight: bold; }
    .thumbnail { min-height: 325px; padding: 20px 25px; background-color: #fff; margin-bottom:10px; color: #000; border: 1px solid #ccc;
        border-radius: 10px;
        -moz-box-shadow: 3px 3px 5px 3px #ccc;
        -webkit-box-shadow: 3px 3px 5px 3px #ccc;
        box-shadow: 3px 3px 5px 3px #ccc;}
    .prop-details div { color: #000; font-weight:700;  }
    .green {color:#1aac2d !important}
    `]    
})
export class PropertyThumbnailComponent
{
    @Input() inpProp;
}