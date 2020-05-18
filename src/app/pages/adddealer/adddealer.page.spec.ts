import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdddealerPage } from './adddealer.page';

describe('AdddealerPage', () => {
  let component: AdddealerPage;
  let fixture: ComponentFixture<AdddealerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddealerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdddealerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
