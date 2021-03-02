import { Injectable } from '@angular/core';

@Injectable()
export class GlobalvarService {
  private judul : String = "judul";
  private isi : String = "judul";
  private tanggal : String = "judul";

  constructor() { }

  public getjudul(){
    return this.judul;
  }

  public setjudul(judul){
    this.judul = judul;
  }

  public getisi(){
    return this.isi;
  }

  public setisi(isi){
    this.isi = isi;
  }

  public gettanggal(){
    return this.tanggal;
  }

  public settanggal(tanggal){
    this.tanggal = tanggal;
  }
}