import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerifyComponent } from './terify.component';

describe('TerifyComponent', () => {
  let component: TerifyComponent;
  let fixture: ComponentFixture<TerifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerifyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
