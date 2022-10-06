import {Component, OnInit} from '@angular/core';

import {ToastrService} from 'ngx-toastr';
import {NhaXe} from '../../model/nha-xe';
import {NhaXeService} from '../nha-xe.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  nhaXeList: NhaXe[] = [];
  listNhaXeNotPagination: NhaXe[] = [];
  idDelete: number;
  nameDelete: string;
  totalRecords: number;
  indexPagination = 0;

  constructor(private nhaXeService: NhaXeService,
              private toastrService: ToastrService) {
  }

  ngOnInit(): void {
    this.nhaXeService.getAll(this.indexPagination).subscribe((nhaXe: any) => {
      this.nhaXeList = nhaXe.content;
    });
    this.nhaXeService.getAllNotPagination().subscribe((nhaXe: NhaXe[]) => {
      this.listNhaXeNotPagination = nhaXe;
      if ((this.listNhaXeNotPagination.length % 5) !== 0) {
        this.totalRecords = (Math.round(this.listNhaXeNotPagination.length / 5)) + 1;
      }
    });
  }

  openDelete(item: NhaXe) {
    this.idDelete = item.id;
    this.nameDelete = item.soXe;
  }

  deleteAppNhaXe() {
    this.nhaXeService.delete(this.idDelete).subscribe(() => {
      this.ngOnInit();
      this.toastrService.success('Xóa thành công', 'Thông báo');
    });
  }

  firstPage() {
    this.indexPagination = 0;
    this.ngOnInit();
  }


  nextPage() {
    this.indexPagination = this.indexPagination + 1;
    // if (this.indexPagination > this.totalRecords) {
    //   this.indexPagination = this.indexPagination - 1;
    // }
    // this.nhaXeService.getAll((this.indexPagination * 5) - 5).subscribe((nhaXe: NhaXe[]) => {
    //   this.nhaXeList = nhaXe;
    // });
    this.ngOnInit();
  }

  privousPage() {
    this.indexPagination = this.indexPagination - 1;
    // if (this.indexPagination === 0) {
    //   this.indexPagination = 1;
    // }
    this.ngOnInit();
  }
}
