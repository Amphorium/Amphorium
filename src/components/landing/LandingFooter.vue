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
            <mailchimp-subscribe
                url="https://gmail.us5.list-manage.com/subscribe/post-json"
                :user-id="'a0d50844253560014af2f6314'"
                :list-id="'8d63ea082e'"
                @error="err = true;"
                @success="ok = true;"
            >
              <template v-slot="{ subscribe, setEmail, error }">
                <form @submit.prevent="subscribe" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate footer-form" target="_blank" novalidate>
                  <div id="mc_embed_signup_scroll" class="big-input">
                    <input type="email" class="big-input__input" id="mce-EMAIL" placeholder="Your email" required @input="setEmail($event.target.value)">
                  </div>
                  <SuccessModal @close="ok = false;" v-if="ok"/>
                  <ErrorModal @close="err = false;" v-if="err" :message="error.split('<')[0].replace(' to list Admin', '')"></ErrorModal>
                  <div class="footer-form__btn">
                    <button type="submit" class="my-btn"><span class="my-btn__arrow"></span> <span class="my-btn__content">Get updates</span></button>
                  </div>
                </form>
<!--                <form @submit.prevent="subscribe" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" novalidate class="form">-->
<!--                  <div class="default-input default-input&#45;&#45;padding" :class="{error: inputError}">-->
<!--                    <input-->
<!--                        id="mce-EMAIL"-->
<!--                        @focus="inputFocus = true"-->
<!--                        @blur="inputFocus = false"-->
<!--                        @input="setEmail($event.target.value)"-->
<!--                        type="email"-->
<!--                        class="input"-->
<!--                        placeholder="Enter your email"-->
<!--                    >-->
<!--                    <SuccessModal @close="ok = false;" v-if="ok"/>-->
<!--                    <ErrorModal @close="err = false;" v-if="err" :message="error"></ErrorModal>-->
<!--                    <p class="default-input__caption" v-if="inputFocus">Enter your email</p>-->
<!--                    <button type="submit" class="default-input__btn page-btn" id="mc-embedded-subscribe">Subscribe</button>-->
<!--                  </div>-->
<!--                </form>-->
              </template>
            </mailchimp-subscribe>
<!--            <form action="https://gmail.us5.list-manage.com/subscribe/post?u=a0d50844253560014af2f6314&amp;id=8d63ea082e" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate footer-form" target="_blank" novalidate>-->
<!--                <div id="mc_embed_signup_scroll" class="big-input">-->
<!--            &lt;!&ndash; <label for="mce-EMAIL">Subscribe</label> &ndash;&gt;-->
<!--                  <input type="email" value="" name="EMAIL" class="big-input__input" id="mce-EMAIL" placeholder="Your email" required>-->
<!--                </div>-->
<!--                &lt;!&ndash; real people should not fill this in and expect good things - do not remove this or risk form bot signups&ndash;&gt;-->
<!--                <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_a0d50844253560014af2f6314_8d63ea082e" tabindex="-1" value=""></div>-->
<!--                <div class="footer-form__btn">-->
<!--                  <button class="my-btn"><span class="my-btn__arrow"></span> <span class="my-btn__content">Get updates</span></button>-->
<!--                </div>-->
<!--                &lt;!&ndash; <div class="clear">-->
<!--                  <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">-->
<!--                  </div> &ndash;&gt;-->
<!--                -->
<!--            </form>-->
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
                <a target="_blank" href="https://medium.com/@Amphorium">
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
import MailchimpSubscribe from 'vue-mailchimp-subscribe'
import SuccessModal from "../Modals/SuccessModal";
import ErrorModal from "../Modals/ErrorModal";
export default {
  name: 'LandingFooter',
  data: () => ({
    err: false,
    ok: false
  }),
  methods: {
     textLighting(event){
      this.$emit('mousemove',event)
    },
    resetTextLighting(e){
     this.$emit('mouseleave',e)
    },
  },
  components: {
    ErrorModal,
    SuccessModal,
    MailchimpSubscribe
  }
}
</script>
