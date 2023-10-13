import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HellowordComponent } from './helloword/helloword.component';
import { TypedatabindingComponent } from './DataBinding/typedatabinding/typedatabinding.component';
import { FormsModule } from '@angular/forms';
import { ChildcomponetComponent } from './childcomponet/childcomponet.component';
import { AngularDirectiveComponent } from './AngularDirectives/angular-directive/angular-directive.component';
import { NgforstrcturaldirectivesComponent } from './AngularDirectives/structural directives/ngforstrcturaldirectives/ngforstrcturaldirectives.component';
import { NgSwitchcaseComponent } from './AngularDirectives/structural directives/ng-switchcase/ng-switchcase.component';
import { NgifstrutralComponent } from './AngularDirectives/structural directives/ngifstrutral/ngifstrutral.component';
import { NgclassdirectivesComponent } from './AngularDirectives/AttributeDirectives/ngclassdirectives/ngclassdirectives.component';
import { NgstyledirectivesComponent } from './AngularDirectives/AttributeDirectives/ngstyledirectives/ngstyledirectives.component';
import { TrackngforComponent } from './AngularDirectives/Trackby to improve ngFor Performance/trackngfor/trackngfor.component';
import { HostlisterDirective } from './AngularDirectives/custommerdirectives/hostlister.directive';
import { PipeslistComponent } from './Pipes/pipeslist/pipeslist.component';
import { PipeComponent } from './Pipes/pipe/pipe.component';
import { CustomerpipesComponent } from './Pipes/customerpipes/customerpipes.component';
import { CustomerpipesPipe } from './Pipes/customerpipes/customerpipes.pipe';
import { ModelandinterfaceComponent } from './modelandinterface/modelandinterface/modelandinterface.component';
import { LifecyclehooksComponent } from './LIfecyclehook/lifecyclehooks/lifecyclehooks.component';
import { ChildlifecycleComponent } from './LIfecyclehook/childlifecycle/childlifecycle.component';
import { AuthoraddressComponent } from './LIfecyclehook/authoraddress/authoraddress.component';
import { BlodPressureComponent } from './bloodPressure/blod-pressure/blod-pressure.component';
import { NgforifComponent } from './logicalcode/ngforif/ngforif.component';

@NgModule({
  declarations: [
    AppComponent,
    HellowordComponent,
    TypedatabindingComponent,
    ChildcomponetComponent,
    AngularDirectiveComponent,
    NgforstrcturaldirectivesComponent,
    NgSwitchcaseComponent,
    NgifstrutralComponent,
    NgclassdirectivesComponent,
    NgstyledirectivesComponent,
    TrackngforComponent,
    HostlisterDirective,
    PipeslistComponent,
    PipeComponent,
    CustomerpipesComponent,
    CustomerpipesPipe,
    ModelandinterfaceComponent,
    LifecyclehooksComponent,
    ChildlifecycleComponent,
    AuthoraddressComponent,
    BlodPressureComponent,
    NgforifComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
