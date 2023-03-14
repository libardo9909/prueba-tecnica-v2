import { Injectable } from '@angular/core';
import { CategoriesGateway } from 'src/app/domain/models/categories/gateway/categories.gateway';
import { HttpClient } from '@angular/common/http';
import { BaseResponse } from 'src/app/domain/models/base/base';
import {
  CategoriesDto,
  CategoriesRequest,
} from 'src/app/domain/models/categories/categories';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CategoriesApiService extends CategoriesGateway {
  private _url = 'EnvironmentUrl';
  constructor(private http: HttpClient) {
    super();
  }

  getCategories(): Observable<BaseResponse<CategoriesDto[]>> {
    return this.http.get<BaseResponse<CategoriesDto[]>>(
      this._url + '/Categories'
    );
  }

  createCategories(body: CategoriesRequest): Observable<BaseResponse<String>> {
    return this.http.post<BaseResponse<String>>(
      this._url + '/createCategories',
      body
    );
  }

  updateCategories(body: CategoriesRequest): Observable<BaseResponse<String>> {
    return this.http.put<BaseResponse<String>>(
      this._url + '/updateCategories',
      body
    );
  }

  deleteCategories(id: String): Observable<BaseResponse<String>> {
    return this.http.delete<BaseResponse<String>>(
      this._url + 'deleteCategories/' + id
    );
  }
}
