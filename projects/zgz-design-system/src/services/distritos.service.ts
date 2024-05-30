import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DistritosService {
  constructor() {}

  async getDistritos() {
    const distritos = await fetch(
      'https://www.zaragoza.es/sede/servicio/distrito.json',
    );
    const distritosJson = await distritos.json();
    return distritosJson;
  }

  async getDistrito(id: number) {
    const distrito = await fetch(
      `https://www.zaragoza.es/sede/servicio/distrito/${id}.json`,
    );
    const distritoJson = await distrito.json();
    return distritoJson;
  }
}
