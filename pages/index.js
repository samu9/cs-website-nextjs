import MainLayout from '../layouts/mainLayout'
import PresentationBox from '../components/indexPage/presentationBox'
import Parteners from '../components/partners'
import Divider from '../components/divider'
import CategoriesSquares from '../components/CategoriesSquares'
import HomeCover from '../components/HomeCover'


const presentation = [
    {
        title: "Revisionato garantito",
        text: "Forniamo prodotti revisionati con garanzia 1 anno tra cui: piantoni, centraline, pompe elettroidrauliche, valvole EGR, volani motorini e alternatori."
    },
    {
        title: "Vasto assortimento",
        text: "Vogliamo offrire una gamma di prodotti sempre in linea con i trend di mercato per fornire sempre ai nostri clienti nuove opportunità commerciali."
    },
    {
        title: "Rete di vendita",
        text: "Raggiungiamo il cliente facilmente grazie ai nostri rappresentanti sparsi sul territorio. Contattateci per scoprire il modo più veloce per ricevere e valutare i nostri prodotti."
    },
    {
        title: "Rapporto con i clienti",
        text: "Flessibilità e capacità di venire incontro al cliente per creare rapporti duraturi a vantaggio di tutti. Serietà e disponibilità sono indispensabili oltre a quel pizzico di affabilità toscana che ci contraddistingue."
    }
]


