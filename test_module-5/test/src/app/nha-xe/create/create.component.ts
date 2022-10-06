import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NhaXeService} from '../nha-xe.service';
import {ToastrService} from 'ngx-toastr';
import {DiemDi} from '../../model/diem-di';
import {DiemDen} from '../../model/diem-den';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  nhaXeForm: FormGroup;
  diemDi: DiemDi[] = [];
  diemDen: DiemDen[] = [];

  constructor(private nhaXeService: NhaXeService,
              private toastrService: ToastrService) {
    this.nhaXeForm = new FormGroup({
      soXe: new FormControl('', [Validators.required]),
      nhaXe: new FormControl('', [Validators.required]),
      loaiXe: new FormControl('', [Validators.required]),
      soDT: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      diemDi: new FormControl('', [Validators.required]),
      diemDen: new FormControl('', [Validators.required]),
      gioDi: new FormControl('', [Validators.required]),
      gioDen: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.getAllDiemDi();
    this.getAllDiemDen();
  }

  submit() {
    if (this.nhaXeForm.valid) {
      this.nhaXeService.saveNhaXe(this.nhaXeForm.value).subscribe(() => {
        this.nhaXeForm.reset();
        this.toastrService.success('Thêm mới thành công', 'Thông báo');
      });
    }
  }

  getAllDiemDi() {
    this.nhaXeService.getAllDiemDi().subscribe(diemDi => {
      this.diemDi = diemDi;
    });
  }

  getAllDiemDen() {
    this.nhaXeService.getAllDiemDen().subscribe(diemDen => {
      this.diemDen = diemDen;
    });
  }
}
