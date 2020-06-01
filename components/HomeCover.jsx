import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faCheck } from '@fortawesome/free-solid-svg-icons'
import Collapsible from './Collapsible';

const collapseInfo = [
    {
        title: "Nuovo",
        content: "Prodotti nuovi e originali di numerosi marchi."
    },
    {
        title: "Revisionato",
        content: "Revisionato garantito ad un prezzo conveniente."
    },
    {
        title: "Motori completi",
        content: "Molti modelli disponibili, nuovi, revisionati o smontati da auto seminuove."
    },
    {
        title: "Prodotti di servizio",
        content: "Tantissimi prodotti come pasta lavamani, ecc"
    },
    {
        title: "Minuterie",
        content: "Guarnizioni, rondelle, viti, fusibili e molto altro."
    },

]

class HomeCover extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            enterH1: 'enter',
            enterH2: 'enter',
            enterH3: 'enter',
            collapsed: new Array(collapseInfo.length).fill("closed"),
            collapsedIndex: 0
        }
        this.toggleCollapse = this.toggleCollapse.bind(this)
    }



    componentDidMount() {
        this.setState({
            isMobile: window.innerWidth < 768,
            scroll: this.props.scroll
        });

        this.setState({ enterH1: '' })
        setTimeout(() => this.setState({ enterH3: '', enterH2: '' }), 800)

        this.toggleCollapse(0)
        setInterval(() => {
            const newIndex = (this.state.collapsedIndex + 1) % collapseInfo.length
            this.setState({collapsedIndex: newIndex})
            this.toggleCollapse(newIndex)
        },5000)
    }

    toggleCollapse(index) {
        let newCollapsed = Array(collapseInfo.length).fill("closed")
        newCollapsed[index] = "open"
        this.setState({ collapsed: newCollapsed })
    }

    render() {
        return (
            <section className="home-cover">
                <div className="content">
                    <div className="title">
                        <h1 className={this.state.enterH1}>Car<br />Solution</h1>
                        <h3 className={this.state.enterH3}>La soluzione per i ricambi auto.</h3>
                    </div>
                    <div className={this.state.enterH2 + " description"}>
                        <h2>Tutto ciò di cui hai bisogno per i ricambi auto.</h2>
                        <p>Moltissimi prodotti per svariati modelli.<br />
                            Dai ricambi alle minuterie.<br />
                            Nuovi, revisionati o di concorrenza.<br />
                            <a href="">Scopri di più</a></p>
                    </div>
                    <div className="list">
                        <ul>
                            {
                                collapseInfo.map((info, i) => (
                                    <li key={i}><Collapsible
                                        title={<div><FontAwesomeIcon className="check-icon" icon={faCheck} /> {info.title}</div>}
                                        content={info.content}
                                        collapsed={this.state.collapsed[i]}
                                        toggleCollapse={() => this.toggleCollapse(i)}
                                    />
                                    </li>
                                ))
                            }

                        </ul>
                    </div>
                    {/* <a className="button">Prova ora!</a> */}

                </div>

                <img style={{
                    transform: 'translateY(' + this.props.scroll * 0.3 + 'px)'
                }} src={require('../assets/images/bg.svg')} />
                <FontAwesomeIcon className="down-icon" style={{opacity: this.props.scroll > 20? 0 : 1}} icon={faArrowDown} />
            </section>
        )
    }
}


export default HomeCover