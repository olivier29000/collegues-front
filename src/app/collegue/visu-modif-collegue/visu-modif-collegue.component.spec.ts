import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisuModifCollegueComponent } from './visu-modif-collegue.component';

describe('VisuModifCollegueComponent', () => {
  let component: VisuModifCollegueComponent;
  let fixture: ComponentFixture<VisuModifCollegueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisuModifCollegueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisuModifCollegueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
