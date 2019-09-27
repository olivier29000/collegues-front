import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCollegueComponentComponent } from './single-collegue-component.component';

describe('SingleCollegueComponentComponent', () => {
  let component: SingleCollegueComponentComponent;
  let fixture: ComponentFixture<SingleCollegueComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCollegueComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCollegueComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
