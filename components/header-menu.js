import Link from 'next/link'


function links() {
    return [
        { title: "Chi Siamo", url: "/chi-siamo" },
        { title: "Dove Siamo", url: "/dove-siamo" },
        { title: "Contatti", url: "/contatti" },
        { title: "Catalogo", url: "/catalogo" },
    ]
}

class HeaderMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: 'closed',
            currentPage: 'Home'
        }
    }

    toggle() {
        if (this.state.open == 'closed') {
            this.setState({ open: 'opened' })
        } else {
            this.setState({ open: 'closed' })
        }
    }
    render() {
        return (
            <div className="header-menu">
                {this.state.open == 'opened' ? (<div onClick={() => { if (this.state.open == 'opened') this.toggle() }} className={"backdrop " + this.state.open}></div>) : ('')}
                <nav>
                    <Link href="/">
                        <a>
                            <img className="w-20" src={require('../assets/images/logo.png')} />
                        </a>
                    </Link>
                    <div className="burger" onClick={() => this.toggle()}>
                        <i></i>
                        <i></i>
                        <i></i>
                    </div>
                    <div className={"menu " + this.state.open}>
                        {links().map(link => (

                            <Link key={link.title} href={link.url}>
                                <a className={this.state.currentPage == link.title ? 'link active' : 'link'}>{link.title}</a>
                            </Link>

                        ))
                        }
                        <span className="flex-grow"></span>

                        <a className="ecommerce" href="http://shop.carsolutionsrl.it">Ecommerce</a>

                    </div>
                </nav>
            </div>
        );
    }
}

export default HeaderMenu;