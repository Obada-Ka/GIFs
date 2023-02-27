import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GifsFavoriteComponent } from './gifs-favorite.component';

describe('GifsFavoriteComponent', () => {
  let component: GifsFavoriteComponent;
  let fixture: ComponentFixture<GifsFavoriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GifsFavoriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GifsFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
