import {KhachHang} from './khach-hang';

export interface GiaoDich {
  id: number;
  khachHang: KhachHang;
  ngayGD: string;
  donGia: number;
  dienTich: number;
}
