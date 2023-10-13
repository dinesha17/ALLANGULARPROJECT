import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HellowordComponent } from './helloword/helloword.component';
import { TypedatabindingComponent } from './DataBinding/typedatabinding/typedatabinding.component';
import { ChildcomponetComponent } from './childcomponet/childcomponet.component';
import { AngularDirectiveComponent } from './AngularDirectives/angular-directive/angular-directive.component';
import { NgforstrcturaldirectivesComponent } from './AngularDirectives/structural directives/ngforstrcturaldirectives/ngforstrcturaldirectives.component';
import { NgSwitchcaseComponent } from './AngularDirectives/structural directives/ng-switchcase/ng-switchcase.component';
import { NgifstrutralComponent } from './AngularDirectives/structural directives/ngifstrutral/ngifstrutral.component';
import { NgclassdirectivesComponent } from './AngularDirectives/AttributeDirectives/ngclassdirectives/ngclassdirectives.component';
import { NgstyledirectivesComponent } from './AngularDirectives/AttributeDirectives/ngstyledirectives/ngstyledirectives.component';
import { TrackngforComponent } from './AngularDirectives/Trackby to improve ngFor Performance/trackngfor/trackngfor.component';
import { PipeComponent } from './Pipes/pipe/pipe.component';
import { PipeslistComponent } from './Pipes/pipeslist/pipeslist.component';
import { CustomerpipesComponent } from './Pipes/customerpipes/customerpipes.component';
import { ModelandinterfaceComponent } from './modelandinterface/modelandinterface/modelandinterface.component';
import { LifecyclehooksComponent } from './LIfecyclehook/lifecyclehooks/lifecyclehooks.component';
import { BlodPressureComponent } from './bloodPressure/blod-pressure/blod-pressure.component';
import { NgforifComponent } from './logicalcode/ngforif/ngforif.component';
import { ChartlistComponent } from 'src/chart/chartlist/chartlist.component';

const routes: Routes = [
  {
    path:'',
    component:HellowordComponent,
    children:[
      
    ]
    
    
  },
  {
    path:'typedatabinding',
    component:TypedatabindingComponent
  },
  {
    path:'childcomponet',
    component:ChildcomponetComponent
  },
  {
    path:'angular-directive',
    component:AngularDirectiveComponent,
    children:[
      {
        path:'ngforstrcturaldirectives',
        component:NgforstrcturaldirectivesComponent
      },
      {
        path:'ng-switchcase',
  component:NgSwitchcaseComponent
      },
      {
        path:'ngifstrutral',
        component:NgifstrutralComponent
      },
      {
        path:'ngclassdirectives',
        component:NgclassdirectivesComponent
      },
      {
        path:'ngstyledirectives',
        component:NgstyledirectivesComponent
      },
      {
        path:'',
        component:TrackngforComponent
      }
    
    ]
  },

  {
    path:'pipeslist',
    component:PipeslistComponent,
    children:[
      {
        path:'pipe',
        component:PipeComponent
      },
      {
        path:'customerpipes',
        component:CustomerpipesComponent
      }
    ]
  },
  {
    path:'modelandinterface',
    component:ModelandinterfaceComponent
  },
  {
    path:'lifecyclehooks',
    component:LifecyclehooksComponent
  },
  {
    path:'blod-pressure',
    component:BlodPressureComponent
  },
  {
    path:'ngforif/:id/:name',
    component:NgforifComponent
  },
  {
    path:'chartlist',
    component:ChartlistComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
