import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NhaXeService} from '../nha-xe.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {DiemDi} from '../../model/diem-di';
import {DiemDen} from '../../model/diem-den';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  nhaXeForm: FormGroup;
  diemDi: DiemDi[] = [];
  diemDen: DiemDen[] = [];
  id: number;

  constructor(private nhaXeService: NhaXeService,
              private activatedRoute: ActivatedRoute,
              private toastrService: ToastrService,
              private router: Router) {
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
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.nhaXeService.findById(this.id).subscribe(nhaXe => {
        this.nhaXeForm.patchValue(nhaXe);
      });
    });
  }

  ngOnInit(): void {
    this.getAllDiemDi();
    this.getAllDiemDen();
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

  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }

  updateAppNhaXe() {
    const nhaXe = this.nhaXeForm.value;
    this.nhaXeService.updateNhaXe(this.id, nhaXe).subscribe(() => {
      this.router.navigateByUrl('');
      this.toastrService.success('Chỉnh sửa thành công', 'Thông báo');
    });
  }

}
