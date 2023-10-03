import iconBlacklist from '../../images/icon-blacklist.svg';
import iconText from '../../images/icon-text.svg';
import iconPreview from '../../images/icon-preview.svg';

const SuperCharge= function(){
    return <section id="supercharge">
    <div class="section-container my-20">
      <h3> Supercharge</h3>
      <p class="section-content mb-16">
        Allows you to track and organize everything you copy.
        Instantly access your clipboard on all your devices.
      </p>

      <div class="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-y-0 md:space-x-12">
        
        <div class="flex flex-col items-center space-y-5">
          <img src={iconBlacklist} alt="" class="mb-6"/>
          <h5>Create Blacklists</h5>
          <p class="max-w-md text-grayishBlue">
            Easily search your snippets by content, category, web address , application and more
          </p>
        </div>

        <div class="flex flex-col items-center space-y-5">
          <img src={iconText} alt="" class="mb-6"/>
          <h5>Icon Text</h5>
          <p class="max-w-md text-grayishBlue">
            Easily search your snippets by content, category, web address , application and more
          </p>
        </div>

        <div class="flex flex-col items-center space-y-5">
          <img src={iconPreview} alt="" class="mb-6"/>
          <h5>Sneek Preview</h5>
          <p class="max-w-md text-grayishBlue">
            Easily search your snippets by content, category, web address , application and more
          </p>
        </div>
      </div>
    </div>
  </section>
}

export default SuperCharge;