import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShakeYComponent } from './shake-y.component';

describe('ShakeYComponent', () => {
  let component: ShakeYComponent;
  let fixture: ComponentFixture<ShakeYComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShakeYComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShakeYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
