import { Component, OnInit } from "@angular/core";
import { GlobalvarService } from "../globalvar.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"]
})
export class DetailComponent implements OnInit {
  constructor(private router: Router, public globalVar: GlobalvarService) {
    this.judulglobal = this.globalVar.getjudul();
    this.isiglobal = this.globalVar.getisi();
    this.tanggalglobal = this.globalVar.gettanggal();
    this.halaman2 = true;
    this.globalVar.sethalaman1(false);
    this.globalVar.sethalaman3(false);
  }

  halaman2;
  judulglobal;
  isiglobal;
  tanggalglobal;
  
  ngOnInit() {}

  LIKE() {
    this.globalVar.setliked(true);
  }

  OPENHALFAVORIT() {
    this.globalVar.sethalaman2(false);
    this.halaman2 = false;
    this.router.navigate(["/favorit"]);
  }
}
