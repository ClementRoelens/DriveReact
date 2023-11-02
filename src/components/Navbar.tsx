import Classes from "./Navbar.module.css";

function Navbar() {
    const position: string = "Hell's Kitchen";
    const pseudo: string = "Inconnu";
    const cartLength: number = 0;

    return (<>
        <header className={Classes.header}>
            <div className={`${Classes.topBar} ${Classes.flexAround}`}>
                <button className={`${Classes.desktopOnly} ${Classes.itemMenu}`}>Retrait à {position}</button>
                <span className={Classes.searchArea}>
                    <select className={Classes.headerSelect} name="categories" id="categories">
                        <option className={Classes.headerSelectOption} value="all">Toutes les catégories</option>
                        <option className={Classes.headerSelectOption} value="food">Alimentation générale</option>
                        <option className={Classes.headerSelectOption} value="home-appliance">Électro-ménager</option>
                        <option className={Classes.headerSelectOption} value="clothes">Vêtements</option>
                        <option className={Classes.headerSelectOption} value="ironsmith">Quincaillerie</option>
                        <option className={Classes.headerSelectOption} value="high-tech">High-tech</option>
                    </select>
                    <input className={Classes.headerSearch} type="text" placeholder="Rechercher sur ClémentDrive.fr" />
                </span>
                <button className={`${Classes.desktopOnly} ${Classes.itemMenu}`}>
                <p className={Classes.buttonHeaderChild}>Bonjour {pseudo}, identifiez-vous</p>
                <h3 className={Classes.buttonHeaderChild}>Compte et listes</h3>
            </button>
            <button className={`${Classes.desktopOnly} ${Classes.itemMenu}`}>
            <p className={Classes.buttonHeaderChild}>Retours</p>
            <h3 className={Classes.buttonHeaderChild}>et commandes</h3>
        </button>
        <button className={`${Classes.desktopOnly} ${Classes.itemMenu} ${Classes.cartButton}`}>
        <div className={Classes.cartArea}>
            <img className={Classes.cart} src="src/assets/cart.png" alt="Icone de panier" />
            <p className={Classes.cartQuantity}>{cartLength}</p>
        </div>
        <p className={Classes.desktopOnly}>Panier</p>
    </button >
            </div >
        <nav className={Classes.flexAround}>
            <a href="" className={Classes.itemMenu}><img src="src/assets/burger-menu.png" alt="Burger menu" className={Classes.icon} /> Toutes</a>
            <a href="" className={Classes.itemMenu}>Meilleures ventes</a>
            <a href="" className={Classes.itemMenu}>Dernières nouveautés</a>
            <a href="" className={Classes.itemMenu}>Ventes flash</a>
            <a href="" className={Classes.itemMenu}>Livres</a>
            <a href="" className={Classes.itemMenu}>Cuisine et maison</a>
        </nav>
        </header >
        </>
    );
}

export default Navbar;