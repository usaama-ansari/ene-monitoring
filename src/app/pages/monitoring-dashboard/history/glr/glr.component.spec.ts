import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlrComponent } from './glr.component';

describe('GlrComponent', () => {
  let component: GlrComponent;
  let fixture: ComponentFixture<GlrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
