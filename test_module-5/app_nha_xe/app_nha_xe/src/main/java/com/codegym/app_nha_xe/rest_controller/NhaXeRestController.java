package com.codegym.app_nha_xe.rest_controller;

import com.codegym.app_nha_xe.model.DiemDen;
import com.codegym.app_nha_xe.model.DiemDi;
import com.codegym.app_nha_xe.model.NhaXe;
import com.codegym.app_nha_xe.service.IDiemDenService;
import com.codegym.app_nha_xe.service.IDiemDiService;
import com.codegym.app_nha_xe.service.INhaXeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping(value = "/nhaXeRest")
public class NhaXeRestController {
    @Autowired
    private INhaXeService nhaXeService;

    @Autowired
    private IDiemDiService diemDiService;

    @Autowired
    private IDiemDenService diemDenService;

    @ModelAttribute("diemDi")
    public List<DiemDi> diemDiList() {
        return diemDiService.getAll();
    }

    @ModelAttribute("diemDen")
    public List<DiemDen> diemDenList() {
        return diemDenService.getAll();
    }

    @GetMapping(value = "/listPage")
    public ResponseEntity<Page<NhaXe>> goNhaXeList(@PageableDefault(size = 5) Pageable pageable) {
        Page<NhaXe> nhaXeList = this.nhaXeService.getAll(pageable);
        if (nhaXeList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(nhaXeList, HttpStatus.OK);
    }

    @GetMapping(value = "/listNotPagination")
    public ResponseEntity<List<NhaXe>> goListNotPagination() {
        List<NhaXe> nhaXeList = this.nhaXeService.getAllNotPagination();
        if (nhaXeList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(nhaXeList, HttpStatus.OK);
    }

    @GetMapping(value = "/diemDiList")
    public ResponseEntity<List<DiemDi>> goDiemDiList() {
        List<DiemDi> diemDiList = this.diemDiService.getAll();
        if (diemDiList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(diemDiList, HttpStatus.OK);
    }

    @GetMapping(value = "/diemDenList")
    public ResponseEntity<List<DiemDen>> goDiemDenList() {
        List<DiemDen> diemDenList = this.diemDenService.getAll();
        if (diemDenList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(diemDenList, HttpStatus.OK);
    }

    @PostMapping(value = "/createNhaXe")
    public ResponseEntity<Void> saveNhaXe(@RequestBody NhaXe nhaXe) {
        this.nhaXeService.save(nhaXe);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Optional<NhaXe>> findById(@PathVariable Integer id) {
        Optional<NhaXe> nhaXe = this.nhaXeService.findById(id);
        return new ResponseEntity<>(nhaXe, HttpStatus.OK);
    }

    @PutMapping(value = "/editNhaXe")
    public ResponseEntity<Void> updateNhaXe(@RequestBody NhaXe nhaXe) {
        this.nhaXeService.update(nhaXe);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> deleteNhaXe(@PathVariable Integer id) {
        this.nhaXeService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
