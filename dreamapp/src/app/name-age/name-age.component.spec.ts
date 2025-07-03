import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameAgeComponent } from './name-age.component';

describe('NameAgeComponent', () => {
  let component: NameAgeComponent;
  let fixture: ComponentFixture<NameAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NameAgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NameAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
