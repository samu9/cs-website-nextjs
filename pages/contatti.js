import MainLayout from "../layouts/mainLayout";
import PageTitle from "../components/PageTitle";
import ContactsForm from "../components/ContactsForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import Divider from "../components/divider";

const Contatti = () => (
    <MainLayout>
        <div className="content-wrapper contatti">
            <PageTitle title="Contatti" />
            <section>
                <div className="numeri">
                    <h2 className="title"><span><FontAwesomeIcon icon={faPhone} /></span> 057384596</h2>
                    <div className="interni">
                        <p><span>Interno 1</span> Servizio magazzini</p>
                        <p><span>Interno 2</span> Francesco</p>
                        <p><span>Interno 3</span> Assistenza Web</p>
                        <p><span>Interno 4</span> Amministrazione</p>
                    </div>
                    <Divider width="100%" />
                    <h2 className="title"><span><FontAwesomeIcon icon={faWhatsapp} /></span> 3939201151</h2>
                    <div className="content">
                        <p>Numero riservato a messaggi Whatsapp per informazioni.</p>
                    </div>
                </div>
                <div className="form">
                    <h2>
                        Vuoi informazioni?<br/>
                        Usa il form per contattarci.
                    </h2>
                    <ContactsForm />
                </div>
            </section>
        </div>
    </MainLayout>
);

export default Contatti