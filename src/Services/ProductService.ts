import axios, {type AxiosRequestConfig} from "axios";
import {ProductModel} from "../Models/ProductModel";
import {appConfig} from "../Utils/AppConfig";
import {notify} from "../Utils/Notify.ts";

class ProductService {

    public async getAllProducts(): Promise<ProductModel[]> {
        const response = await axios.get<ProductModel[]>(appConfig.productsUrl);
        return response.data;
    }

    public async getOneProduct(id: number): Promise<ProductModel> {
        const response = await axios.get<ProductModel>(appConfig.productsUrl + id);
        return response.data;
    }

    public async addProduct(product: ProductModel): Promise<void> {
        const options: AxiosRequestConfig = {headers: {"Content-Type": "multipart/form-data"}}
        await axios.post<ProductModel>(appConfig.productsUrl, product, options);
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
