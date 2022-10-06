import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GiaoDich} from '../model/giao-dich';
import {environment} from '../../environments/environment';
import {KhachHang} from '../model/khach-hang';

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class GiaoDichService {

  constructor(private http: HttpClient) { }

  getAll(dienTichSearch: string, tenKHSearch: string): Observable<GiaoDich[]> {
    return this.http.get<GiaoDich[]>(API_URL + '/giaoDich?dienTich_like=' + dienTichSearch + '&khachHang.tenKH_like=' + tenKHSearch);
  }

  // getAllCustomer(nameSearch: string): Observable<Customer[]> {
  //   return this.http.get<Customer[]>(API_URL + '/customerRest/list?name=' + nameSearch);
  // }

  getAllKhahHang(): Observable<KhachHang[]> {
    return this.http.get<KhachHang[]>(API_URL + '/khachHang');
  }

  saveGiaoDich(giaoDich): Observable<GiaoDich> {
    return this.http.post<GiaoDich>(API_URL + '/giaoDich', giaoDich);
  }

  findById(id: number): Observable<GiaoDich> {
    return this.http.get<GiaoDich>(`${API_URL}/giaoDich/${id}`);
  }

  updateGiaoDich(id: number, giaoDich: GiaoDich): Observable<GiaoDich> {
    return this.http.put<GiaoDich>(`${API_URL}/giaoDich/${id}`, giaoDich);
  }

  deleteGiaoDich(id: number): Observable<GiaoDich> {
    return this.http.delete<GiaoDich>(`${API_URL}/giaoDich/${id}`);
  }
}
