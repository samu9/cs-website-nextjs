class Collapsible extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collapsed: this.props.collapsed
        }
    }

    componentDidMount(){
    }
    toggleClass() {
        const newClass = (this.state.collapsed === 'closed') ? 'open' : 'closed';
        this.setState({ collapsed: newClass })
        console.log(this.state)
    }

    render() {
        return (
            <div className={"collapsible " + this.props.collapsed}>
                <div className="collapsible__title" onClick={this.props.toggleCollapse}>
                    {this.props.title}
                </div>
                <div className={"collapsible__collapse " + this.props.collapsed}>
                    <div className="collapsible__content">
                        {this.props.content}
                    </div>
                </div>
            </div>
        )
    }
}

export default Collapsible