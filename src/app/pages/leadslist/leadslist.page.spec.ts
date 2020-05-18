import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LeadslistPage } from './leadslist.page';

describe('LeadslistPage', () => {
  let component: LeadslistPage;
  let fixture: ComponentFixture<LeadslistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadslistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LeadslistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
