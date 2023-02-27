import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { CartComponent } from './cart.component';
import { CartService } from 'src/app/services/cart.service';
import { RouterTestingModule } from "@angular/router/testing";
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from 'src/app/layout/header/header.component';
import { ConfirmationComponent } from 'src/app/components/confirmation/confirmation.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, HttpClientModule, FormsModule, RouterModule.forRoot([])],
      providers: [CartService, HttpClient],
      declarations: [
        CartComponent,
        ConfirmationComponent,
        HeaderComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
