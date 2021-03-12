import { Component,ViewContainerRef,ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'modersite';

  constructor(private viewcontainer:ViewContainerRef,private cfr:ComponentFactoryResolver)
  {

  }
  async loadbounce()
  {
    console.log('Bounce Component');
    this.viewcontainer.clear();
    const{BounceComponent}=await import('./bounce/bounce.component');
    this.viewcontainer.createComponent(this.cfr.resolveComponentFactory(BounceComponent));
  }
}
