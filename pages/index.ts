import Vue, { PropOptions } from 'vue';
import { ProductCategoryService } from "~/models/services/productCategory";
import { ProductCategory } from "~/models/types/productCategory";

export default Vue.extend({
  name: 'Index',

  data() {
    return {
      productCategories: [] = [] as ProductCategory[],
      productCategory: new ProductCategory()
    }
  },

  created() {
    const service: ProductCategoryService = new ProductCategoryService();
    this.productCategories = service.listAll();
  },

  methods: {
    add() {
      this.productCategories.push(this.productCategory);
      this.productCategory = new ProductCategory();
    }
  }
})