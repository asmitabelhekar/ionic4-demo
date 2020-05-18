import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NodatafoundPage } from './nodatafound.page';

describe('NodatafoundPage', () => {
  let component: NodatafoundPage;
  let fixture: ComponentFixture<NodatafoundPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodatafoundPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NodatafoundPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
