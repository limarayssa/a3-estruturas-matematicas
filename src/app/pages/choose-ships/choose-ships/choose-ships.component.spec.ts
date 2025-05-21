import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseShipsComponent } from './choose-ships.component';

describe('ChooseShipsComponent', () => {
  let component: ChooseShipsComponent;
  let fixture: ComponentFixture<ChooseShipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseShipsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseShipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
