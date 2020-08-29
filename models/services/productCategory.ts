import { ProductCategory } from "../types/productCategory";
import Vue from 'vue';

export class ProductCategoryService extends Vue {

  listAll():ProductCategory[] {
    const productCategory1: ProductCategory = {
      id: "1",
      name: 'Áreas classificadas',
      exhibitionOrder: 1,
      slug: 'areas-classificadas'
    };

    const productCategory2: ProductCategory = {
      id: "2",
      name: 'Linha de transmissão',
      exhibitionOrder: 2,
      slug: 'linha-transmissao'
    };

    const productCategory3: ProductCategory = {
      id: "3",
      name: 'Rede de distribuição',
      exhibitionOrder: 3,
      slug: 'rede-distribuicao'
    };

    return [productCategory1, productCategory2, productCategory3]
  }
}