import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseResponse } from "../models/base/base";
import { CategoriesDto, CategoriesRequest } from "../models/categories/categories";
import { CategoriesGateway } from "../models/categories/gateway/categories.gateway";

@Injectable({
    providedIn: 'root',
})

export class CategoriesUseCases {
    constructor(private _categoriesGateway:CategoriesGateway){}

    getCategories():Observable<BaseResponse<CategoriesDto[]>>{ 
        return  this._categoriesGateway.getCategories(); 
    }

    createCategories(body:CategoriesRequest){
        return this._categoriesGateway.createCategories(body);
    }

    updateCategories(body:CategoriesRequest){
        return this._categoriesGateway.updateCategories(body);
    }

    deleteCategories(id:String){
        return this._categoriesGateway.deleteCategories(id);
    }
}
