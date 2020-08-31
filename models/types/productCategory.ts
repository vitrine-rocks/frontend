interface IProductCategory {
  id: string;
  name: string;
  exhibitionOrder: number;
  slug: string;
}

export class ProductCategory implements IProductCategory {
  id: string;
  name: string;
  exhibitionOrder: number;
  slug: string

  constructor();
  constructor(obj: IProductCategory)
  constructor(obj?: IProductCategory){
    this.id = obj && obj.id || '';
    this.name = obj && obj.name || '';
    this.exhibitionOrder = obj && obj.exhibitionOrder || 0;
    this.slug = obj && obj.slug || '';
  }
}
