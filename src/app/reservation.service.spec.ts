import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ReservationService, Reservation } from './reservation.service';

describe('ReservationService', () => {
  let service: ReservationService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ReservationService]
    });

    service = TestBed.inject(ReservationService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make a reservation (POST)', () => {
    const dummyReservation: Reservation = {
      name: 'Prajkta',
      email: 'test@example.com',
      phone: '9876543210',
      date: '2025-08-20',
      time: '19:00',
      guests: 2
    };

    service.makeReservation(dummyReservation).subscribe((res) => {
      expect(res.name).toBe('Prajkta');
      expect(res.email).toBe('test@example.com');
    });

    const req = httpMock.expectOne('http://localhost:8080/api/reservations');
    expect(req.request.method).toBe('POST');
    req.flush(dummyReservation);
  });

  it('should fetch all reservations (GET)', () => {
    const dummyReservations: Reservation[] = [
      { id: 1, name: 'Prajkta', email: 'p@test.com', phone: '1234567890', date: '2025-08-20', time: '18:00', guests: 4 },
      { id: 2, name: 'Ravi', email: 'r@test.com', phone: '9876543210', date: '2025-08-21', time: '20:00', guests: 2 }
    ];

    service.getAllReservations().subscribe((res) => {
      expect(res.length).toBe(2);
      expect(res[0].name).toBe('Prajkta');
    });

    const req = httpMock.expectOne('http://localhost:8080/api/reservations');
    expect(req.request.method).toBe('GET');
    req.flush(dummyReservations);
  });
});
