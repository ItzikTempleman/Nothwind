import "./ProductDetails.css";
import {NavLink, useNavigate, useParams} from "react-router-dom"
import {useEffect, useState} from "react";
import type {ProductModel} from "../../../Models/ProductModel.ts";
import {productService} from "../../../Services/ProductService.ts";
import {notify} from "../../../Utils/Notify.ts";
import {useTitle} from "../../../Utils/UseTitle.ts";



export function ProductDetails() {
useTitle("Details")
    const params = useParams();
    const id = +params.id!;
    const [product, setProduct] = useState<ProductModel>()
    const navigate = useNavigate()
    useEffect(() => {
        productService.getOneProduct(id)
            .then(dbProducts => setProduct(dbProducts))
            .catch(err => console.log(err.message));
    }, [id])

    async function deleteMe() {
        try {
            const sure = confirm("Are you sure?")
            if (!sure) return
            await productService.deleteProduct(id)
            notify.success("product has been deleted")
            navigate("/products")
        }  catch (err: unknown){
            notify.error(err);
        }
    }

    return (
        <div className="ProductDetails">

            <h3>{product?.name}</h3>
            <h3>Price: {product?.price}</h3>
            <h3>Stock: {product?.stock}</h3>
            <img src={product?.imageUrl} alt={product?.imageUrl}/>
            <br/>
            <br/>
            <NavLink to="/products"> Back</NavLink>
            <span> | </span>
            <NavLink to={"/products/edit/" + product?.id}> Edit</NavLink>
            <span> | </span>
            <NavLink to="#" onClick={deleteMe}>Delete</NavLink>
        </div>
    );
}