class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile: true,
            scroll: 0,
        }
        this.scrollTo = React.createRef()
    }

    componentDidMount() {
        this.setState({
            isMobile: window.innerWidth < 768,
            scroll: window.pageYOffset
        });
        // window.addEventListener('resize', () => {
        //     this.setState({
        //         isMobile: window.innerWidth < 768
        //     });
        // }, false);
        window.addEventListener('scroll', () => {
            this.setState({
                scroll: window.pageYOffset
            });
        }, false);
        
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', null, false);
    }

    render() {
        return (
            <MainLayout>
                <div className="home">
                    <HomeCover scroll={this.state.scroll} />
                    <section ref={this.scrollTo} className="home-presentation">
                        <CategoriesSquares/>
                        <div className="content">
                            <div className="services">
                                <div className="service">
                                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 18h-1c-.552 0-1-.448-1-1v-2h12v-9h4.667c1.117 0 1.6.576 1.936 1.107.594.94 1.536 2.432 2.109 3.378.188.312.288.67.288 1.035v4.48c0 1.121-.728 2-2 2h-1c0 1.656-1.344 3-3 3s-3-1.344-3-3h-4c0 1.656-1.344 3-3 3s-3-1.344-3-3zm3-1.2c.662 0 1.2.538 1.2 1.2 0 .662-.538 1.2-1.2 1.2-.662 0-1.2-.538-1.2-1.2 0-.662.538-1.2 1.2-1.2zm10 0c.662 0 1.2.538 1.2 1.2 0 .662-.538 1.2-1.2 1.2-.662 0-1.2-.538-1.2-1.2 0-.662.538-1.2 1.2-1.2zm-10-8.8h-8v-2h8v-1h-5v-1c0-.552.448-1 1-1h9c.552 0 1 .448 1 1v10h-11v-3h-2v-2h7v-1zm9 0v3h4.715l-1.427-2.496c-.178-.312-.509-.504-.868-.504h-2.42z" /></svg>
                                    <h1>Consegna in tutta Italia</h1>
                                    <p>Con tutti i corrieri nazionali.</p>
                                </div>

                                <div className="service">
                                    <svg className="icon" width="24px" height="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path d="M3.848 19h-.848c-.796 0-1.559-.316-2.121-.879-.563-.562-.879-1.325-.879-2.121v-3c0-7.175 5.377-13 12-13s12 5.825 12 13v3c0 .796-.316 1.559-.879 2.121-.562.563-1.325.879-2.121.879h-.848c-2.69 4.633-6.904 5-8.152 5-1.248 0-5.462-.367-8.152-5zm16.152-5.876c-.601.236-1.269-.18-1.269-.797 0-.304-.022-.61-.053-.915-1.761-.254-3.618-1.926-3.699-3.723-1.315 2.005-4.525 4.17-7.044 4.17 1.086-.699 1.839-2.773 1.903-3.508-.581 1.092-2.898 3.136-4.551 3.487l-.018.489c0 .619-.669 1.032-1.269.797v3.771c.287.256.632.464 1.041.594.225.072.412.224.521.424 2.206 4.046 5.426 4.087 6.438 4.087.929 0 3.719-.035 5.877-3.169-1.071.433-2.265.604-3.759.653-.37.6-1.18 1.016-2.118 1.016-1.288 0-2.333-.784-2.333-1.75s1.045-1.75 2.333-1.75c.933 0 1.738.411 2.112 1.005 1.9-.026 4.336-.334 5.888-2.645v-2.236zm-11-.624c.686 0 1.243.672 1.243 1.5s-.557 1.5-1.243 1.5-1.243-.672-1.243-1.5.557-1.5 1.243-1.5zm6 0c.686 0 1.243.672 1.243 1.5s-.557 1.5-1.243 1.5-1.243-.672-1.243-1.5.557-1.5 1.243-1.5zm5.478-1.5h1.357c-.856-5.118-4.937-9-9.835-9-4.898 0-8.979 3.882-9.835 9h1.357c.52-4.023 3.411-7.722 8.478-7.722s7.958 3.699 8.478 7.722z" /></svg>
                                    <h1>Supporto post vendita</h1>
                                    <p>Assistenza tecnica e documentazione.</p>
                                </div>

                                <div className="service">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.873 9.81c.087-.251.127-.509.127-.764 0-.77-.38-1.514-1.055-1.981-2.153-1.492-1.868-1.117-2.679-3.543-.34-1.013-1.319-1.697-2.424-1.697h-.007c-2.653.009-2.193.151-4.334-1.354-.446-.314-.974-.471-1.501-.471s-1.055.157-1.502.471c-2.156 1.515-1.686 1.362-4.334 1.353h-.007c-1.104 0-2.084.685-2.422 1.697-.812 2.432-.534 2.056-2.678 3.544-.677.469-1.057 1.212-1.057 1.983 0 .254.042.511.127.762.831 2.428.829 1.962 0 4.38-.085.251-.127.507-.127.762 0 .77.38 1.514 1.057 1.983 2.146 1.49 1.868 1.113 2.679 3.543.338 1.013 1.317 1.697 2.422 1.697h.007c2.653-.009 2.193-.152 4.334 1.353.446.314.974.472 1.501.472s1.055-.158 1.502-.471c2.141-1.504 1.679-1.362 4.334-1.353h.007c1.104 0 2.084-.685 2.424-1.697.811-2.427.525-2.052 2.679-3.543.674-.469 1.054-1.213 1.054-1.983 0-.254-.04-.512-.127-.763-.831-2.428-.827-1.963 0-4.38zm-11.873 10.69c-4.694 0-8.5-3.806-8.5-8.5s3.806-8.5 8.5-8.5 8.5 3.806 8.5 8.5-3.806 8.5-8.5 8.5zm-1.25-4.542l-3.75-3.637 1.549-1.548 2.201 2.088 4.701-4.819 1.549 1.548-6.25 6.368z" /></svg>
                                    <h1>Garanzia su tutti i prodotti</h1>
                                    <p>Possibilità di reso.</p>
                                </div>
                            </div>

                            {/* {
                                presentation.map((p, i) => (
                                    <div className="wrapper">
                                        <PresentationBox title={p.title} text={p.text} />
                                        {this.state.isMobile && i < presentation.length - 1 ? <Divider /> : ''}
                                    </div>
                                ))
                            } */}
                        </div>

                        <Divider />

                        <Parteners />
                    </section>
                </div>
            </MainLayout>
        )
    }
}

export default Index;