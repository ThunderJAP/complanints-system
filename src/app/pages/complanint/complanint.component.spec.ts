import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplanintComponent } from './complanint.component';

describe('ComplanintComponent', () => {
  let component: ComplanintComponent;
  let fixture: ComponentFixture<ComplanintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplanintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplanintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
