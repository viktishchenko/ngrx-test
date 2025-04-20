import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  combineLatest,
  filter,
  map,
  Observable,
  of,
  shareReplay,
  switchMap,
  tap,
} from 'rxjs';
import { Product } from './product';
import { HttpErrorService } from '../utilities/http-error.service';
import { ReviewService } from '../reviews/review.service';
import { Review } from '../reviews/review';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productsUrl = 'api/products';
  private http = inject(HttpClient);
  private errorService = inject(HttpErrorService);
  private reviewsService = inject(ReviewService);

  private selectedProductSubject = new BehaviorSubject<number | undefined>(
    undefined
  );
  readonly selectedProduct$ = this.selectedProductSubject.asObservable();

  readonly products$ = this.http.get<Product[]>(this.productsUrl).pipe(
    tap((x) => console.log(JSON.stringify(x))),
    shareReplay(1),
    catchError((err) => this.handleError(err))
  );

  readonly product$ = combineLatest([
    this.selectedProduct$,
    this.products$,
  ]).pipe(
    map(([selectedProductId, products]) =>
      products.find((product) => product.id === selectedProductId)
    ),
    filter(Boolean),
    switchMap((product) => this.getProductWithReviews(product)),
    catchError((err) => this.handleError(err))
  );

  getProductWithReviews(product: Product): Observable<Product> {
    if (product.hasReviews) {
      return this.http
        .get<Review[]>(this.reviewsService.getReviewUrl(product.id))
        .pipe(map((reviews) => ({ ...product, reviews } as Product)));
    } else {
      return of(product);
    }
  }

  selectedProduct(selectedProductId: number): void {
    this.selectedProductSubject.next(selectedProductId);
  }

  handleError(err: HttpErrorResponse): Observable<never> {
    const formattedMessage = this.errorService.formatError(err);
    // return throwError(() => formattedMessage);
    throw formattedMessage;
  }
}
