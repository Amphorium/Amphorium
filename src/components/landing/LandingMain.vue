<template>
  <div class="main">
    <section class="main-banner">
      <div class="main-banner-img">
        <div class="main-banner-img__item main-banner-img__item--one">
          <img src="@/assets/img/coin-1.svg" alt="">
        </div>
        <div class="main-banner-img__item main-banner-img__item--two">
          <img src="@/assets/img/coin-2.svg" alt="">
        </div>
        <div class="main-banner-img__item main-banner-img__item--three">
          <img src="@/assets/img/coin-3.svg" alt="">
        </div>
        <div class="main-banner-img__item main-banner-img__item--four">
          <img src="@/assets/img/coin-4.svg" alt="">
        </div>
      </div>
      <div class="container">
        <div class="main-banner__wrap">
          <div class="main-banner__info">
            <div class="main-banner__title">
              <h1>Lorem ipsum dolor sit amet, adipiscing elit nostrud </h1>
            </div>
            <ul class="my-list">
              <li class="my-list__item">
                <p><span>Duis aute irure dolor in reprehenderit</span></p>
                <p>In voluptate esse cillum dolore eu fugiat nulla pariatur</p>
              </li>
              <li class="my-list__item">
                <p><span>Irure dolor in reprehenderit in voluptate velit esse</span></p>
                <p>Cillum dolore eu fugiat nulla pariatur</p>
              </li>
              <li class="my-list__item">
                <p><span>Voluptate velit esse cillum dolore eu fugiat nulla </span></p>
                <p>In voluptate esse cillum dolore eu fugiat nulla pariatur</p>
              </li>
            </ul>
            <div class="main-banner__btn">
              <button class="my-btn">Get access</button>
            </div>
          </div>
          <div class="main-banner__img">
            <img src="@/assets/img/main-banner-img.svg" alt="">
          </div>
        </div>
      </div>
    </section>
    <section class="about">
      <div class="container">
        <div class="about__wrap">
          <div class="about__img">
            <img src="@/assets/img/earth.png" alt="">
          </div>
          <div class="about__content">
            <div class="my-title my-title--left">
              <h2>About Us</h2>
            </div>
            <div class="about__text">
              <p>Мы независимая компания специалистов работающая в различных крупных компаниях по транспортиртировке
                грузов различными путями
                а именно (Авиа,судно,грузо и прочие виды карго перевозок по миру)
              </p>
              <p>Мы не по наслышке знаем о часто возникающих
                проблемах этих компаний и постоянно потеряных посылок. И мы решили создать свою блокчейн компанию.
              </p>
              <p><span>В будущем каждый AMH токен это будет чьейто посылкой, которая будет записыватся в блокчейне, от куда и куда идёт.
