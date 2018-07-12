import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WmsGraphComponent } from './wms-graph.component';

describe('WmsGraphComponent', () => {
  let component: WmsGraphComponent;
  let fixture: ComponentFixture<WmsGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WmsGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WmsGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
