import { Observable } from "rxjs";
import { CategoriesDto, CategoriesRequest } from "../categories";
import { BaseResponse  } from "../../base/base";

export abstract class CategoriesGateway {
    abstract getCategories(): Observable<BaseResponse<CategoriesDto[]>>;
    abstract createCategories(body:CategoriesRequest):Observable<BaseResponse<String>>;
    abstract updateCategories(body:CategoriesRequest):Observable<BaseResponse<String>>;
    abstract deleteCategories(id:String):Observable<BaseResponse<String>>;
}