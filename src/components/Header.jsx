import navBarHeader from "../data/navBarHeader";

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
    <div className="black">
        <h1 >--&gt; Content goes here &lt;--</h1>
        </div>
</header>
    
)
}