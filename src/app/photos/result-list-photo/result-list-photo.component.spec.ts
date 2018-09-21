import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultListPhotoComponent } from './result-list-photo.component';

describe('ResultListPhotoComponent', () => {
  let component: ResultListPhotoComponent;
  let fixture: ComponentFixture<ResultListPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultListPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultListPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
