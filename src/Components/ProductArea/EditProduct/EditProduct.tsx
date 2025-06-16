import "./EditProduct.css";
import {useForm} from "react-hook-form";
import {ProductModel} from "../../../Models/ProductModel.ts";
import {useNavigate, useParams} from "react-router-dom";
import {productService} from "../../../Services/ProductService.ts";
import {useEffect, useState} from "react";
import {notify} from "../../../Utils/Notify.ts";
import {useTitle} from "../../../Utils/UseTitle.ts";
import {Button, TextField} from "@mui/material";

export function EditProduct() {
    useTitle("Edit product");
    const [image, setImage] = useState("");
    const {register, handleSubmit, setValue} = useForm<ProductModel>();//use a form library for handling a form
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
            navigate("/products/");
        } catch (err: unknown) {
            notify.error(err);
        }
    }


    return (
        <div className="EditProduct">
            <form onSubmit={handleSubmit(send)}>

                <TextField
                    label="Name"
                    fullWidth
                    inputProps={{minLength: 2, maxLength: 30}}
                    required
                    placeholder="Name"
                    {
                        ...register("name")
                    }/>

                <TextField
                    label="Price"
                    fullWidth
                    inputProps={{minLength: 2, maxLength: 30}}
                    required
                    placeholder="Price"
                    {
                        ...register("price")
                    }/>

                <TextField
                    label="Stock"
                    fullWidth
                    inputProps={{minLength: 5, maxLength: 20}}
                    required
                    placeholder="Stock"
                    {
                        ...register("stock")
                    }/>



                <img className="imagePreview" src={image}/>


                <TextField
                    variant="standard"
                    InputProps={{disableUnderline: true}}
                    type="file"
                    fullWidth
                    inputProps={
                        {accept: "image/*"}
                    }  {

                        ...register("image")
                    }
                    onChange={(it) => {
                        const target = it.target as HTMLInputElement;
                        const file = target.files?.[0];
                        if (file) {
                            setImage(URL.createObjectURL(file));
                        }
                    }
                    }/>

                <Button
                    type="submit"
                    color="primary"
                    fullWidth
                    variant="contained"
                >Update product</Button>
            </form>

        </div>
    );
}
