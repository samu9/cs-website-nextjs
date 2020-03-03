const categories = [
    {
        name: "Valvole EGR",
        description: "Numerosi modelli di valvole EGR per qualsiasi tipo di vettura. Disponibili nuovi, revisionati e di concorrenza.",
        photo: "https://images.homedepot-static.com/productImages/563ef22b-d147-4b4d-b46b-6a97cdbd9b3d/svn/oe-solutions-fuel-systems-911-697-64_1000.jpg"
    },
    {
        name: "Turbine",
        description: "Abbiamo disponibilità sia di turbine nuove oppure revisionate nella nostra officina.",
        photo: "https://cdn10.bigcommerce.com/s-gnopa3kz47/products/2286/images/5746/20181226_122444_B__48276.1547055286.1280.1280.jpg?c=2"
    },
    {
        name: "Ricambi GPL",
        description: "Iniettori, rail, serbatoi. Tutto ciò che serve per l'alimentazione GPL.",
        photo: "https://i.ebayimg.com/images/g/Ki8AAOSwdGFYxwc6/s-l1600.jpg"
    },
    {
        name: "Piantoni Sterzo",
        description: "Piantoni completi e componenti. Revisionati e testati su banchi prova specifici.",
        photo: "https://cdn.motordoctor.de/thumb/assets/bvs/ersatz_categories/300x300/292.png"
    },
    {
        name: "Centraline motore",
        description: "Sia nuove che revisionate. Servizio di decodifica di moltissimi modelli.",
        photo: "https://img1.wsimg.com/isteam/ip/3d4cded9-18d6-4652-967a-3bfd1cea11b8/09061726_5b90e4c8388b2.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:400,cg:true"
    },
    {
        name: "Sospensioni pneumatiche",
        description: "Sospensioni, ammortizzatori, molle e compressori.",
        photo: "https://sc02.alicdn.com/kf/HTB1Cq.6kDmWBKNjSZFBq6xxUFXaU/W212-Air-Suspension-Assembly-Bilstein-Gas-Strut.jpg_350x350.jpg"
    },
]

import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ScrollPointer from './ScrollPointer';

class CategoriesSquares extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scroll: 0,
            active: 0,
            scrolling: false
        }
        this.scrollable = React.createRef()
        this.scrollToActive = this.scrollToActive.bind(this)
        this.smoothScroll = this.smoothScroll.bind(this)
    }


    scrollHorizontal(e) {
        // if(this.state.reqId){
        //     window.cancelAnimationFrame(this.state.reqId)
        // }
        
        const marginLeft = parseFloat(getComputedStyle(this.scrollable.current.children[0]).marginLeft.replace("px", ""))
        const childWidth = this.scrollable.current.children[0].offsetWidth + marginLeft;
        const active = Math.floor(this.scrollable.current.scrollLeft / childWidth)
        this.setState({ active })
        
    }

    scrollToActive(point) {
        this.setState({ active: point })
        const marginLeft = parseFloat(getComputedStyle(this.scrollable.current.children[0]).marginLeft.replace("px", ""))
        const childWidth = this.scrollable.current.children[0].offsetWidth + marginLeft;
        const end = Math.ceil(childWidth * point)
        this.smoothScroll(new Date().getTime(), this.scrollable.current.scrollLeft, end)
    }

    smoothScroll(startTime, start, end) {
        if(this.state.reqId){
            window.cancelAnimationFrame(this.state.reqId)
        }
        // if(this.scrollable.current.scrollLeft == this.scrollable.current.scrollWidth){
        //     console.log("end")
        // }
        
        const duration = 10000;
        if (!startTime) startTime = new Date().getTime()
        const elapsed = new Date().getTime() - startTime;
        let step = end >= start? Math.ceil((elapsed / duration) * (end - start)) : Math.floor((elapsed / duration) * (end - start))
        // if(elapsed > duration) step = 0;
    
        // console.log(step)
        if (Math.abs(this.scrollable.current.scrollLeft - end) == 1) {
            console.log(elapsed)
            this.scrollable.current.scrollLeft = end
            return
        } else {
            this.scrollable.current.scrollLeft += step
            const reqId = window.requestAnimationFrame(() => this.smoothScroll(startTime, this.scrollable.current.scrollLeft, end))
            this.setState({reqId})
        }
    }

    componentDidMount() {
        console.log(this.scrollable)
    }

    componentWillUnmount(){
        if(this.state.reqId){
            window.cancelAnimationFrame(this.state.reqId)
        }
    }

    render() {
        return (
            <div className="categories-squares">
                <div ref={this.scrollable} onScroll={() => this.scrollHorizontal(event)} className="categories-squares__content">
                    {/* <div className="swipe">
                    <FontAwesomeIcon style={{color: 'red'}} icon={faArrowRight} />
                </div> */}
                    {
                        categories.map(c => (
                            <div key={c.name} className="category">
                                <img src={c.photo} />
                                <div className="description">
                                    <h1>{c.name}</h1>
                                    <p>{c.description}</p>
                                    {/* <button>Scopri</button> */}
                                </div>
                            </div>
                        ))
                    }

                </div>
                <ScrollPointer count={categories.length} active={this.state.active} scrollPoint={this.scrollToActive} />
            </div>
        )
    }
}

export default CategoriesSquares;