import {createRoot} from 'react-dom/client'
import './index.css'

import {BrowserRouter} from 'react-router-dom'
import {Layout} from "./Components/Layout/Layout.tsx";
import {Provider} from "react-redux";
import {store} from "./Redux/Store.ts";

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <BrowserRouter>
            <Layout/>
        </BrowserRouter>
    </Provider>
)
