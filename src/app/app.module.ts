import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BounceComponent } from './bounce/bounce.component';
import { FlashComponent } from './flash/flash.component';
import { RubberbandComponent } from './rubberband/rubberband.component';
import { PulseComponent } from './pulse/pulse.component';
import { ShakeXComponent } from './shake-x/shake-x.component';
import { ShakeYComponent } from './shake-y/shake-y.component';
import { HeadshakeComponent } from './headshake/headshake.component';
import { SwingComponent } from './swing/swing.component';
import { TadaComponent } from './tada/tada.component';
import { WobbleComponent } from './wobble/wobble.component';
import { JelloComponent } from './jello/jello.component';
import { HeartBeatComponent } from './heart-beat/heart-beat.component';

@NgModule({
  declarations: [
    AppComponent,
    BounceComponent,
    FlashComponent,
    RubberbandComponent,
    PulseComponent,
    ShakeXComponent,
    ShakeYComponent,
    HeadshakeComponent,
    SwingComponent,
    TadaComponent,
    WobbleComponent,
    JelloComponent,
    HeartBeatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
