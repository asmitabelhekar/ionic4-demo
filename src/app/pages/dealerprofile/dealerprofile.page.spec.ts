import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DealerprofilePage } from './dealerprofile.page';

describe('DealerprofilePage', () => {
  let component: DealerprofilePage;
  let fixture: ComponentFixture<DealerprofilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealerprofilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DealerprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
