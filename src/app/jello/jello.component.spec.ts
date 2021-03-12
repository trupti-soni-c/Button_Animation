import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JelloComponent } from './jello.component';

describe('JelloComponent', () => {
  let component: JelloComponent;
  let fixture: ComponentFixture<JelloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JelloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
