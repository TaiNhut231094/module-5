import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {NhaXe} from '../model/nha-xe';
import {DiemDen} from '../model/diem-den';
import {DiemDi} from '../model/diem-di';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class NhaXeService {

  constructor(private http: HttpClient) {
  }

  getAll(page: number): Observable<NhaXe[]> {
    return this.http.get<NhaXe[]>(API_URL + '/nhaXeRest/listPage?page=' + page);
  }

  getAllNotPagination(): Observable<NhaXe[]> {
    return this.http.get<NhaXe[]>(API_URL + '/nhaXeRest/listNotPagination');
  }

  getAllDiemDen(): Observable<DiemDen[]> {
    return this.http.get<DiemDen[]>(API_URL + '/nhaXeRest/diemDenList');
  }

  getAllDiemDi(): Observable<DiemDi[]> {
    return this.http.get<DiemDi[]>(API_URL + '/nhaXeRest/diemDiList');
  }

  saveNhaXe(nhaXe): Observable<NhaXe> {
    return this.http.post<NhaXe>(API_URL + '/nhaXeRest/createNhaXe', nhaXe);
  }

  findById(id: number): Observable<NhaXe> {
    return this.http.get<NhaXe>(`${API_URL}/nhaXeRest/${id}`);
  }

  updateNhaXe(id: number, nhaXe: NhaXe): Observable<NhaXe> {
    return this.http.put<NhaXe>(`${API_URL}/nhaXeRest/editNhaXe/${id}`, nhaXe);
  }

  delete(id: number): Observable<NhaXe> {
    return this.http.delete<NhaXe>(`${API_URL}/nhaXeRest/${id}`);
  }
}
