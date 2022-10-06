package com.codegym.app_nha_xe.repository;

import com.codegym.app_nha_xe.model.NhaXe;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

public interface INhaXeRepository extends JpaRepository<NhaXe, Integer> {
    @Query(value = "select * from nha_xe", nativeQuery = true)
    Page<NhaXe> getAll(Pageable pageable);

    @Query(value = "select * from nha_xe", nativeQuery = true)
    List<NhaXe> getAllNotPagination();

    @Modifying
    @Transactional
    @Query(value = "insert into nha_xe (email, gio_den, gio_di, loai_xe, nha_xe, so_dt, so_xe, id_diem_den, id_diem_di) " +
            " value (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9)", nativeQuery = true)
    void saveNhaXe(String email, String gioDen, String gioDi, String loaiXe, String nhaXe, String soDT, String soXe, Integer idDiemDen, Integer idDiemDi);

    @Query(value = "select * from nha_xe where id = :id", nativeQuery = true)
    Optional<NhaXe> findById(@Param("id") Integer id);

    @Modifying
    @Transactional
    @Query(value = "delete from nha_xe where id = :id", nativeQuery = true)
    void deleteNhaXe(@Param("id") Integer id);

    @Modifying
    @Transactional
    @Query(value = "update nha_xe set email = ?1, gio_den = ?2, gio_di = ?3, loai_xe = ?4, nha_xe =?5, so_dt = ?6, so_xe =?7, id_diem_den = ?8, id_diem_di = ?9 where id = ?10", nativeQuery = true)
    void updateNhaXe(String email, String gioDen, String gioDi, String loaiXe, String nhaXe, String soDT, String soXe, Integer idDiemDen, Integer idDiemDi, Integer id);
}
