import { Component, OnInit } from "@angular/core";
import { GlobalvarService } from "../globalvar.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-favorit",
  templateUrl: "./favorit.component.html",
  styleUrls: ["./favorit.component.css"]
})
export class FavoritComponent implements OnInit {
  constructor(private router: Router, public globalVar: GlobalvarService) {
    this.judulglobal = this.globalVar.getjudul();
    this.isiglobal = this.globalVar.getisi();
    this.tanggalglobal = this.globalVar.gettanggal();
    this.halaman3 = true;
    this.globalVar.sethalaman1(false);
    this.globalVar.sethalaman2(false);
    this.liked = this.globalVar.getliked();
  }
  liked;
  halaman3;
  judulglobal;
  isiglobal;
  tanggalglobal;

  ngOnInit() {}

  OPENHALINPUT(){
    this.globalVar.sethalaman3(false);
    this.halaman3 = false;
    this.router.navigate(["/input"]);
  }
}
