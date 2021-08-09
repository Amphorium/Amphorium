<template>
  <footer class="footer" id="footer">
    <div class="page-shape">
      <div class="page-shape__item page-shape__item--one">
      </div>
      <div class="page-shape__item page-shape__item--two">
      </div>
      <div class="page-shape__item page-shape__item--three">
      </div>
      <div class="page-shape__item page-shape__item--four">
      </div>
      <div class="page-shape__item page-shape__item--five">
      </div>
      <div class="page-shape__item page-shape__item--six">
      </div>
    </div>
    <div class="container">
      <div class="footer__wrap">
        <div class="footer__content">
          <div class="my-title">
            <h2 @mousemove="textLighting" @mouseleave="resetTextLighting">Sign up for updates</h2>
          </div>
          <div id="mc_embed_signup">
            <form action="https://gmail.us5.list-manage.com/subscribe/post?u=a0d50844253560014af2f6314&amp;id=8d63ea082e" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate footer-form" target="_blank" novalidate>
                <div id="mc_embed_signup_scroll" class="big-input">
            <!-- <label for="mce-EMAIL">Subscribe</label> -->
                  <input type="email" value="" name="EMAIL" class="big-input__input" id="mce-EMAIL" placeholder="Your email" required>
                </div>
                <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_a0d50844253560014af2f6314_8d63ea082e" tabindex="-1" value=""></div>
                <div class="footer-form__btn">
                  <button class="my-btn"><span class="my-btn__arrow"></span> <span class="my-btn__content">Get updates</span></button>
                </div>
                <!-- <div class="clear">
                  <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
                  </div> -->
                
            </form>
          </div>
          <!-- <form action="" class="footer-form">
            <div class="big-input">
              <input type="text" class="big-input__input" placeholder="Your email">
            </div>
            <div class="footer-form__btn">
              <button class="my-btn"><span class="my-btn__arrow"></span> <span class="my-btn__content">Get updates</span></button>
            </div>
          </form> -->
          <div class="footer__text">
            <p>We won't share your email address or send you any spam.
            </p>
          </div>
          <div class="social">
            <ul class="social__list">
              <li class="social__item">
                <a target="_blank" href="https://t.me/Amphorium">
                  <img class="default" src="@/assets/img/social-1.svg" alt="">
                  <img class="hover" src="@/assets/img/social-1-hover.svg" alt="">
                </a>
              </li>
              <li class="social__item">
                <a target="_blank" href="https://twitter.com/Amphorium_io">
                  <img class="default" src="@/assets/img/social-2.svg" alt="">
                  <img class="hover" src="@/assets/img/social-2-hover.svg" alt="">
                </a>
              </li>
              <li class="social__item">
                <a target="_blank" href="#">
                  <img class="default" src="@/assets/img/social-3.svg" alt="">
                  <img class="hover" src="@/assets/img/social-3-hover.svg" alt=""></a>
              </li>
              <li class="social__item">
                <a target="_blank" href="https://www.reddit.com/r/Amphorium/">
                  <img class="default" src="@/assets/img/social-4.svg" alt="">
                  <img class="hover" src="@/assets/img/social-4-hover.svg" alt="">
                </a>
              </li>
              <li class="social__item">
                <a target="_blank" href="https://discord.com/channels/873621728490827896/873621728490827901">
                  <img class="default" src="@/assets/img/social-5.svg" alt="">
                  <img class="hover" src="@/assets/img/social-5-hover.svg" alt="">
                </a>
              </li>
            </ul>
          </div>
          <nav class="rules-nav">
            <ul class="rules-nav__list">
              <li class="rules-nav__item"><a href="https://amphorium.io/docs/terms_conditions" target="_blank">Terms and conditions</a></li>
              <li class="rules-nav__item"><a href="https://amphorium.io/docs/privacy_policy" target="_blank">Privacy policy</a></li>
              <li class="rules-nav__item"><a href="https://amphorium.io/docs/legal_opinion" target="_blank">Legal opinion</a></li>
              <li class="rules-nav__item"><a href="https://amphorium.io/docs/whitepaper" target="_blank">Whitepaper</a></li>
            </ul>
          </nav>
          <div class="copyright">
            <p>© {{ new Date().getFullYear()}} Amphorium, Inc.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'LandingFooter',
  methods: {
     textLighting(event){
      this.$emit('mousemove',event)
    },
    resetTextLighting(e){
     this.$emit('mouseleave',e)
    },
  }
}
</script>
