import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShakeXComponent } from './shake-x.component';

describe('ShakeXComponent', () => {
  let component: ShakeXComponent;
  let fixture: ComponentFixture<ShakeXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShakeXComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShakeXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
