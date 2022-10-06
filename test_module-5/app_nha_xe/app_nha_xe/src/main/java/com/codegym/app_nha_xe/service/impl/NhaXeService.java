package com.codegym.app_nha_xe.service.impl;

import com.codegym.app_nha_xe.model.NhaXe;
import com.codegym.app_nha_xe.repository.INhaXeRepository;
import com.codegym.app_nha_xe.service.INhaXeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NhaXeService implements INhaXeService {
    @Autowired
    private INhaXeRepository nhaXeRepository;

    @Override
    public Page<NhaXe> getAll(Pageable pageable) {
        return nhaXeRepository.getAll(pageable);
    }

    @Override
    public List<NhaXe> getAllNotPagination() {
        return this.nhaXeRepository.getAllNotPagination();
    }

    @Override
    public void save(NhaXe nhaXe) {
        this.nhaXeRepository.saveNhaXe(nhaXe.getEmail(), nhaXe.getGioDen(), nhaXe.getGioDi(), nhaXe.getLoaiXe(), nhaXe.getNhaXe(),
                nhaXe.getSoDT(), nhaXe.getSoXe(), nhaXe.getDiemDen().getId(), nhaXe.getDiemDi().getId());
    }

    @Override
    public void update(NhaXe nhaXe) {
        this.nhaXeRepository.updateNhaXe(nhaXe.getEmail(), nhaXe.getGioDen(), nhaXe.getGioDi(), nhaXe.getLoaiXe(), nhaXe.getNhaXe(),
                nhaXe.getSoDT(), nhaXe.getSoXe(), nhaXe.getDiemDen().getId(), nhaXe.getDiemDi().getId(), nhaXe.getId());
    }

    @Override
    public void delete(Integer id) {
        this.nhaXeRepository.deleteNhaXe(id);
    }

    @Override
    public Optional<NhaXe> findById(Integer id) {
        return this.nhaXeRepository.findById(id);
    }
}
