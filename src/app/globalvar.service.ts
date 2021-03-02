import { Injectable } from '@angular/core';

@Injectable()
export class GlobalvarService {
  private judul : String = "judul";
  private isi : String = "judul";
  private tanggal : String = "judul";
  private halaman1: boolean = true;
  private halaman2: boolean = false;
  private halaman3: boolean = false;
  private liked: boolean = false;

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

  public gethalaman1(){
   return this.halaman1;
  }
  
  public gethalaman2(){
   return this.halaman2;
  }
  
  public gethalaman3(){
   return this.halaman3;
  }

  public sethalaman1(hal){
    this.halaman1 = hal;
  }
   public sethalaman2(hal){
    this.halaman2 = hal;
  } 
  public sethalaman3(hal){
    this.halaman3 = hal;
  }

  public getliked(){
   return this.liked;
  }

  public setliked(like){
    this.liked=like;
  }

}