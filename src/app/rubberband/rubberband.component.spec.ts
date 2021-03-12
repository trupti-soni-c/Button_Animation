import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RubberbandComponent } from './rubberband.component';

describe('RubberbandComponent', () => {
  let component: RubberbandComponent;
  let fixture: ComponentFixture<RubberbandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RubberbandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RubberbandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
