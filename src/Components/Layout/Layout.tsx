import "./Layout.css";
import {Header} from "../LayoutArea/Header/Header.tsx";
import {Copyrights} from "../LayoutArea/Copyrights/Copyrights.tsx";
import {Menu} from "../LayoutArea/Menu/Menu.tsx";
import {Routing} from "../LayoutArea/Routing/Routing.tsx";

export function Layout() {
    return (
        <div className="Layout">
            <header>
                <Header/>
            </header>
            <aside>
                <Menu/>
            </aside>
            <main>
                <Routing/>
            </main>
            <footer>
                <Copyrights/>
            </footer>
        </div>
    );
}
