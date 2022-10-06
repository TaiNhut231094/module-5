import { Component, OnInit } from '@angular/core';
import {GiaoDich} from '../../model/giao-dich';
import {GiaoDichService} from '../giao-dich.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  giaoDichDS: GiaoDich[] = [];
  idDelete: number;
  nameDelete: string;
  totalRecords: number;
  page: 1;
  dienTichSearch = '';
  tenKHSearch = '';

  constructor(private giaoDichService: GiaoDichService,
              private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.giaoDichService.getAll(this.dienTichSearch, this.tenKHSearch).subscribe((giaoDichDS) => {
      this.totalRecords = giaoDichDS.length;
      this.giaoDichDS = giaoDichDS;
    });
  }

  openDelete(item: GiaoDich) {
    this.idDelete = item.id;
    this.nameDelete = item.ngayGD;
  }

  deleteGiaoDich() {
    this.giaoDichService.deleteGiaoDich(this.idDelete).subscribe(() => {
      this.ngOnInit();
      this.toastrService.success('Xóa thành công', 'Thông báo');
    });
  }

  getValueSearch() {
    this.giaoDichService.getAll(this.dienTichSearch, this.tenKHSearch).subscribe(giaoDichDS => {
      this.giaoDichDS = giaoDichDS;
    });
  }
}
