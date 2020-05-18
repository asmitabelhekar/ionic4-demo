import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CheckinternetconnectionPage } from './checkinternetconnection.page';

describe('CheckinternetconnectionPage', () => {
  let component: CheckinternetconnectionPage;
  let fixture: ComponentFixture<CheckinternetconnectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckinternetconnectionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CheckinternetconnectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
