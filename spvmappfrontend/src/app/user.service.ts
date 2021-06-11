import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject,Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private fileList: string[] = new Array<string>();
 private fileList$: Subject<string[]> = new Subject<string[]>();
 //options = new RequestOptions({headers: headers});

  private baseURL="http://localhost:9090/api/v1/users";
  constructor(private httpClient:HttpClient) { }

  getUserList():Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL}`);
  }

  getUserById(id:number):Observable<User>{
    return this.httpClient.get<User>(`${this.baseURL}/${id}`);
  }

  updateUserById(id:number,user:User):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,user);
  }

  deleteUser(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  createUser(user:User):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,user);
  }

  //file upload functionality : rest api 
  
  public upload(fileName: string):Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/${fileName}`,fileName);
   // this.fileList.push(fileName));
    //this.fileList$.next(this.fileList);
  }
  
}
