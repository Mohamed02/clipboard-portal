import googleLogo from '../../images/logo-google.png';
import ibmLogo from '../../images/logo-ibm.png';
import microsoftLogo from '../../images/logo-microsoft.png';
import hpLogo from '../../images/logo-hp.png';
import vectorGraphics from '../../images/logo-vector-graphics.png';

const References=function(){
    return <section id="references">
    <div class="flex flex-col items-center justify-between max-w-6xl px-10 mx-auto space-y-16 my-44 md:flex-row md:space-y-8">
        <img src={googleLogo} alt=""/>
        <img src={ibmLogo} alt=""/>
        <img src={microsoftLogo} alt=""/>
        <img src={hpLogo} alt=""/>
        <img src={vectorGraphics} alt=""/>

    </div>
  </section>;
};
export default References;