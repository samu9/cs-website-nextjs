class ScrollPointer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="scrollPointer">{
                [...Array(this.props.count)].map((e, i) =>
                    <span onClick={ () => this.props.scrollPoint(i)} className={(this.props.active === i)? 'point active': 'point'} key={i}></span>
                )
            }
            </div>
        )
    }
}

export default ScrollPointer