с дополнительным ключем доступа вы сможете просматривать на каком этапе находится ваша посылка и её местоположение.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="calendar">
      <div class="calendar-slider-img">
        <div class="calendar-slider-img__item calendar-slider-img__item--one">
          <img src="@/assets/img/coin-calendar-1.svg" alt="">
        </div>
        <div class="calendar-slider-img__item calendar-slider-img__item--two">
          <img src="@/assets/img/coin-calendar-2.svg" alt="">
        </div>
        <div class="calendar-slider-img__item calendar-slider-img__item--three">
          <img src="@/assets/img/coin-calendar-3.svg" alt="">
        </div>
        <div class="calendar-slider-img__item calendar-slider-img__item--four">
          <img src="@/assets/img/coin-calendar-4.svg" alt="">
        </div>
      </div>
      <div class="calendar-slider">
        <div class="calendar-slide"
             v-for="(slide, slideIdx) in roadMap"
             :class="{'active': slide.focus}"
             :key="slideIdx"
        >
          <div class="container">
            <div class="calendar-slide__circle-bg"></div>
            <div class="calendar-slide__circle" @wheel.prevent="wheel">
              <div class="calendar-slide__text">
                <p><span>Roadmap</span>{{ slide.date.year }}</p>
              </div>
              <div class="calendar-slide__img" :class="'calendar-slide__img--' + (slideIdx+1)">
                <div class="calendar-info "
                     v-for="(item, idx) in quarters"
                     :class="['calendar-info--' + (idx+1), {'active': slideIdx === idx}]"
                     :key="idx"
                >

                  <button type="button"
                          class="calendar-info__point"
                          @click="toSlide(idx)"
                  ></button>
                  <div class="calendar-info__drop">
                    <div class="calendar-item">
                      <div class="calendar-item__wrap">
                        <div class="date">
                          <p>{{ item.date }}</p>
                        </div>
                        <div class="calendar-item__title">
                          <p>{{ item.title }}</p>
                        </div>
                        <div class="calendar-item__text">
                          <p>{{ item.text }} </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div class="calendar-slide__title">
              <p>{{ slide.date.month }} {{ slide.date.year }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="tokenomics">
      <div class="container">
        <div class="tokenomics__wrap">
          <div class="tokenomics__content">
            <div class="my-title my-title--left">
              <h2>Tokenomics <br>
                Amphorium</h2>
            </div>
            <ul class="tokenomics-list">
              <li class="tokenomics-list__head">
                <p>Group</p>
                <p>%</p>
                <p>Token AMH</p>
              </li>


              <li class="tokenomics-list__item"
                  v-for="(item,idx) in tokenInfo"
                  :key="idx"
                  @mouseover="changeStep(idx)"
              >
                <p>{{item.group}}</p>
                <p>{{item.percent}}</p>
                <p>{{item.amh}}</p>
              </li>
            </ul>
          </div>
          <div class="tokenomics__img">
            <img src="@/assets/img/schedule.svg" alt="">
            <div class="tokenomics-step" :class="`active--${activeStep}`">
              <p>{{tokenInfo[activeStep].group}} {{tokenInfo[activeStep].percent}}</p>
              <div class="tokenomics-step__marker"></div>
            </div>
          </div>
        </div>
        <div class="schedule-details">
          <div class="schedule-details__info">
            <div class="schedule-details__title">
              <p>Release
                Schedule
              </p>
            </div>
            <div class="schedule-details__text">
              <p>(not necessatily
                circulating)</p>
            </div>
          </div>
          <div class="schedule-details__img">
            <img src="@/assets/img/schedule-2.svg" alt="">
          </div>
          <div class="schedule-details-explanation">
            <ul class="schedule-details-explanation__list">
              <li><span class="marker marker--1"></span>
                <p class="schedule-details-explanation__title">Community: </p>
                <p class="schedule-details-explanation__text">Network Usage Rewards</p>
              </li>
              <li><span class="marker marker--2"></span>
                <p class="schedule-details-explanation__title">Community: </p>
                <p class="schedule-details-explanation__text">Treasuru, Developers, Partners,
                  liquidity Providers, and more</p>
              </li>
              <li><span class="marker marker--3"></span>
                <p class="schedule-details-explanation__title">Seed Investors: </p>
              </li>
              <li><span class="marker marker--3"></span>
                <p class="schedule-details-explanation__title">Team</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="news">
      <div class="container">
        <div class="my-title">
          <h2>Our News</h2>
        </div>
        <div class="news__wrap">
          <div class="news-card">
            <div class="news-card__info">
              <div class="date">
                <p>21 april, 2022</p>
              </div>
              <div class="news-card__title">
                <p>Lorem ipsum dolor sit
                  amet, adipiscing elit</p>
              </div>
              <div class="news-card__text">
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. </p>
              </div>
              <div class="news-card__link">
                <a href="#" class="more">
                  <span class="more__text">Read more</span>
                </a>
              </div>
            </div>
          </div>
          <div class="news-card">
            <div class="news-card__info">
              <div class="date">
                <p>21 april, 2022</p>
              </div>
              <div class="news-card__title">
                <p>Lorem ipsum dolor sit
                  amet, adipiscing elit</p>
              </div>
              <div class="news-card__text">
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. </p>
              </div>
              <div class="news-card__link">
                <a href="#" class="more">
                  <span class="more__text">Read more</span>
                </a>
              </div>
            </div>
          </div>
          <div class="news-card">
            <div class="news-card__info">
              <div class="date">
                <p>21 april, 2022</p>
              </div>
              <div class="news-card__title">
                <p>Lorem ipsum dolor sit
                  amet, adipiscing elit</p>
              </div>
              <div class="news-card__text">
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. </p>
              </div>
              <div class="news-card__link">
                <a href="#" class="more">
                  <span class="more__text">Read more</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="news__link">
          <a href="#" class="read-all"><span>Read All News</span></a>
        </div>
      </div>
    </section>
    <section class="faq">
      <div class="container">
        <div class="my-title my-title--left">
          <h2>FAQ</h2>
        </div>
        <div class="faq__wrap">
          <div class="faq__content">
            <div class="faq-item">
              <button class="faq-item__top">Dolor sit amet, adipiscing elit nostrud</button>
              <div class="faq-item__content">
                <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur.
                </p>
                <p> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.</p>
              </div>
            </div>
            <div class="faq-item active">
              <button class="faq-item__top">Dolor sit amet, adipiscing elit nostrud</button>
              <div class="faq-item__content">
                <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur.
                </p>
                <p> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.</p>
              </div>
            </div>
            <div class="faq-item">
              <button class="faq-item__top">Dolor sit amet, adipiscing elit nostrud</button>
              <div class="faq-item__content">
                <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur.
                </p>
                <p> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.</p>
              </div>
            </div>
            <div class="faq-item">
              <button class="faq-item__top">Dolor sit amet, adipiscing elit nostrud</button>
              <div class="faq-item__content">
                <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur.
                </p>
                <p> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.</p>
              </div>
            </div>
            <div class="faq-item">
              <button class="faq-item__top">Dolor sit amet, adipiscing elit nostrud</button>
              <div class="faq-item__content">
                <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur.
                </p>
                <p> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.</p>
              </div>
            </div>
            <div class="faq-item">
              <button class="faq-item__top">Dolor sit amet, adipiscing elit nostrud</button>
              <div class="faq-item__content">
                <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur.
                </p>
                <p> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.</p>
              </div>
            </div>
          </div>
          <div class="faq__sidebar">
            <div class="faq-sidebar">
              <div class="faq-sidebar__content">
                <div class="faq-sidebar__img">
                  <img src="@/assets/img/faq-img.svg" alt="">
                </div>
                <div class="faq-sidebar__title">
                  <p>Still have
                    questions?</p>
                </div>
                <div class="faq-sidebar__text">
                  <p>Leave your contacts and we will answer them</p>
                </div>
                <div class="faq-sidebar__btn">
                  <button class="my-btn">Ask a Question</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="partners">
      <div class="container">
        <div class="my-title">
          <h2>Our Partners</h2>
        </div>
        <div class="partners-grid">
          <a href="#" class="partners-item">
            <img src="@/assets/img/partner-1.svg" alt="">
          </a>
          <a href="#" class="partners-item">
            <img src="@/assets/img/partner-2.svg" alt="">
          </a>
          <a href="#" class="partners-item">
            <img src="@/assets/img/partner-3.svg" alt="">
          </a>
          <a href="#" class="partners-item">
            <img src="@/assets/img/partner-4.svg" alt="">
          </a>
          <a href="#" class="partners-item">
            <img src="@/assets/img/partner-5.svg" alt="">
          </a>
          <a href="#" class="partners-item">
            <img src="@/assets/img/partner-5.svg" alt="">
          </a>
          <a href="#" class="partners-item">
            <img src="@/assets/img/partner-5.svg" alt="">
          </a>
          <a href="#" class="partners-item">
            <img src="@/assets/img/partner-2.svg" alt="">
          </a>
          <a href="#" class="partners-item">
            <img src="@/assets/img/partner-1.svg" alt="">
          </a>
          <a href="#" class="partners-item">
            <img src="@/assets/img/partner-3.svg" alt="">
          </a>
          <a href="#" class="partners-item">
            <img src="@/assets/img/partner-1.svg" alt="">
          </a>
          <a href="#" class="partners-item">
            <img src="@/assets/img/partner-2.svg" alt="">
          </a>
          <a href="#" class="partners-item">
            <img src="@/assets/img/partner-3.svg" alt="">
          </a>
          <a href="#" class="partners-item">
            <img src="@/assets/img/partner-4.svg" alt="">
          </a>
          <a href="#" class="partners-item">
            <img src="@/assets/img/partner-5.svg" alt="">
          </a>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'LandingMain',

  data() {
    return {
      initialCounter: 0,
      roadMap: [
        {
          date: {
            month: 'april',
            year: '2022'
          },
          focus: false,
        },
        {
          date: {
            month: 'september',
            year: '2023'
          },
          focus: false,
        },
        {
          date: {
            month: 'july',
            year: '2024'
          },
          focus: false,
        },
        {
          date: {
            month: 'october',
            year: '2025'
          },
          focus: false,
        }
      ],
      quarters: [
        {
          date: 'april 2022',
          title: 'Lorem ipsum dolor sit amet, adipiscing elit',
          text: 'Lorem ipsum dolor sit amet, adipiscing elit Lorem ipsum dolor sit amet, adipiscing elit'
        },
        {
          date: 'september 2023',
          title: 'Lorem ipsum dolor sit amet, adipiscing elit',
          text: 'Lorem ipsum dolor sit amet, adipiscing elit Lorem ipsum dolor sit amet, adipiscing elit'
        },
        {
          date: 'july 2024',
          title: 'Lorem ipsum dolor sit amet, adipiscing elit',
          text: 'Lorem ipsum dolor sit amet, adipiscing elit Lorem ipsum dolor sit amet, adipiscing elit'
        },
        {
          date: 'october 2025',
          title: 'Lorem ipsum dolor sit amet, adipiscing elit',
          text: 'Lorem ipsum dolor sit amet, adipiscing elit Lorem ipsum dolor sit amet, adipiscing elit'
        }
      ],
      activeStep: 0,
      tokenInfo: [
        {
          group: 'Foundation Team',
          percent: '10%',
          amh: '100 000 000'
        },
        {
          group: 'Seed',
          percent: '10%',
          amh: '100 000 000'
        },
        {
          group: 'Private sale 1 (A)',
          percent: '6.5 %',
          amh: '65 000 000'
        },
        {
          group: 'Private sale 2 (B)',
          percent: '10%',
          amh: '100 000 000'
        },
        {
          group: 'Private sale 3 (C)',
          percent: '3.5%',
          amh: '35 000 000'
        },
        {
          group: 'Advisors',
          percent: '2%',
          amh: '20 000 000'
        },
        {
          group: 'Reserve',
          percent: '5%',
          amh: '50 000 000'
        },
        {
          group: 'Staking revards',
          percent: '3%',
          amh: '30 000 000'
        },
        {
          group: 'Ecosystem/ fire',
          percent: '50%',
          amh: '500 000 000'
        },
      ]
    }
  },
  methods: {
    nextSlide() {
      if (this.initialCounter === this.roadMap.length - 1) return false
      this.initialCounter++;
      this.setActiveSlide();
    },
    prevSlide() {
      if (this.initialCounter === 0) return false
      this.initialCounter--;
      this.setActiveSlide();
    },
    toSlide(idx) {
      this.initialCounter = idx;
      this.setActiveSlide();
    },
    setActiveSlide() {
      this.roadMap.forEach((item, idx) => {
        item.focus = idx === this.initialCounter;
      })
    },
    wheel(e) {
      if (e.deltaY < 0) {
        this.prevSlide();
      } else {
        this.nextSlide();
      }
    },
    changeStep(idx) {
      this.activeStep = idx;
    }
  },
  mounted() {
    this.setActiveSlide();
  }
}
</script>
