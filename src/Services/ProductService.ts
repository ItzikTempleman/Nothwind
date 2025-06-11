import axios, {type AxiosRequestConfig} from "axios";
import {ProductModel} from "../Models/ProductModel";
import {appConfig} from "../Utils/AppConfig";
import {notify} from "../Utils/Notify.ts";
import {store} from "../Redux/Store.ts";
import {productSlice} from "../Redux/ProductSlice.ts";

class ProductService {

    public async getAllProducts(): Promise<ProductModel[]> {

        if (store.getState().products.length > 0) return store.getState().products;

        const response = await axios.get<ProductModel[]>(appConfig.productsUrl);
        const products = response.data;

        // const payload: ProductModel[] = products;
        // const type: string = "productSlice/initProducts";
        // const action: PayloadAction<ProductModel[]> = {payload, type}
        // store.dispatch(action)

        store.dispatch(productSlice.actions.initProducts(products))
        return products;
    }

    public async getOneProduct(id: number): Promise<ProductModel> {

        const product= store.getState().products.find(p=> p.id===id);
        if (product) return product;

        const response = await axios.get<ProductModel>(appConfig.productsUrl + id);
        return response.data;
    }

    public async addProduct(product: ProductModel): Promise<void> {
        const options: AxiosRequestConfig = {headers: {"Content-Type": "multipart/form-data"}}
        const response =await axios.post<ProductModel>(appConfig.productsUrl, product, options);
        const dbProduct=response.data
        store.dispatch(productSlice.actions.addProduct(dbProduct));
    }

    public async updateProduct(product: ProductModel): Promise<void> {
        const options: AxiosRequestConfig = {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }
        try {
            await axios.put<ProductModel>(appConfig.productsUrl + product.id, product, options);
        } catch (err: unknown) {
            notify.error(err);
        }
    }

    public async deleteProduct(id: number): Promise<void> {
        await axios.delete(appConfig.productsUrl + id)
    }
}

export const productService = new ProductService();
