import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { DRESS_API } from '../common/api-const';
import { Dress } from '../dto/dress';

@Injectable()
export class DressService {

  private _dress: Dress[];
  constructor(private http:HttpClient) {
    this.findAll().subscribe(
      data=>this._dress =data
    )
  }
   
  findAll(){
   return this.http.get<Dress[]>(DRESS_API);
  }

  save(dress: Dress){
    return this.http.post(DRESS_API,dress);
  }

  findById(id :number){
    return this._dress.find(p=>p.id ===id )
  }
}
