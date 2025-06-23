import {Navigate, Route, Routes} from "react-router-dom";
import {About} from "../../PageArea/About/About";
import {Home} from "../../PageArea/Home/Home";
import {ProductList} from "../../ProductArea/ProductList/ProductList";
import "./Routing.css";
import {Page404} from "../../PageArea/Page404/Page404";
import {ProductDetails} from "../../ProductArea/ProductDetails/ProductDetails";
import {AddProduct} from "../../ProductArea/AddProduct/AddProduct";
import {EmployeeList} from "../../EmployeeArea/EmployeeList/EmployeeList.tsx";
import {EditProduct} from "../../ProductArea/EditProduct/EditProduct.tsx";
import {lazy, Suspense} from "react";
import {TotalEmployees} from "../../EmployeeArea/TotalEmployees/TotalEmployees.tsx";
import {EditEmployee} from "../../EmployeeArea/EditEmployee/EditEmployee.tsx";
import {AddEmployee} from "../../EmployeeArea/AddEmployee/AddEmployee.tsx";
import {EmployeeDetails} from "../../EmployeeArea/EmployeeDetails/EmployeeDetails.tsx";
import {Register} from "../../UserArea/Register/Register.tsx";
import {Login} from "../../UserArea/Login/Login.tsx";


export function Routing() {


    const LazyContactUs = lazy(() => import("../../PageArea/ContactUs/ContactUs"))
    const SuspenseContactUs = <Suspense><LazyContactUs/></Suspense>
    return (
        <div className="Routing">
            <Routes>

                <Route path="/" element={<Navigate to="/home"/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact-us" element={SuspenseContactUs}/>
                <Route path="*" element={<Page404/>}/>

                <Route path="/products/total" element={<TotalEmployees/>}/>

                <Route path="/products/new" element={<AddProduct/>}/>
                <Route path="/products" element={<ProductList/>}/>
                <Route path="/products/:id" element={<ProductDetails/>}/>
                <Route path="/products/edit/:id" element={<EditProduct/>}/>

                <Route path="/employees/new" element={<AddEmployee/>}/>
                <Route path="/employees" element={<EmployeeList/>}/>
                <Route path="/employees/:id" element={<EmployeeDetails/>}/>
                <Route path="/employees/edit/:id" element={<EditEmployee/>}/>


                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </div>
    );
}
