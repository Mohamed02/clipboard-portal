import imagecomputer from '../../images/image-computer.png';
const Features =function(){
    return <section id="features">
    <div class="section-container my-20">
      <div class="relative flex flex-col md:flex-row md:space-x-32">
        <div class="md:w-1/2">
          <img src={imagecomputer} alt="" class="md:absolute top-0 right-[50%]"/>
        </div>
        <div class="flex flex-col mt-16 mb-24 space-y-12 text-xl md:w-1/2 md:mb-60 md:text-left md:pl-16">
          <div>
            <h5 class=""> Quick Search</h5>
            <p class="max-w-md mx-auto text-center md:text-left text-grayishBlue">
              Easily search your snippets by content, category, web address, application and more
            </p>
          </div>
          <div>
            <h5 class=""> I Cloud Sync</h5>
            <p class="max-w-md mx-auto text-center md:text-left text-grayishBlue">
              Instantly saves and syncs snippets across all your devices
            </p>
          </div>
          <div>
            <h5 class=""> Completed History</h5>
            <p class="max-w-md mx-auto text-center md:text-left text-grayishBlue">
              Retrieve any snippets form the first moment you started using the app.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
}
export default Features;