import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadshakeComponent } from './headshake.component';

describe('HeadshakeComponent', () => {
  let component: HeadshakeComponent;
  let fixture: ComponentFixture<HeadshakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadshakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadshakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
