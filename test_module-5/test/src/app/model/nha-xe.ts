import {DiemDi} from './diem-di';
import {DiemDen} from './diem-den';

export interface NhaXe {
  id: number;
  soDT: string;
  email: string;
  soXe: string;
  nhaXe: string;
  loaiXe: string;
  diemDi: DiemDi;
  diemDen: DiemDen;
  gioDi: string;
  gioDen: string;
}
