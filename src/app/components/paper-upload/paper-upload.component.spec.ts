import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperUploadComponent } from './paper-upload.component';

describe('PaperUploadComponent', () => {
  let component: PaperUploadComponent;
  let fixture: ComponentFixture<PaperUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaperUploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaperUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
