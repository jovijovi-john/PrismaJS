import { Router } from "express";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { CreateProductCategoryController } from "./controllers/CreateProductCategoryController";
import { CreateProductController } from "./controllers/CreateProductController";
import { CreateProductWithExistsCategoryController } from "./controllers/CreateProductWithExistsCategory";
import { FindCategoryController } from "./controllers/FindCategoryController";
import { FindProductController } from "./controllers/FindProductController";

const router = Router();

const createProduct = new CreateProductController();
const createCategory = new CreateCategoryController();
const createProductCategory = new CreateProductCategoryController();
const createProductCategoryExists = new CreateProductWithExistsCategoryController();

const findProduct = new FindProductController();
const findCategory = new FindCategoryController();

router.post("/product", createProduct.handle);
router.post("/category", createCategory.handle);
router.post("/productCategory", createProductCategory.handle);
router.post("/productWithCategory", createProductCategoryExists.handle);

router.get("/product/:id", findProduct.handle);
router.get("/category/:id", findCategory.handle);

export { router };