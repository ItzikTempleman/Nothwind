import {useForm} from "react-hook-form";
import {ProductModel} from "../../../Models/ProductModel";
import {productService} from "../../../Services/ProductService";
import "./AddProduct.css";
import {useNavigate} from "react-router-dom";
import {notify} from "../../../Utils/Notify.ts";
import {useTitle} from "../../../Utils/UseTitle.ts";
import {Button, TextField} from "@mui/material";

export function AddProduct() {
    useTitle("Add product")
    const {register, handleSubmit} = useForm<ProductModel>();
    const navigate = useNavigate();

    async function send(product: ProductModel) {
        try {
            product.image = (product.image as unknown as FileList)[0];

            await productService.addProduct(product);
            notify.success("Product has been added.");
            navigate("/products")
        } catch (err: unknown) {
            notify.error(err);
        }
    }

    return (
        <div className="AddProduct">

            <form onSubmit={handleSubmit(send)}>

                <TextField label="Name" placeholder="Enter item title" fullWidth {...register("name")}/>

                <TextField label="price" placeholder="Price in ₪" fullWidth type="number" {...register("price")}/>

                <TextField label="stock" placeholder="Anount in stock?" fullWidth type="number" {...register("stock")}/>

                <TextField type="file" fullWidth inputProps={{ accept: "image/*" }} {...register("image")}/>


                <Button color="primary" variant="contained">Add</Button>

            </form>

        </div>
    );
}
