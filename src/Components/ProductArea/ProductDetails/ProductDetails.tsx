import "./ProductDetails.css";
import {NavLink, useParams} from "react-router-dom"
import {useEffect, useState} from "react";
import type {ProductModel} from "../../../Models/ProductModel.ts";
import {productService} from "../../../Services/ProductService.ts";


export function ProductDetails() {

    const params = useParams();
    const id = +params.id!;
    const [product, setProduct] = useState<ProductModel>()

    useEffect(() => {
        productService.getOneProduct(id)
            .then(dbProducts => setProduct(dbProducts))
            .catch(err => console.log(err.message));
    }, [id])

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
            <NavLink to={"/edit/"+product?.id}> Edit</NavLink>
        </div>
    );
}
