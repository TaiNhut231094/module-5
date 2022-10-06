import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {KhachHang} from '../../model/khach-hang';
import {GiaoDichService} from '../giao-dich.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  giaoDichForm: FormGroup;
  khachHangDS: KhachHang[] = [];

  constructor(private giaoDichService: GiaoDichService,
              private toastrService: ToastrService) {
    this.giaoDichForm = new FormGroup({
      khachHang: new FormControl('', [Validators.required]),
      ngayGD: new FormControl('', [Validators.required]),
      donGia: new FormControl('', [Validators.required]),
      dienTich: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.getAllKhachHang();
  }

  submit() {
    const giaoDich = this.giaoDichForm.value;
    if (this.giaoDichForm.valid) {
      this.giaoDichService.saveGiaoDich(giaoDich).subscribe(() => {
        this.giaoDichForm.reset();
        this.toastrService.success('Thêm mới thành công', 'Thông báo');
      });
    }
  }

  getAllKhachHang() {
    this.giaoDichService.getAllKhahHang().subscribe(khachHangDS => {
      this.khachHangDS = khachHangDS;
      console.log(this.khachHangDS);
    });
  }

}
