import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplanintViewComponent } from './complanint-view.component';

describe('ComplanintViewComponent', () => {
  let component: ComplanintViewComponent;
  let fixture: ComponentFixture<ComplanintViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplanintViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplanintViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
