import { Component, OnInit } from '@angular/core';
import { DistritosService } from 'ZgzComponents';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-services.page',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './services.page.component.html',
  styleUrl: './services.page.component.css',
})
export class ServicesPageComponent implements OnInit {
  distritos: any = [];

  constructor(public distritosService: DistritosService) {}

  async ngOnInit() {
    this.distritos = await this.distritosService.getDistritos({
      rows: 2,
      fl: 'title,id,description,geometry',
    });
  }
}
