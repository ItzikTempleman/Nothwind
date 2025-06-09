import {Navigate, Route, Routes} from "react-router-dom";
import {About} from "../../PageArea/About/About";
import {Home} from "../../PageArea/Home/Home";
import {ProductList} from "../../ProductArea/ProductList/ProductList";
import "./Routing.css";
import {Page404} from "../../PageArea/Page404/Page404";
import {ContactUs} from "../../PageArea/ContactUs/ContactUs";
import {ProductDetails} from "../../ProductArea/ProductDetails/ProductDetails";
import {AddProduct} from "../../ProductArea/AddProduct/AddProduct";
import {EmployeeList} from "../../EmployeeArea/EmployeeList/EmployeeList.tsx";
import {EditProduct} from "../../ProductArea/EditProduct/EditProduct.tsx";

export function Routing() {
    return (
        <div className="Routing">
            <Routes>
                <Route path="/" element={<Navigate to="/home"/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/products" element={<ProductList/>}/>
                <Route path="/employees" element={<EmployeeList/>}/>
                <Route path="/products/:id" element={<ProductDetails/>}/>
                <Route path="/products/new" element={<AddProduct/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/edit/:id" element={<EditProduct/>}/>
                <Route path="/contact-us" element={<ContactUs/>}/>
                <Route path="*" element={<Page404/>}/>
            </Routes>
        </div>
    );
}
