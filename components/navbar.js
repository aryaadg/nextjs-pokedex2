export default function Nav() {
    return (

<nav className="uk-navbar-container uk-margin" uk-navbar="true">
    <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
            <li className="uk-active"><a href="#">Home</a></li>
            <li><a href="#">about</a></li>
        </ul>

    </div>

    <div className="uk-navbar-right">

        <div>
            <a className="uk-navbar-toggle uk-dark" uk-search-icon="uk-margin uk-dark" href="#"></a>
            <div className="uk-drop " uk-drop="mode: click; pos: left-center; offset: 0">
                <form className="uk-search uk-search-navbar uk-width-1-1">
                    <input className="uk-search-input uk-dark" type="search" placeholder="Search" autofocus/>
                </form>
            </div>
        </div>

    </div>
</nav>


);
    }