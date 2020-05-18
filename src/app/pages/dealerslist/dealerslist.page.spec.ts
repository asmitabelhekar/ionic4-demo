import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DealerslistPage } from './dealerslist.page';

describe('DealerslistPage', () => {
  let component: DealerslistPage;
  let fixture: ComponentFixture<DealerslistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealerslistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DealerslistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
