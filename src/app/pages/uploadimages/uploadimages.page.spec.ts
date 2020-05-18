import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UploadimagesPage } from './uploadimages.page';

describe('UploadimagesPage', () => {
  let component: UploadimagesPage;
  let fixture: ComponentFixture<UploadimagesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadimagesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UploadimagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
