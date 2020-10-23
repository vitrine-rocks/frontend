interface IProduct {
  id: string;
  title: string;
  code: string;
  slug: string;
  showcase_image_url: string;
}

export class Product implements IProduct {
  id: string;
  title: string;
  code: string;
  slug: string;
  showcase_image_url: string;

  constructor();
  constructor(obj: IProduct)
  constructor(obj?: IProduct){
    this.id = obj && obj.id || '';
    this.title = obj && obj.title || '';
    this.code = obj && obj.code || '';
    this.slug = obj && obj.slug || '';
    this.showcase_image_url = obj && obj.showcase_image_url || '';
  }
}
