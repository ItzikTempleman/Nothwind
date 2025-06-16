import axios, {type AxiosRequestConfig} from "axios";
import {ProductModel} from "../Models/ProductModel";
import {appConfig} from "../Utils/AppConfig";
import {store} from "../Redux/Store";
import {productSlice} from "../Redux/ProductSlice";
import {notify} from "../Utils/Notify.ts";

class ProductService {

    // Get all products from the backend:
    public async getAllProducts(): Promise<ProductModel[]> {

        // If products exist in the global state, return them from the global state:
        if (store.getState().products.length > 0) return store.getState().products;

        // Get all products:
        const response = await axios.get<ProductModel[]>(appConfig.productsUrl);

        // Extract products:
        const products = response.data;

        // // Save products in the global state:
        // const payload: ProductModel[] = products;
        // const type: string = "productSlice/initProducts";
        // const action: PayloadAction<ProductModel[]> = { payload, type };
        // store.dispatch(action);
        // // Same:
        // const action = productSlice.actions.initProducts(products);
        // store.dispatch(action);

        // Same:
        store.dispatch(productSlice.actions.initProducts(products));
        // Return products:
        return products;
    }

    // Get one product from backend:
    public async getOneProduct(id: number): Promise<ProductModel> {
        // If product exists in our global state:
        const product = store.getState().products.find(p => p.id === id);
        if (product) return product;
        // Get one product:
        const response = await axios.get<ProductModel>(appConfig.productsUrl + id);
        // Extract product:
        const dbproduct = response.data;
        // Return product:
        return dbproduct;
    }

    // Add product:
    public async addProduct(product: ProductModel): Promise<void> {
        // Tells axios to send data + files:
        const options: AxiosRequestConfig = {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        };

        // Send product to backend:
        //const response =
        const response = await axios.post<ProductModel>(appConfig.productsUrl, product, options);
        const dbProduct = response.data;
        console.log(dbProduct)
        // Extract db product:
        // const dbProduct = response.data;

        // Save added product also in the global state:
        //store.dispatch(productSlice.actions.addProduct(dbProduct));
    }

    // Update product:
    public async updateProduct(product: ProductModel): Promise<void> {
        // Tells axios to send data + files:
        const options: AxiosRequestConfig = {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        };
        try {
            // Send product to backend:
            const response = await axios.put<ProductModel>(appConfig.productsUrl + product.id, product, options);
            // Extract db product:
            const dbProduct = response.data;
            // Save updated product also in the global state
            store.dispatch(productSlice.actions.updateProduct(dbProduct));

        } catch (err: unknown) {
            notify.error(err)
        }

    }

    // Delete product:
    public async deleteProduct(id: number): Promise<void> {

        // Delete product from backend:
        await axios.delete(appConfig.productsUrl + id);

        // Delete product also from the global state:
        store.dispatch(productSlice.actions.deleteProduct(id));
    }
}

export const productService = new ProductService();