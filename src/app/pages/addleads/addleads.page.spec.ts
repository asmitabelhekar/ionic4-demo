import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddleadsPage } from './addleads.page';

describe('AddleadsPage', () => {
  let component: AddleadsPage;
  let fixture: ComponentFixture<AddleadsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddleadsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddleadsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
