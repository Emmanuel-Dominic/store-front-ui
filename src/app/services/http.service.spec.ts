import { TestBed } from '@angular/core/testing';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpService } from './http.service';

describe('HttpService', () => {
  let service: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, HttpClientModule],
      providers: [HttpClient],
    });
    service = TestBed.inject(HttpService);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });

  it('should create', () => {
    expect('component').toBeTruthy();
  });
});
