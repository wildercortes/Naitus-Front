import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient) {}

    GetUfValue() {
      return this.httpClient.get<any>(`https://mindicador.cl/api`);
      }

    getAll() {
      return this.httpClient.get<any>(`https://localhost:7088/api/User/GetAll`);
      }

      getById(id: string) {
        let params = new HttpParams();
        params = params.set('Id', id);
        return this.httpClient.get<any>(`https://localhost:7088/api/User/GetbyId`,  {
            params: params
          });
      }
    
      add(data: UserModel) {
        return this.httpClient
          .post(`https://localhost:7088/api/User`, data);
      }
    
      update(data: UserModel) {
        return this.httpClient.put(`https://localhost:7088/api/User`, data);
      }
    
      delete(id: string) {
        return this.httpClient.request(
          'DELETE',
          `https://localhost:7088/api/User`,
          {
            body: { id }
          }
        );
      }
      form: FormGroup = new FormGroup({
        name: new FormControl(''),
        lastname: new FormControl(''),
        email: new FormControl(''),
        password: new FormControl(''),
        rut: new FormControl(''),
        birthdate: new FormControl(new Date())
      });
    
      initializeFormGroup() {
        this.form.setValue({
          name: '',   
          lastname: '',  
          email: '',   
          password: '',  
          rut: '',   
          birthdate: '',   
        });
      }
}
