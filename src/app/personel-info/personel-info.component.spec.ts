import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonelInfoComponent } from './personel-info.component';

describe('PersonelInfoComponent', () => {
  let component: PersonelInfoComponent;
  let fixture: ComponentFixture<PersonelInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonelInfoComponent]
    });
    fixture = TestBed.createComponent(PersonelInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
