import Hero from "../hero/Hero";
import Snippets from "../snippets/Snippets";
import Features from "../features/Features";
import styles from './Clipboard.module.scss';
import Access from "../access/Access";
import References from "../references/References";
import SuperCharge from "../superCharge/SuperCharge";
import Bottom from "../bottom/Bottom";
import Footer from "../footer/Footer";
const Clipboard = function() {

    return <div className={`mb-5 ${styles.clipBoard}`}>
        <Hero/>
        <Snippets/>
        <Features/>
        <Access/>
        <SuperCharge/>
        <References/>
        <Bottom/>
        <Footer/>
        </div>
}
export default Clipboard;