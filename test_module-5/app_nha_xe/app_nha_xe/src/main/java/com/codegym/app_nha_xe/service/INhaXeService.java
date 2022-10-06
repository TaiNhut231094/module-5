package com.codegym.app_nha_xe.service;

import com.codegym.app_nha_xe.model.NhaXe;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface INhaXeService {
    Page<NhaXe> getAll(Pageable pageable);

    List<NhaXe> getAllNotPagination();

    void save(NhaXe nhaXe);

    void update(NhaXe nhaXe);

    void delete(Integer id);

    Optional<NhaXe> findById(Integer id);
}
