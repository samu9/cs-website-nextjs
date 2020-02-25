import '../styles/main.scss'

import Head from 'next/head'

import HeaderMenu from "../components/header-menu";
import Footer from "../components/footer";
import ChatButton from '../components/ChatButton';

const MainLayout = props => (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Head>
            <title>Ricambi auto nuovi e revisionati, accessori e componenti</title>
        </Head>
        <HeaderMenu />
        <main style={{ flexGrow: 1 }}>
            {props.children}
        </main>
        <Footer />
        <ChatButton />
    </div>
);

export default MainLayout;