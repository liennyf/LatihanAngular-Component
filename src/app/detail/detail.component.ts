import { Component, OnInit } from '@angular/core';
import { GlobalvarService } from '../globalvar.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

constructor(private route : ActivatedRoute){
  }

  paramjudul : string;

  ngOnInit() {
    let judul = this.route.snapshot.paramMap.get('judul');
    this.paramjudul = judul;
  }

}