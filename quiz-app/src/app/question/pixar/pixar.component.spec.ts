import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PixarComponent } from './pixar.component';

describe('PixarComponent', () => {
  let component: PixarComponent;
  let fixture: ComponentFixture<PixarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PixarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PixarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
