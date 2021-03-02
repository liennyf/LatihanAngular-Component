import { Component, VERSION } from "@angular/core";
import { Router } from "@angular/router";
import { GlobalvarService } from "./globalvar.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private router: Router, public globalVar: GlobalvarService) {
    this.halaman1 = true;
  }
  halaman1;
  textjudul = "";
  textisi = "";
  texttanggal = "";
  textcarijudul = "";

  name = "Angular " + VERSION.major;

  SAVE() {
    this.globalVar.setjudul(this.textjudul);
    this.globalVar.setisi(this.textisi);
    this.globalVar.settanggal(this.texttanggal);
  }

  OPENHALDETAIL() {
    this.globalVar.sethalaman1(false);
    this.halaman1 = false;
    this.router.navigate(["/detail/" + this.textcarijudul]);
  }

  OPENHALFAVORIT(){
    this.globalVar.sethalaman1(false);
    this.halaman1 = false;
    this.router.navigate(["/favorit"]);
  }
}
