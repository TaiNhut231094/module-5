package com.codegym.app_nha_xe.service.impl;

import com.codegym.app_nha_xe.model.DiemDi;
import com.codegym.app_nha_xe.repository.IDiemDiRepository;
import com.codegym.app_nha_xe.service.IDiemDiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DiemDiService implements IDiemDiService {
    @Autowired
    private IDiemDiRepository diemDiRepository;

    @Override
    public List<DiemDi> getAll() {
        return diemDiRepository.getAll();
    }
}
