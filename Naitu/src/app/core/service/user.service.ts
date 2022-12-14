import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient) {}

    getAll() {
      return this.httpClient.get<any>(`https://localhost:7088/api/User/GetAll`);
      }

      getAll2() {
        let pp: UserModel[] = [
          { id: 1,
             rut: 123,
              name: "wilder",
               lastname: "cortes", email: "wcortes@gmail.com", password: "123", birthdate: "" }
          
      ];
      return pp;
       
        }
}
