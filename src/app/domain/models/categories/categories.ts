export class CategoriesDto {
    id?: String;
    code?: String;
    title?: String;
    description?:String;
    idParentCategory?:String;
    createDate?:Date;
    updateDate?:Date;
    softDelete?:Date;
  }

  export class CategoriesRequest{
    code?: String;
    title?: String;
    description?:String;
    idParentCategory?:String;
  }