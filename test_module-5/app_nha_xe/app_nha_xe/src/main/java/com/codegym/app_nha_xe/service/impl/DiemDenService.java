package com.codegym.app_nha_xe.service.impl;

import com.codegym.app_nha_xe.model.DiemDen;
import com.codegym.app_nha_xe.repository.IDiemDenRepository;
import com.codegym.app_nha_xe.service.IDiemDenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DiemDenService implements IDiemDenService {
    @Autowired
    private IDiemDenRepository diemDenRepository;

    @Override
    public List<DiemDen> getAll() {
        return diemDenRepository.getAll();
    }
}
