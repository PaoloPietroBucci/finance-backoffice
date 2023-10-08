import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordUploadComponent } from './word-upload.component';

describe('WordUploadComponent', () => {
  let component: WordUploadComponent;
  let fixture: ComponentFixture<WordUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordUploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
