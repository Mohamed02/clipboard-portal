import styles from './Bottom.module.scss'
const Bottom= function(){
    return <section id="bottom">
    <div class="section-container my-20">
      <h3>Cipboard for iOS adn MacOS</h3>
      <p class="section-content">
        Available for free on the App store. Downlaod fo rMac or iOS, sync with iCloud and your ready
      </p>
      <div class="flex flex-col justify-center w-full space-y-6 text-xl text-white md:flex-row md:space-y-0 md:space-x-4">
        <a href="test" class={`${styles.buttonContainer} bg-strongCyan`}>
          Download for IOS
        </a>
        <a href="test" class={`${styles.buttonContainer} bg-lightBlue`}>
          Download for MAC
        </a>
      </div>
    </div>

  </section>
}
export default Bottom;