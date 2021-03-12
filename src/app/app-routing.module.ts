import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BounceComponent} from './bounce/bounce.component'
import { FlashComponent } from './flash/flash.component';
import { HeadshakeComponent } from './headshake/headshake.component';
import { HeartBeatComponent } from './heart-beat/heart-beat.component';
import { JelloComponent } from './jello/jello.component';
import { PulseComponent } from './pulse/pulse.component';
import { RubberbandComponent } from './rubberband/rubberband.component';
import { ShakeXComponent } from './shake-x/shake-x.component';
import { ShakeYComponent } from './shake-y/shake-y.component';
import { SwingComponent } from './swing/swing.component';
import { TadaComponent } from './tada/tada.component';
import { WobbleComponent } from './wobble/wobble.component';
const routes: Routes = [
{path:'bounce',component:BounceComponent},
{path:'flash',component:FlashComponent},
{path:'rubberband',component:RubberbandComponent},
{path:'pulse',component:PulseComponent},
{path:'shake-x',component:ShakeXComponent},
{path:'shake-y',component:ShakeYComponent},
{path:'headshake',component:HeadshakeComponent},
{path:'swing',component:SwingComponent},
{path:'tada',component:TadaComponent},
{path:'wobble',component:WobbleComponent},
{path:'jello',component:JelloComponent},
{path:'heart-beat',component:HeartBeatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
