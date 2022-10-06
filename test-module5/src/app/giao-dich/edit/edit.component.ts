import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {KhachHang} from '../../model/khach-hang';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {GiaoDichService} from '../giao-dich.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  giaoDichForm: FormGroup;
  khachHangDS: KhachHang[] = [];
  id: number;

  constructor(private giaoDichService: GiaoDichService,
              private activatedRoute: ActivatedRoute,
              private toastrService: ToastrService,
              private router: Router) {
    this.giaoDichForm = new FormGroup({
      khachHang: new FormControl('', [Validators.required]),
      ngayGD: new FormControl('', [Validators.required]),
      donGia: new FormControl('', [Validators.required]),
      dienTich: new FormControl('', [Validators.required]),
    });
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.giaoDichService.findById(this.id).subscribe(giaoDich => {
        this.giaoDichForm.patchValue(giaoDich);
      });
    });
  }

  ngOnInit(): void {
    this.getAllKhachHang();
  }

  getAllKhachHang() {
    this.giaoDichService.getAllKhahHang().subscribe(khachHangDS => {
      this.khachHangDS = khachHangDS;
    });
  }

  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }

  updateGiaoDich() {
    const giaoDich = this.giaoDichForm.value;
    this.giaoDichService.updateGiaoDich(this.id, giaoDich).subscribe(() => {
      this.router.navigateByUrl('');
      this.toastrService.success('Chỉnh sửa thành công', 'Thông báo');
    });
  }

}
