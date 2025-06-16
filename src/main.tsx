import {createRoot} from 'react-dom/client'
import './index.css'

import {BrowserRouter} from 'react-router-dom'
import {Layout} from "./Components/Layout/Layout.tsx";
import {Provider} from "react-redux";
import {store} from "./Redux/Store.ts";
import {ThemeProvider} from "@mui/material";
import {muiTheme} from "./Theme/Theme.ts";

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <BrowserRouter>
            <ThemeProvider theme={muiTheme}>
            <Layout/>
            </ThemeProvider>
        </BrowserRouter>
    </Provider>
)
