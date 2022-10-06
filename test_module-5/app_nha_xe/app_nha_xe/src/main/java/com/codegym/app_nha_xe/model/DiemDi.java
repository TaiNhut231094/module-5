package com.codegym.app_nha_xe.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.List;

@Entity
public class DiemDi {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "ten_tinh")
    private String tenTinh;

    @OneToMany(mappedBy = "diemDi", cascade = CascadeType.ALL)
    @JsonBackReference
    private List<NhaXe> nhaXe;

    public DiemDi() {
    }

    public DiemDi(Integer id, String tenTinh) {
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
