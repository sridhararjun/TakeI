import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuniorArtistBillComponent } from './junior-artist-bill.component';

describe('JuniorArtistBillComponent', () => {
  let component: JuniorArtistBillComponent;
  let fixture: ComponentFixture<JuniorArtistBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuniorArtistBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuniorArtistBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
