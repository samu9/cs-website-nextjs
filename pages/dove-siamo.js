import MainLayout from "../layouts/mainLayout";
import PageTitle from "../components/PageTitle";
import Divider from '../components/divider'
import ItalyMap from "../components/ItalyMap";
import { aree } from '../data/aree'

const DoveSiamo = () => (
    <MainLayout>
        <div className="content-wrapper dove-siamo">
            <PageTitle title="Dove Siamo" />
            <section>
                <p>Ci troviamo in Toscana, nella provincia di Pistoia. Per chi arriva passando dall'autostrada, raccomandiamo di uscire alla uscita di Montecatini Terme.</p>
                <div className="location">
                    <div className="address">
                        {/* <FontAwesomeIcon icon={faMapMarker} /> */}
                        <div>
                            <p>Via Corsini, 1008/1012</p>
                            <p>51036 Larciano (PT)</p>
                        </div>
                    </div>
                    <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.4189745038752!2d10.852450615503367!3d43.826409979115795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a63a267dd4927%3A0x55950a85976962d4!2sCar%20Solution%20Srl!5e0!3m2!1sit!2sit!4v1580467869388!5m2!1sit!2sit"></iframe>
                </div>
            </section>
            <Divider />
            <h1>La nostra rete distributiva</h1>
            <p>Abbiamo <b>{aree.length}</b> rappresentanti sparsi in tutto il territorio italiano. Per qualsiasi domanda o necessità, potetete fare riferimento al rappresentante della vostra zona.
                <br/>Clicca sulla tua regione per i contatti.
            </p>
            <ItalyMap />
        </div>
    </MainLayout>
);

export default DoveSiamo