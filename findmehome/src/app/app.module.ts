import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PropertyListComponent } from './properties/properties-list.component';
import { PropertyThumbnailComponent } from './properties/property-thumbnail.component';
import { NavBarComponent } from './nav/nav-bar.component';
import { PropertiesService } from './properties/shared/properties.service';
import { ToastrService } from './common/toastr.service';
import { AppRoutingModule } from './app-routing.module';
import { CreatePropertyComponent } from './properties/new-property.component';
import { NotFoundComponent } from './errors/notfound.component';
import { PropertyDetailsRouteActivatorService } from './properties/property-details-route-activator.service';
import { IsFormTouched } from './properties/canDeactivateCreateProperty.function';

@NgModule({
  declarations: [
    AppComponent,
    PropertyListComponent,
    PropertyThumbnailComponent,
    NavBarComponent,
    CreatePropertyComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    PropertiesService,
    ToastrService,
    PropertyDetailsRouteActivatorService,
    { provide:'canDeactivateCreateProperty', useValue: IsFormTouched }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
