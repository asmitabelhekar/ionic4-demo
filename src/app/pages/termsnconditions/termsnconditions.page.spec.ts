import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TermsnconditionsPage } from './termsnconditions.page';

describe('TermsnconditionsPage', () => {
  let component: TermsnconditionsPage;
  let fixture: ComponentFixture<TermsnconditionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsnconditionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TermsnconditionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
