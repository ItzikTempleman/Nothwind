import "./ProductList.css";
import {productService} from "../../../Services/ProductService.ts";
import {ProductModel} from "../../../Models/ProductModel"
import {useEffect, useState} from "react";
import {ProductCard} from "../ProductCard/ProductCard.tsx";

export function ProductList() {


    const [products, setProducts] = useState<ProductModel[]>([])
    useEffect(() => {

        productService.getAllProducts()
            .then(dbProducts => {
                    setProducts(dbProducts)
                    console.log(dbProducts)
                }
            )
            .catch(err => console.log(err.message));
    }, []);

    return (
        <div className="ProductList">
            {
                products.map(p => <ProductCard key={p.id} product={p}/>)
            };
        </div>
    );
}
