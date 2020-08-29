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
  constructor(obj?: any){
    this.id = obj && obj.id || null;
    this.name = obj && obj.name || null;
    this.exhibitionOrder = obj && obj.exhibitionOrder || null;
    this.slug = obj && obj.slug || null;
  }
}
