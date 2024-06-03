import { Injectable } from '@angular/core';
import { objectToQueryString } from '../utils/objectToQueryString';

@Injectable({
  providedIn: 'root',
})
export class DistritosService {
  constructor() {}

  async getDistritos(params?: Record<string, any>) {
    let query = '';

    if (params) {
      query = objectToQueryString(params);
    }

    const distritos = await fetch(
      `https://www.zaragoza.es/sede/servicio/distrito.json?${query}`,
    );
    const distritosJson = await distritos.json();
    return distritosJson;
  }

  async getDistrito(id: number, params?: Record<string, any>) {
    let query = '';

    if (params) {
      query = objectToQueryString(params);
    }
    const distrito = await fetch(
      `https://www.zaragoza.es/sede/servicio/distrito/${id}.json`,
    );
    const distritoJson = await distrito.json();
    return distritoJson;
  }
}
