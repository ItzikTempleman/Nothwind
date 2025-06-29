import "./ProductList.css";
import {productService} from "../../../Services/ProductService.ts";
import {ProductModel} from "../../../Models/ProductModel"
import {useEffect, useState} from "react";
import {ProductCard} from "../ProductCard/ProductCard.tsx";
import {useTitle} from "../../../Utils/UseTitle.ts";
import {notify} from "../../../Utils/Notify.ts";

export function ProductList() {
    useTitle("Products")

    const [products, setProducts] = useState<ProductModel[]>([])
    useEffect(() => {

        productService.getAllProducts()
            .then(dbProducts => {
                    setProducts(dbProducts)
                }
            )
            .catch(err => notify.error(err));
    }, []);

    return (
        <div className="ProductList">
            {products.map(p => <ProductCard key={p.id} product={p}/>)};
        </div>

    );
}
