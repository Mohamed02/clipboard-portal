
import logo from '../../images/logo.svg'
import styles from './Hero.module.scss'
const Hero=function(){

    return  <section id="hero">
    <div class="max-w-6xl mx-auto text-center mb-40 px-10 pt-16">
      <img src={logo} alt="" class="mx-auto my-16"/>
        <h3>
            A history of everything you copy
        </h3>
      <p class="max-w-3xl mx-auto mb-10 text-2xl text-grayishBlue">
        Clipboard allows you to track and organize everything you copy.
        Instantly access your clipboard on all your devices.
      </p>
      <div class="flex flex-col justify-center w-full space-y-6 text-xl text-white md:flex-row md:space-y-0 md:space-x-4">
        <a href="test" class={`${styles.buttonContainer} bg-strongCyan`}>
          Download for IOS
        </a>
        <a href="test" class={`${styles.buttonContainer} bg-lightBlue`}>
          Download for MAC
        </a>ma,z
      </div>
    </div>
  </section>
}
export default Hero;