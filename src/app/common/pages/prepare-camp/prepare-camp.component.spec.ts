import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepareCampComponent } from './prepare-camp.component';

describe('PrepareCampComponent', () => {
  let component: PrepareCampComponent;
  let fixture: ComponentFixture<PrepareCampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrepareCampComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrepareCampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
