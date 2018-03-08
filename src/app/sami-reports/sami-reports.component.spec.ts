import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamiReportsComponent } from './sami-reports.component';

describe('SamiReportsComponent', () => {
  let component: SamiReportsComponent;
  let fixture: ComponentFixture<SamiReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamiReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamiReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
