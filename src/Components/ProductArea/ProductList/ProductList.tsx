import "./ProductList.css";
import {productService} from "../../../Services/ProductService.ts";
import {ProductModel} from "../../../Models/ProductModel"
import {useEffect, useState} from "react";
import {ProductCard} from "../ProductCard/ProductCard.tsx";
import {useTitle} from "../../../Utils/UseTitle.ts";

export function ProductList() {
    useTitle("Products")

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
            {/*<NavLink to="products/total" className="nav-link">All products</NavLink>*/}
        </div>

    );
}
