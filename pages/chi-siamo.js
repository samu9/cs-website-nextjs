import MainLayout from "../layouts/mainLayout";
import PageTitle from "../components/PageTitle";
import { useState, useEffect } from "react";

const img1 = require('../assets/images/capannone.jpg')

const style1 = {
    backgroundImage: ' url(' + img1 + ')'
}

const ChiSiamo = () => {
    const [enter, setEnter] = useState('enter')

    useEffect( () => {
        setEnter('')
    },[])
    return (
        <MainLayout>
            <div className="content-wrapper chi-siamo">
                <PageTitle title="Chi Siamo" />
                <section>

                    <p>
                        Car Solution nasce il 1° gennaio 2005. Dopo un inizio "in piccolo", nel luglio 2009 si è trasferita nei nuovi locali di Larciano.
                        L’amministratore Paolo Marliani ha cercato di mettere a frutto le esperienze maturate in molti anni come agente plurimandatario nel
                        settore dei ricambi auto e veicoli industriali.
                    </p>
                    <p>
                        Un brevetto (Sonde Lambda universali) e alcune felici intuizioni come il sensore dibimetro universale, le centraline IAW 59F revisionate
                        e i piantoni elettrici revisionati, hanno permesso a Car Solution di presentarsi sul mercato con notevole anticipo sulla concorrenza.
                    </p>
                    <div className="image">
                        <img className={enter} src={require('../assets/images/capannone.jpg')} />
                        <div className="description">
                            Il nuovo capannone di Car Solution, a Larciano (PT).
                        </div>
                    </div>
                    <p>
                        Sul nostro catalogo si possono trovare svariate famiglie di prodotti anche molto diverse tra loro.
                        Diamo la priorità ai prodotti revisionati, in quanto Car Solution sta portando avanti il suo progetto
                        che ha per fine "essere un fornitore di riferimento per una sempre più vasta gamma di ricambi revisionati".
                        In Car Solution crediamo molto sulle opportunità di crescita che ci possono essere offerte nel futuro
                        immediato dal settore dei ricambi revisionati.
                    </p>

                </section>


            </div>

        </MainLayout>
    )
}

export default ChiSiamo