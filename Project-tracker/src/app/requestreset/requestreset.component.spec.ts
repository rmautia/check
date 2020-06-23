import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestresetComponent } from './requestreset.component';

describe('RequestresetComponent', () => {
  let component: RequestresetComponent;
  let fixture: ComponentFixture<RequestresetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestresetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestresetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
