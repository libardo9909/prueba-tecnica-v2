import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseResponse } from "../models/base/base";
import { LoginGateway } from "../models/login/gateway/login.gateway";
import { loginRequest } from "../models/login/login";

@Injectable({
    providedIn: 'root',
})

export class LoginUseCases {
    constructor(private _loginGateway:LoginGateway){}

    getLogin(body:loginRequest):Observable<BaseResponse<String>>{ 
        return  this._loginGateway.getLogin(body); 
    }
}