import "./EditProduct.css";
import {useForm} from "react-hook-form";
import {ProductModel} from "../../../Models/ProductModel.ts";
import {useNavigate} from "react-router-dom";
import {productService} from "../../../Services/ProductService.ts";

export function EditProduct() {

    const {register, handleSubmit} = useForm<ProductModel>();
    const navigate = useNavigate();

    async function send(product: ProductModel) {
        try {
            product.image = (product.image as unknown as FileList)[0];

            await productService.updateProduct(product);
            alert("Product has been updated");
            navigate("/products/"+product.id)
        } catch (err: unknown) {
            if (err instanceof Error) {
                console.error("❌ Backend error:", err.message);
            } else {
                console.error("❌ Unknown error occurred:", err);
            }
            throw err;
        }
    }


    return (
        <div className="EditProduct">
            <form onSubmit={handleSubmit(send)}>

                <label>Name: </label>
                <input type="text" {...register("name")} />

                <label>Price: </label>
                <input type="number" step="0.01" {...register("price")} />

                <label>Stock: </label>
                <input type="number" {...register("stock")} />

                <label>Image: </label>
                <input type="file" accept="image/*" {...register("image")}/>

                <button>Update</button>

            </form>
        </div>
    );
}
