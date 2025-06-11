import "./EditProduct.css";
import {useForm} from "react-hook-form";
import {ProductModel} from "../../../Models/ProductModel.ts";
import {useNavigate, useParams} from "react-router-dom";
import {productService} from "../../../Services/ProductService.ts";
import {useEffect, useState} from "react";
import {notify} from "../../../Utils/Notify.ts";
import {useTitle} from "../../../Utils/UseTitle.ts";

export function EditProduct() {
    useTitle("Edit product");
    const [image, setImage] = useState("");
    const {register, handleSubmit, setValue, formState: {isValid}} = useForm<ProductModel>();//use a form library for handling a form
    const navigate = useNavigate();//useNavigate for navigation
    const params = useParams() //useParams for taking the route parameter :id
    const id = +params.id! //Take the route parameter :id

    useEffect(() => {
        productService.getOneProduct(id)
            .then(dbProducts => {
                setValue("name", dbProducts.name);
                setValue("price", dbProducts.price);
                setValue("stock", dbProducts.stock);
                setImage(dbProducts.imageUrl!);
            })
            .catch(err => console.log(err.message));
    }, [])

    async function send(product: ProductModel) {
        try {
            product.image = (product.image as unknown as FileList)[0];
            product.id = id
            await productService.updateProduct(product);
            notify.success("Product has been updated");
            navigate("/products/" + product.id);
        } catch (err: unknown) {
            notify.error(err);
        }
    }


    return (
        <div className="EditProduct">
            <form onSubmit={handleSubmit(send)}>

                <label>Name: </label>
                <input type="text" {...register("name")} required minLength={2} maxLength={100}/>

                <label>Price: </label>
                <input type="number" step="0.01" {...register("price")} required minLength={0} maxLength={100}/>

                <label>Stock: </label>
                <input type="number" {...register("stock")} required minLength={0} maxLength={100}/>

                <label>Image: </label>
                <input type="file" accept="image/*" {...register("image")}/>

                <img src={image}/>

                <button type="submit" disabled={!isValid}>Update</button>

            </form>
        </div>
    );
}
