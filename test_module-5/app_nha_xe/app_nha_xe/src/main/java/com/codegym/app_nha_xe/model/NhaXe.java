package com.codegym.app_nha_xe.model;

import javax.persistence.*;

@Entity
public class NhaXe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "so_dt")
    private String soDT;

    private String email;
    @Column(name = "so_xe")
    private String soXe;
    @Column(name = "nha_xe")
    private String nhaXe;
    @Column(name = "loai_xe")
    private String loaiXe;
    @ManyToOne
    @JoinColumn(name = "id_diem_di", referencedColumnName = "id")
    private DiemDi diemDi;
    @ManyToOne
    @JoinColumn(name = "id_diem_den", referencedColumnName = "id")
    private DiemDen diemDen;
    private String gioDi;
    private String gioDen;

    public NhaXe() {
    }

    public NhaXe(Integer id, String soDT, String email, String soXe, String nhaXe, String loaiXe, DiemDi diemDi, DiemDen diemDen, String gioDi, String gioDen) {
        this.id = id;
        this.soDT = soDT;
        this.email = email;
        this.soXe = soXe;
        this.nhaXe = nhaXe;
        this.loaiXe = loaiXe;
        this.diemDi = diemDi;
        this.diemDen = diemDen;
        this.gioDi = gioDi;
        this.gioDen = gioDen;
    }

    public NhaXe(String soDT, String email, String soXe, String nhaXe, String loaiXe, DiemDi diemDi, DiemDen diemDen, String gioDi, String gioDen) {
        this.soDT = soDT;
        this.email = email;
        this.soXe = soXe;
        this.nhaXe = nhaXe;
        this.loaiXe = loaiXe;
        this.diemDi = diemDi;
        this.diemDen = diemDen;
        this.gioDi = gioDi;
        this.gioDen = gioDen;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getSoDT() {
        return soDT;
    }

    public void setSoDT(String soDT) {
        this.soDT = soDT;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSoXe() {
        return soXe;
    }

    public void setSoXe(String soXe) {
        this.soXe = soXe;
    }

    public String getNhaXe() {
        return nhaXe;
    }

    public void setNhaXe(String nhaXe) {
        this.nhaXe = nhaXe;
    }

    public String getLoaiXe() {
        return loaiXe;
    }

    public void setLoaiXe(String loaiXe) {
        this.loaiXe = loaiXe;
    }

    public DiemDi getDiemDi() {
        return diemDi;
    }

    public void setDiemDi(DiemDi diemDi) {
        this.diemDi = diemDi;
    }

    public DiemDen getDiemDen() {
        return diemDen;
    }

    public void setDiemDen(DiemDen diemDen) {
        this.diemDen = diemDen;
    }

    public String getGioDi() {
        return gioDi;
    }

    public void setGioDi(String gioDi) {
        this.gioDi = gioDi;
    }

    public String getGioDen() {
        return gioDen;
    }

    public void setGioDen(String gioDen) {
        this.gioDen = gioDen;
    }
}
