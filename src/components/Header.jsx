import navBarHeader from "../data/navBarHeader";
import ListProduct from "./ListProduct";
export default function Header() {
    return (<header>
    <div className="container">
        <img className="logo-img" src="/dc-logo.png" alt="logo"></img>
        <nav className="header-nav">
        <ul>
              {navBarHeader.map((navBar) => {
                return (
                  <li
                    key={navBarHeader.id}>
                    <a href={navBar.url}>{navBar.text}</a>
                  </li>
                );
              })}
            </ul>
        </nav>
    </div>
    <div className="hero">
        <img src="/jumbotron.jpg" alt="hero" />
      </div>
    <div className="black">
    <ListProduct/>
     </div>
</header>
    
)
}