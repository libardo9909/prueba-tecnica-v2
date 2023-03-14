import { Observable } from "rxjs";
import { loginRequest } from "../login";
import { BaseResponse  } from "../../base/base";

export abstract class LoginGateway {
    abstract getLogin(body:loginRequest): Observable<BaseResponse<String>>;
}