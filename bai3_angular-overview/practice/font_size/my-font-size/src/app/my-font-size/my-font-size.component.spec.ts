import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFontSizeComponent } from './my-font-size.component';

describe('MyFontSizeComponent', () => {
  let component: MyFontSizeComponent;
  let fixture: ComponentFixture<MyFontSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFontSizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFontSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
