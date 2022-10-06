package com.codegym.app_nha_xe.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.List;

@Entity
public class DiemDen {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;
    @Column(name = "ten_tinh")
    String tenTinh;

    @OneToMany(mappedBy = "diemDen", cascade = CascadeType.ALL)
    @JsonBackReference
    private List<NhaXe> nhaXe;

    public DiemDen() {
    }

    public DiemDen(Integer id, String tenTinh) {
        this.id = id;
        this.tenTinh = tenTinh;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTenTinh() {
        return tenTinh;
    }

    public void setTenTinh(String tenTinh) {
        this.tenTinh = tenTinh;
    }

    public List<NhaXe> getNhaXe() {
        return nhaXe;
    }

    public void setNhaXe(List<NhaXe> nhaXe) {
        this.nhaXe = nhaXe;
    }
}
