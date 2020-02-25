const categories = [
    "Valvole EGR",
    "Piantoni sterzo",
    "Ricambi iniezione GPL",
    "Turbine",
    "Ricambi iniezione diesel",
    "Ricambi iniezione benzina"
]

class CategoriesCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
            class: '',
            last: 2,
            listLength: 3,
            list: categories.slice(0, 3)
        }
        // this.setState({list: })
        // console.log(this.state.list)
    }

    switchCategory() {
        this.setState({ class: 'exit' });
        setTimeout(() => this.setState({
            class: 'no-transition enter',
            current: (this.state.current + 1) % categories.length
        }), 600)
        // this.setState()
        setTimeout(() => this.setState({ class: '' }), 700)
    }

    scrollList(){
        const last = this.state.last
    }

    componentDidMount() {
        setInterval(() => {
            this.switchCategory();
            // this.setState({ last: (this.state.last + 1) % categories.length })
        }, 4000)
    }
    render() {
        return (
            <div id="categories-carousel">
                {/* <h3 className={this.state.class}>{categories[this.state.current]}</h3> */}
                <div className="list">
                    <ul className={''}>{
                        this.state.list.map(e => (
                            <li className={''}>{e}</li>
                        ))
                    }

                        {/* <li className={''}>{categories[this.state.listLength - this.state.last + 1]}</li>
                        <li className={''}>{categories[this.state.listLength - this.state.last + 2]}</li> */}
                    </ul>
                </div>
            </div>
        )
    }
}

export default CategoriesCarousel