<template>
  <div class="main">
    <div class="side-menu" id="side-menu">
      <div class="social">
        <ul class="social__list">
          <li class="social__item">
            <a href="#">
              <img class="default" src="@/assets/img/social-1.svg" alt="">
              <img class="hover" src="@/assets/img/social-1-hover.svg" alt="">
              <img class="dark" src="@/assets/img/social-1-dark.svg" alt="">
            </a>
          </li>
          <li class="social__item">
            <a href="#">
              <img class="default" src="@/assets/img/social-2.svg" alt="">
              <img class="hover" src="@/assets/img/social-2-hover.svg" alt="">
              <img class="dark" src="@/assets/img/social-2-dark.svg" alt="">
            </a>
          </li>
          <li class="social__item">
            <a href="#"><img class="default" src="@/assets/img/social-3.svg" alt="">
              <img class="hover" src="@/assets/img/social-3-hover.svg" alt="">
              <img class="dark" src="@/assets/img/social-3-dark.svg" alt="">
            </a>
          </li>
          <li class="social__item">
            <a href="#">
              <img class="default" src="@/assets/img/social-4.svg" alt="">
              <img class="hover" src="@/assets/img/social-4-hover.svg" alt="">
              <img class="dark" src="@/assets/img/social-4-dark.svg" alt="">
            </a>
          </li>
          <li class="social__item">
            <a href="#">
              <img class="default" src="@/assets/img/social-5.svg" alt="">
              <img class="hover" src="@/assets/img/social-5-hover.svg" alt="">
              <img class="dark" src="@/assets/img/social-5-dark.svg" alt="">
            </a>
          </li>
        </ul>
      </div>
        <a href="#header" class="up-btn">
          <span>ВВЕРХ</span>
          <img class="default" src="@/assets/img/up-btn.svg" alt="">
          <img class="hover" src="@/assets/img/up-btn-hover.svg" alt="">
        </a>
    </div>
    <section class="main-banner">
      <div class="main-banner-img">
        <div class="main-banner-img__item main-banner-img__item--one flying-el-reverse">
          <img src="@/assets/img/coin-1.svg" alt="">
        </div>
        <div class="main-banner-img__item main-banner-img__item--two flying-el">
          <img src="@/assets/img/coin-2.svg" alt="">
        </div>
        <div class="main-banner-img__item main-banner-img__item--three flying-el">
          <img src="@/assets/img/coin-3.svg" alt="">
        </div>
        <div class="main-banner-img__item main-banner-img__item--four flying-el-reverse">
          <img src="@/assets/img/coin-4.svg" alt="">
        </div>
      </div>
      <div class="container">
        <div class="main-banner__wrap">
          <div class="main-banner__info">
            <div class="main-banner__title">
              <h1 @mousemove="textLighting" @mouseleave="resetTextLighting">Lorem ipsum dolor
                sit amet, adipiscing</h1>
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
              <button class="my-btn"><span class="my-btn__arrow"></span> <span class="my-btn__content">Get updates</span></button>
            </div>
          </div>
          <div id="main-img">

              <div :class="`main-banner__img main-banner__img--${img}`"
               v-for="img in 19"
               :key="img"
               :style="{visibility: img===1?'visible':'hidden'}"
               >
                 <img 
                 :src="require(`@/assets/img/amphor/${img}.png`)" 
                 alt="">
              </div>

          </div>           
          <!-- </div> -->
        </div>
      </div>
    </section>
    <section class="about">
      <div class="container">
        <div class="about__wrap">
          <div class="about__img" >
            <div 
            :class="`about__img__img about__img__img--${img}`" 
            v-for="img in 20" 
            :key="img"
            :style="{visibility: img===1?'visible':'hidden'}">
              <img :src="require(`@/assets/img/earth/${img}.png`)" alt="">
            </div>
          </div>
          <div class="about__content">
            <div class="my-title my-title--left" data-aos="fade-up"
                 data-aos-duration="1500"
                 >
              <h2
               @mousemove="textLighting" @mouseleave="resetTextLighting">About Us</h2>
            </div>
            <div class="about__text" data-aos="fade-up"
                 data-aos-duration="1500">
              <p>We are an independent company working in various large companies for the transportation of goods by various ways (Aviation, shipping, cargo and other types of cargo transportation around the world)</p>
              <p>We are aware of the frequent problems of these companies and the ever-lost parcels. And we decided to create our own blockchain company.</p>
              <p><span>In the future, each of AMH token will be someone's parcel, which will be on the blockchain (from where and where the parcel goes). With an additional access key, you will be able to view at what stage your parcel and its location are located.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="calendar" data-aos="fade"
             data-aos-duration="1500">
      <div id="cont" data-pct="100" ref="cont" @wheel.prevent="wheel" >
        <svg @load="slider()" id="svg" width="200" height="200" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
          <circle ref="barBg" r="275" cx="282.5" cy="282.5" fill="transparent" stroke-dasharray="0" stroke-dashoffset="0"></circle>
          <!-- <circle id="bar" ref="bar" r="48%" cx="50%" cy="50%" fill="transparent" stroke-dasharray="1728" stroke-dashoffset="0"></circle> -->
          <circle id="bar" ref="bar" r="275" cx="282.5" cy="282.5" fill="transparent" stroke-dasharray="1728" stroke-dashoffset="0"></circle>
          <!-- <div class="year"  >
            {{point.date.year}}
          </div> -->
        
        </svg>
        <svg ref="point" v-for="(point,index) of roadMap" :key="index+'road'" class="point-circle" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="20" fill="white"/>
          <circle cx="20.0003" cy="20" r="9.14286" fill="#FAA091"/>
        </svg>
          <p class="roadmap-title">Roadmap</p>
          <div class="year" v-for="(point,index) of roadMap" :key="index+'year'">
            <p v-if="point.focus">{{point.date.year}}</p>
          </div>
          <div class="calendar-slide__btn">
              <span class="scroll-btn">
                <span class="scroll-btn__circle"></span>
                <span class="scroll-btn__circle"></span>
                <span class="scroll-btn__circle"></span>
                <span class="scroll-btn__arrow"></span>
              </span>
           </div>
           <div class="slider-content"
           v-for="(road,index) of roadMap" :key="index+'roadM'">

            <div class="calendar-info__drop"
            :class="{active: road.focus}">
                <div class="calendar-item">
                  <div class="calendar-item__wrap">
                    <div class="date">
                      <p>{{ quarters[index].date }}</p>
                    </div>
                    <div class="calendar-item__title">
                      <p>{{ quarters[index].title }}</p>
                    </div>
                    <div class="calendar-item__text">
                      <p>{{ quarters[index].text }} </p>
                    </div>
                  </div>
                </div>
              </div>
           </div>
            
        <!-- <svg ref="point" class="point-circle" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="20" fill="white"/>
          <circle cx="20.0003" cy="20" r="9.14286" fill="#FAA091"/>
        </svg>
        <svg ref="point" class="point-circle" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="20" fill="white"/>
          <circle cx="20.0003" cy="20" r="9.14286" fill="#FAA091"/>
        </svg>
        <svg ref="point" class="point-circle" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="20" fill="white"/>
          <circle cx="20.0003" cy="20" r="9.14286" fill="#FAA091"/>
        </svg> -->

      </div>
      <!-- <label for="percent">Type a percent!</label>
      <input id="percent" name="percent" ref="percent"> -->
    </section>
    <section class="calendar" data-aos="fade"
             data-aos-duration="1500">
      <!-- <div class="calendar-slider-img">
        <div class="calendar-slider-img__item calendar-slider-img__item--one flying-el-reverse">
          <img src="@/assets/img/coin-calendar-1.svg" alt="">
        </div>
        <div class="calendar-slider-img__item calendar-slider-img__item--two flying-el">
          <img src="@/assets/img/coin-calendar-2.svg" alt="">
        </div>
        <div class="calendar-slider-img__item calendar-slider-img__item--three flying-el-reverse">
          <img src="@/assets/img/coin-calendar-3.svg" alt="">
        </div>
        <div class="calendar-slider-img__item calendar-slider-img__item--four flying-el-reverse">
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
                  <div class="calendar-info__drop" ref="title">
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
            <div class="calendar-slide__btn">
              <span class="scroll-btn">
                <span class="scroll-btn__circle"></span>
                <span class="scroll-btn__circle"></span>
                <span class="scroll-btn__circle"></span>
                <span class="scroll-btn__arrow"></span>
              </span>
            </div>
            <div class="calendar-mobile-drop">
              <div class="calendar-item">
                <div class="calendar-item__wrap">
                  <div class="date">
                    <p>{{roadMap[initialCounter].date.month}} , {{roadMap[initialCounter].date.year}}</p>
                  </div>
                  <div class="calendar-item__title">
                    <p>{{quarters[initialCounter].title}}</p>
                  </div>
                  <div class="calendar-item__text">
                    <p>{{quarters[initialCounter].text}}</p>
                  </div>
                </div>
              </div>
              <div class="calendar-mobile-drop__btns">
                <button @click="prevSlide" class="calendar-btn calendar-btn--prev">Prev</button>
                <button @click="nextSlide" class="calendar-btn calendar-btn--next">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </section>
    <div class="logo-section" ref="logoSection" style="text-align: center; position:relative" >
      <img style="position:absolute" src="@/assets/img/logo-icon1.svg" alt="">
      <!-- <svg width="81" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin none" x="0px" y="0px">
      <path shape-rendering="geometricPrecision" fill-rule="evenodd" clip-rule="evenodd" d="M40.9375 80.5817C63.0289 80.5817 80.9375 62.6731 80.9375 40.5817C80.9375 18.4903 63.0289 0.581665 40.9375 0.581665C18.8461 0.581665 0.9375 18.4903 0.9375 40.5817C0.9375 62.6731 18.8461 80.5817 40.9375 80.5817ZM49.3375 23.5817L47.3699 28.6817H34.5051L32.5375 23.5817H49.3375ZM54.9375 43.0973L47.3699 29.815H34.5051L26.9375 43.0973H54.9375ZM54.9375 44.2993L47.3699 57.5817H34.5051L26.9375 44.2993H54.9375ZM52.5532 35.7911L49.2486 30.0258L54.9321 30.0498L52.5532 35.7911ZM29.3244 35.8058L32.6373 30.0261L26.9395 30.0501L29.3244 35.8058Z" fill="white"/>
      </svg> -->
    </div>
    <div class="white-background" id="white-section" >
      <section class="tokenomics"  ref="nextSection">
        <div class="container">
          <div class="tokenomics__wrap">
            <div class="tokenomics__content">
              <div class="my-title my-title--left" data-aos="fade-up"
                   data-aos-duration="1500">
                <h2>Tokenomics <br>
                  Amphorium</h2>
              </div>
              <ul class="tokenomics-list" data-aos="fade-up"
                  data-aos-duration="1500">
                <li class="tokenomics-list__head">
                  <p>Group</p>
                  <p>%</p>
                  <p>Token AMH</p>
                </li>
                <li class="tokenomics-list__item"
                    v-for="(item,idx) in tokenInfo"
                    :class="{'active':idx===activeStep}"
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
          <!-- <div class="schedule-details">
            <div class="schedule-details__info">
              <div class="schedule-details__title" data-aos="fade-up"
                   data-aos-duration="1500">
                <p>Release
                  Schedule
                </p>
              </div>
              <div class="schedule-details__text" data-aos="fade-up"
                   data-aos-duration="1500">
                <p>(not necessatily
                  circulating)</p>
              </div>
            </div>
            <div class="schedule-details__img">
              <img src="@/assets/img/schedule-2.svg" alt="">
            </div>
            <div class="schedule-details-explanation">
              <ul class="schedule-details-explanation__list" data-aos="fade-up"
                  data-aos-duration="1500">
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
          </div> -->
          <div class="token-emission">
            <div class="token-emission__info">
              <div class="schedule-details__title" data-aos="fade-up"
                   data-aos-duration="1500">
                <p>Token
                  Emission
                </p>
              </div>
              <ul class="token-filter" data-aos="fade-up"
                  data-aos-duration="1500">
               <li>
                 <span class="small-marker small-marker--1"></span>
                 <p>Ecosystem</p>
               </li>
                <li>
                  <span class="small-marker small-marker--2"></span>
                  <p>Stacking</p>
                </li>
                <li>
                  <span class="small-marker small-marker--3"></span>
                  <p>Reserve</p>
                </li>
                <li>
                  <span class="small-marker small-marker--4"></span>
                  <p>Advisors</p>
                </li>
                <li>
                  <span class="small-marker small-marker--5"></span>
                  <p>Team</p>
                </li>
                <li>
                  <span class="small-marker small-marker--6"></span>
                  <p>Public Sale</p>
                </li>
                <li>
                  <span class="small-marker small-marker--7"></span>
                  <p>Private Sale 2</p>
                </li>
                <li>
                  <span class="small-marker small-marker--8"></span>
                  <p>Private Sale</p>
                </li>
                <li>
                  <span class="small-marker small-marker--9"></span>
                  <p>Seed</p>
                </li>
              </ul>
            </div>
           <div class="token-emission__img">
             <img src="@/assets/img/graph.png" alt="">
           </div>
          </div>
        </div>
      </section>
        <div class="logo-section" ref="logoSectionTwo" style="position:relative">
          <!-- <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40" cy="40" r="40" fill="#15121D"/>
            <path d="M46.4324 28.1H33.5676L31.6 23H48.4L46.4324 28.1Z" fill="white"/>
            <path d="M46.4324 29.2333H33.5676L26 42.5157H54L46.4324 29.2333Z" fill="white"/>
            <path d="M33.5676 57H46.4324L54 43.7177H26L33.5676 57Z" fill="white"/>
            <path d="M51.6157 35.2094L48.3111 29.4442L53.9946 29.4681L51.6157 35.2094Z" fill="white"/>
            <path d="M31.6998 29.4445L28.3869 35.2241L26.002 29.4684L31.6998 29.4445Z" fill="white"/>
          </svg> -->
          <img style="position:absolute" src="@/assets/img/logo-icon2.svg" alt="">
        </div>
    </div>
    <section class="history" ref="nextSectionTwo">
      <div class="history-bg">
        <img src="@/assets/img/map-img.png" alt="">
      </div>
      <div class="container">
        <div class="my-title" data-aos="fade-up"
             data-aos-duration="1500">
          <h2>Fundraising History</h2>
        </div>
        <div class="history__wrap" data-aos="fade"
             data-aos-duration="1500">
          <div class="history-card">
            <span class="history-marker"></span>
            <div class="history-card__wrap">
              <div class="date">
                <p>July 2020</p>
              </div>
              <div class="history-card__title">
                <p>Dolor in reprehenderit
                  involuptate</p>
              </div>
              <div class="history-card__text">
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
          </div>
          <div class="history-card">
            <span class="history-marker"></span>
            <div class="history-card__wrap">
              <div class="date">
                <p>July 2020</p>
              </div>
              <div class="history-card__title">
                <p>Duis aute irure dolor
                  in reprehenderit in
                  voluptate</p>
              </div>
              <div class="history-card__text">
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
          </div>
          <div class="history-card">
            <span class="history-marker"></span>
            <div class="history-card__wrap">
              <div class="date">
                <p>July 2020</p>
              </div>
              <div class="history-card__title">
                <p>Duis aute irure dolor
                  in reprehenderit in
                  voluptate</p>
              </div>
              <div class="history-card__text">
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="news">
      <div class="container">
        <div class="my-title" data-aos="fade-up"
             data-aos-duration="1500" 
           >
          <h2 @mousemove="textLighting" @mouseleave="resetTextLighting">Our News</h2>
        </div>

        <div class="news__wrap">
          <swiper
            :slides-per-view="1"
            :space-between="150"
            :breakpoints="swiperOptions.breakpoints"
          >
            <swiper-slide v-for="(n,index) in news" :key="index">
            <div class="news-card" >
                  <div class="news-card__info">
                    <div class="date">
                      <p>{{n.date}}</p>
                    </div>
                    <div class="news-card__title">
                      <p
                       @mousemove="textLighting"
                       @mouseleave="resetTextLighting">
                       {{n.title}}
                       </p>
                    </div>
                    <div class="news-card__text">
                      <p>{{n.text}}</p>
                    </div>
                    <div class="news-card__link">
                      <a href="#" class="more">
                        <span class="more__text">Read more</span>
                      </a>
                    </div>
                  </div>
                </div>
            </swiper-slide>
          </swiper>
          <!-- <vue-scroll :ops="ops"> -->
          <div class="news__wrap-content">
           
          </div>
          <!-- </vue-scroll> -->
        </div>
        <div class="news__link" data-aos="fade-up"
             data-aos-duration="1500">
          <a href="#" class="read-all"><span 
            @mousemove="textLighting"
            @mouseleave="resetTextLighting"
            >Read All News
            </span>
          </a>
        </div>
      </div>
    </section>
    <section class="facts">
      <div class="container">
        <div class="my-title" data-aos="fade-up"
             data-aos-duration="1500">
          <h2 @mousemove="textLighting" @mouseleave="resetTextLighting">Duis aute irure dolor in
            reprehenderit in voluptate</h2>
        </div>
        <div class="facts__subtitle" data-aos="fade-up"
             data-aos-duration="1500">
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
        <div class="facts__wrap" data-aos="fade"
             data-aos-duration="1500">
          <div class="facts-card">
            <div class="facts-card__wrap">
              <div class="facts-card__img">
                <img src="@/assets/img/facts-img.svg" alt="">
              </div>
              <div class="facts-card__title">
                <p>Voluptate velit esse</p>
              </div>
              <div class="facts-card__text">
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. </p>
              </div>
              <a href="#" class="more">
                <span class="more__text">Read more</span>
              </a>
            </div>

          </div>
          <div class="facts-card">
            <div class="facts-card__wrap">
              <div class="facts-card__img">
                <img src="@/assets/img/facts-img.svg" alt="">
              </div>
              <div class="facts-card__title">
                <p>Voluptate velit esse</p>
              </div>
              <div class="facts-card__text">
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. </p>
              </div>
              <a href="#" class="more">
                <span class="more__text">Read more</span>
              </a>
            </div>

          </div>
          <div class="facts-card">
            <div class="facts-card__wrap">
              <div class="facts-card__img">
                <img src="@/assets/img/facts-img.svg" alt="">
              </div>
              <div class="facts-card__title">
                <p>Voluptate velit esse</p>
              </div>
              <div class="facts-card__text">
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. </p>
              </div>
              <a href="#" class="more">
                <span class="more__text">Read more</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
    <section class="partners">
      <div class="container">
        <div class="my-title" data-aos="fade-up"
             data-aos-duration="1500">
          <h2 style="width:100%" @mousemove="textLighting" @mouseleave="resetTextLighting">Our Partners</h2>
        </div>
        <div class="partners-grid" data-aos="fade"
             data-aos-duration="1500">
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
    <section class="audit">
      <div class="container">
        <div class="audit__wrap">
          <div class="audit__info">
            <div class="my-title my-title--left" data-aos="fade-up"
                 data-aos-duration="1500">
              <h2 @mousemove="textLighting" @mouseleave="resetTextLighting">Audit</h2>
            </div>
            <div class="audit__subtitle" data-aos="fade-up"
                 data-aos-duration="1500">
              <p>Two of the most prominent leaders in blockchain security have lent their expertise to audit $CQT. We have been able to fix all high - level issues and acknowledged that $CQT’s smart contract contains the Centralization of Power (“COP”).
              </p>
              <p>As of Oct 22, 2020 we are Quantstamp verified.
                As of Oct 6, 2020 we are CertiK Very High Confidence security level.</p>
            </div>
            <div class="audit__links" data-aos="fade-up"
                 data-aos-duration="1500">
              <a class="audit-link" href="#"><img src="@/assets/img/audit-link.png" alt=""></a>
              <a class="audit-link" href="#"><img src="@/assets/img/audit-lnk-2.svg" alt=""></a>
            </div>
          </div>
          <div class="audit__content">
            <div class="audit-grid" data-aos="fade"
                 data-aos-duration="1500">
              <div class="audit-grid__item">
                <div class="audit-card">
                  <div class="audit-card__wrap">
                    <div class="audit-card__img">
                      <img src="@/assets/img/audit-img.svg" alt="">
                    </div>
                    <div class="audit-card__title"><p>Lorem ipsum
                      dolor sit amet</p></div>
                    <div class="audit-card__text">
                      <p>(10mB, pdf)</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="audit-grid__item">
                <div class="audit-card">
                  <div class="audit-card__wrap">
                    <div class="audit-card__img">
                      <img src="@/assets/img/audit-img.svg" alt="">
                    </div>
                    <div class="audit-card__title"><p>Lorem ipsum
                      dolor sit amet</p></div>
                    <div class="audit-card__text">
                      <p>(10mB, pdf)</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="audit-grid__item">
                <div class="audit-card">
                  <div class="audit-card__wrap">
                    <div class="audit-card__img">
                      <img src="@/assets/img/audit-img.svg" alt="">
                    </div>
                    <div class="audit-card__title"><p>Lorem ipsum
                      dolor sit amet</p></div>
                    <div class="audit-card__text">
                      <p>(10mB, pdf)</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="audit-grid__item">
                <div class="audit-card">
                  <div class="audit-card__wrap">
                    <div class="audit-card__img">
                      <img src="@/assets/img/audit-img.svg" alt="">
                    </div>
                    <div class="audit-card__title"><p>Lorem ipsum
                      dolor sit amet</p></div>
                    <div class="audit-card__text">
                      <p>(10mB, pdf)</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="audit-grid__item">
                <div class="audit-card">
                  <div class="audit-card__wrap">
                    <div class="audit-card__img">
                      <img src="@/assets/img/audit-img.svg" alt="">
                    </div>
                    <div class="audit-card__title"><p>Lorem ipsum
                      dolor sit amet</p></div>
                    <div class="audit-card__text">
                      <p>(10mB, pdf)</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="audit-grid__item">
                <div class="audit-card">
                  <div class="audit-card__wrap">
                    <div class="audit-card__img">
                      <img src="@/assets/img/audit-img.svg" alt="">
                    </div>
                    <div class="audit-card__title"><p>Lorem ipsum
                      dolor sit amet</p></div>
                    <div class="audit-card__text">
                      <p>(10mB, pdf)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
<!--    <section class="faq">-->
<!--      <div class="container">-->
<!--        <div class="my-title my-title&#45;&#45;left">-->
<!--          <h2>FAQ</h2>-->
<!--        </div>-->
<!--        <div class="faq__wrap">-->
<!--          <div class="faq__content">-->
<!--            <div v-for="(item, index) in faq" class="faq-item" :class="{active: item.isShow}" :key="index">-->
<!--              <button class="faq-item__top" @click="item.isShow = !item.isShow">{{item.title}}</button>-->
<!--              <div class="faq-item__content">-->
<!--                <p>-->
<!--                  {{item.text1}}-->
<!--                </p>-->
<!--                <p>{{item.text2}}</p>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="faq__sidebar">-->
<!--            <div class="faq-sidebar">-->
<!--              <div class="faq-sidebar__content">-->
<!--                <div class="faq-sidebar__img">-->
<!--                  <img src="@/assets/img/faq-img.svg" alt="">-->
<!--                </div>-->
<!--                <div class="faq-sidebar__title">-->
<!--                  <p>Still have-->
<!--                    questions?</p>-->
<!--                </div>-->
<!--                <div class="faq-sidebar__text">-->
<!--                  <p>Leave your contacts and we will answer them</p>-->
<!--                </div>-->
<!--                <div class="faq-sidebar__btn">-->
<!--                  <button class="my-btn">Ask a Question</button>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </section>-->


    <div class="cursor">
      <div class="cursor__point"></div>
      <div class="cursor__point"></div>
      <div class="cursor__point"></div>
      <div class="cursor__point"></div>
    </div>
    <!-- <div class="title-shape"></div> -->
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from '@mscalessio/vue2-swiper';
import 'swiper/swiper.scss';
export default {
  name: 'LandingMain',
  components: {
      Swiper,
      SwiperSlide,
  },
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
        },
        {
          date: {
            month: 'month',
            year: '2026'
          },
          focus: false,
        },
        {
          date: {
            month: 'july',
            year: '2027'
          },
          focus: false,
        },
         {
          date: {
            month: 'july',
            year: '2028'
          },
          focus: false,
        },
          {
          date: {
            month: 'october',
            year: '2028'
          },
          focus: false,
        },
          {
          date: {
            month: 'july',
            year: '2029'
          },
          focus: false,
        },
        {
        date: {
          month: 'september',
          year: '2029'
        },
        focus: false,
      },
        {
        date: {
          month: 'july',
          year: '2030'
        },
        focus: false,
      },
      ],
      faq: [
        {
          title: 'Lorem ipsum dolor sit amet, adipiscing elit',
          text1: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          text2: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          isShow: false
        },
        {
          title: 'Lorem ipsum dolor sit amet, adipiscing elit',
          text1: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          text2: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          isShow: false
        },
        {
          title: 'Lorem ipsum dolor sit amet, adipiscing elit',
          text1: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          text2: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          isShow: false
        },
        {
          title: 'Lorem ipsum dolor sit amet, adipiscing elit',
          text1: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          text2: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          isShow: false
        },
        {
          title: 'Lorem ipsum dolor sit amet, adipiscing elit',
          text1: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          text2: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          isShow: false
        }
      ],
      quarters: [
        {
          date: 'april 2022',
          title: '1Lorem ipsum dolor sit amet, adipiscing elit',
          text: 'Lorem ipsum dolor sit amet, adipiscing elit Lorem ipsum dolor sit amet, adipiscing elit'
        },
        {
          date: 'september 2023',
          title: '2Lorem ipsum dolor sit amet, adipiscing elit',
          text: 'Lorem ipsum dolor sit amet, adipiscing elit Lorem ipsum dolor sit amet, adipiscing elit'
        },
        {
          date: 'july 2024',
          title: '3Lorem ipsum dolor sit amet, adipiscing elit',
          text: 'Lorem ipsum dolor sit amet, adipiscing elit Lorem ipsum dolor sit amet, adipiscing elit'
        },
        {
          date: 'october 2025',
          title: '4Lorem ipsum dolor sit amet, adipiscing elit',
          text: 'Lorem ipsum dolor sit amet, adipiscing elit Lorem ipsum dolor sit amet, adipiscing elit'
        },
        {
          date: 'april 2026',
          title: '5Lorem ipsum dolor sit amet, adipiscing elit',
          text: 'Lorem ipsum dolor sit amet, adipiscing elit Lorem ipsum dolor sit amet, adipiscing elit'
        },
        {
          date: 'july 2027',
          title: '6Lorem ipsum dolor sit amet, adipiscing elit',
          text: 'Lorem ipsum dolor sit amet, adipiscing elit Lorem ipsum dolor sit amet, adipiscing elit'
        },
        {
          date: 'july 2024',
          title: '7Lorem ipsum dolor sit amet, adipiscing elit',
          text: 'Lorem ipsum dolor sit amet, adipiscing elit Lorem ipsum dolor sit amet, adipiscing elit'
        },
         {
          date: 'october 2025',
          title: '84Lorem ipsum dolor sit amet, adipiscing elit',
          text: 'Lorem ipsum dolor sit amet, adipiscing elit Lorem ipsum dolor sit amet, adipiscing elit'
        },
        {
          date: 'april 2028',
          title: '9Lorem ipsum dolor sit amet, adipiscing elit',
          text: 'Lorem ipsum dolor sit amet, adipiscing elit Lorem ipsum dolor sit amet, adipiscing elit'
        },
        {
          date: 'september 2029',
          title: '10Lorem ipsum dolor sit amet, adipiscing elit',
          text: 'Lorem ipsum dolor sit amet, adipiscing elit Lorem ipsum dolor sit amet, adipiscing elit'
        },
        {
          date: 'july 2030',
          title: '7Lorem ipsum dolor sit amet, adipiscing elit',
          text: 'Lorem ipsum dolor sit amet, adipiscing elit Lorem ipsum dolor sit amet, adipiscing elit'
        },
      ],
      activeStep: 0,
      tokensInfoUnsorted: [
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
          group: 'Ecosystem',
          percent: '50%',
          amh: '500 000 000'
        },
      ],
      news: [
        {
          date: '21 april, 2022',
          title: 'Lorem ipsum dolor sit amet, adipiscing elit',
          text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
          date: '21 april, 2022',
          title: 'Lorem ipsum dolor sit amet, adipiscing elit',
          text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
          date: '21 april, 2022',
          title: 'Lorem ipsum dolor sit amet, adipiscing elit',
          text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
          date: '21 april, 2022',
          title: 'Lorem ipsum dolor sit amet, adipiscing elit',
          text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
          date: '21 april, 2022',
          title: 'Lorem ipsum dolor sit amet, adipiscing elit',
          text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
          date: '21 april, 2022',
          title: 'Lorem ipsum dolor sit amet, adipiscing elit',
          text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
      ],
      // amphorImg: [
      //   1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19
      // ],
      ops: {
        vuescroll: {
          mode: "native",
          sizeStrategy: "percent",
          detectResize: true
        },
        scrollPanel: {
          initialScrollY: false,
          initialScrollX: false,
          scrollingX: true,
          scrollingY: true,
          speed: 300,
          easing: undefined,
          verticalNativeBarPos: "right"
        },
        rail: {
          background: "#161616",
          opacity: 1,
          size: "16px",
          specifyBorderRadius: false,
          gutterOfEnds: null,
          gutterOfSide: "2px",
          keepShow: false
        },
        bar: {
          size: "16px",
          showDelay: 500,
          onlyShowBarOnScroll: false,
          keepShow: true,
          background: "#292929",
          opacity: 1
        }
      },
      swiperOptions: {
        breakpoints: {
          992:{
            slidesPerView:2
          },
          1024:{
            slidesPerView:3
          }
        }
      }
    }
  },
  computed: {
    tokenInfo(){
      const tokens = this.tokensInfoUnsorted;
      return tokens.sort((a,b)=>{
        return parseFloat(b.percent)-parseFloat(a.percent)}
        )
    }
  },
  methods: {
    textLighting(event){
      this.$emit('mousemove',event)
    },
    resetTextLighting(event){
     this.$emit('mouseleave', event)

    },
    nextSlide() {
      if (this.initialCounter === this.roadMap.length - 1) return false
      this.initialCounter++;
      this.setActiveSlide();
      this.slider()
    },
    prevSlide() {
      if (this.initialCounter === 0) return false
      this.initialCounter--;
      this.setActiveSlide();
      this.slider()
    },
    slider(){
      let bar=  this.$refs.bar;
      let barBg=  this.$refs.barBg;
      let maxStep = this.roadMap.length;
      let step = 100/maxStep;
      let barWidth = this.$refs.cont.offsetWidth;
        var val = step*(this.initialCounter+1);
        var $circle = bar;
          
        if (window.innerWidth< 600){
          bar.setAttribute('r',barWidth/2-7);
          bar.setAttribute('cx',barWidth/2);
          bar.setAttribute('cy',barWidth/2);
          barBg.setAttribute('r',barWidth/2-7);
          barBg.setAttribute('cx',barWidth/2);
          barBg.setAttribute('cy',barWidth/2);
          bar.setAttribute('stroke-dasharray',(2 * Math.PI * bar.getAttribute('r')));
        }
        // }
        // else{
          var r = $circle.getAttribute('r');
          var c = Math.PI*(r*2);
        
          if (val < 0) { val = 0;}
          if (val > 100) { val = 100;}
          
          var pct = ((100-val)/100)*c;
            $circle.style.strokeDashoffset= pct;
          // }
          
          let points = document.querySelectorAll('.point-circle');//count length from roadmap
         let centerX = barWidth/2;
          points[0].style.left=centerX -points[0].getBoundingClientRect().width/2+'px'; 
          let pointWidth = points[0].getBoundingClientRect().width;
          if (points.length){
            for (let i = 1; i< points.length; i++){
              setPoint(step*i,i);
             
            }
          }
          function setPoint(value, i){
              let a = percentToRad(value)
              let leftPos =  2*barWidth/2 * Math.pow(Math.cos((Math.PI - ( (Math.PI/2) -a) )/2 ),2); 
              let topPos =  2*barWidth/2 * Math.cos((Math.PI-a)/2) * Math.cos( ( (Math.PI-a)/2 ) );
            points[i].style.left = leftPos +'px';
             points[i].style.top =topPos + 'px';
             const title = document.body.querySelectorAll('.calendar-info__drop');
             if (value<25){
                points[i].style.left = leftPos - Math.sqrt(2*pointWidth*pointWidth)/4+'px';
                points[i].style.top = topPos - Math.sqrt(2*pointWidth*pointWidth)/4 +'px';
                // console.log( pointWidth);
                title[i-1].style.transform= `translate(-100%, -100%)`
             }else if (value<50){

                points[i].style.left = leftPos - Math.sqrt(2*pointWidth*pointWidth)/4+'px';
                points[i].style.top = topPos - Math.sqrt(2*pointWidth*pointWidth)/2  +'px';
                title[i-1].style.transform= `translate(-80%, 80%)`
             }else if (value<75){

              points[i].style.left = leftPos - Math.sqrt(2*pointWidth*pointWidth)/2+'px';
                points[i].style.top = topPos - Math.sqrt(2*pointWidth*pointWidth)/2 +'px';
                 title[i-1].style.transform= `translate(100%, 100%)`;
             }else if (value<100){
                points[i].style.left = leftPos - (Math.sqrt(2*pointWidth*pointWidth)/2 )-7+'px';
                points[i].style.top = topPos - (Math.sqrt(2*pointWidth*pointWidth)/2) +7 +'px';

                title[i-1].style.transform= `translate(120%, -150%)`;
             }
            
             if(val===100){
                title[i].style.transform= `translate(40%, -220%)`;
             }
          }
          function percentToRad(perc){
            return (perc*2*Math.PI)/100
          }
      // });
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
    },
    overlay(){
      let logoDiv = this.$refs.logoSection; 
      let logoDivTwo = this.$refs.logoSectionTwo;
      let next = this.$refs.nextSection;
      let nextTwo = this.$refs.nextSectionTwo;
      // console.log(document.documentElement.clientHeight,'documentElement.clientHeight');
      let screenHeight = document.documentElement.clientHeight;
      // console.log(logoDiv);
      
      overlayLogo(logoDiv,next)
      overlayLogo(logoDivTwo,nextTwo)

      function overlayLogo(logo, nextSection){
        document.addEventListener('scroll',()=>{
          let logoDivTop=logo?.offsetTop;
          let nextTop = nextSection?.offsetTop
          if ((window.pageYOffset + screenHeight )> logoDivTop
          && window.pageYOffset<nextTop){
            let k = 0.05 
            let pos = window.pageYOffset + screenHeight - logoDivTop -150; //150 - bottom offset
            if (k*pos<1) pos=1/k;
            // if(logo) logo.style.transform=`scale(${pos*k}) translateY(${pos*0.02}%) translateZ(0)`
            // console.log(logo.childNodes[0]);
            // logo.childNodes[0].style.transform=`scale(${pos*k}) translateY(${pos*0.02}%) translateZ(0)`
            logo.childNodes[0].style.transform=`translateY(${pos*0.02}%) translateZ(0)`
            logo.childNodes[0].style.width=`${pos*k*100}px`
            // if(logo) logo.childNodes[0].style.height=`auto`
          }else{
          //  if (logo) logo.style.transform=`unset`
           if (logo) logo.childNodes[0].style.width=`${100}px`
          }

          // console.log('scroll',pageYOffset )
        })
      }
    },
    amphorInit(){
      
        // const mainImage = document.getElementById('main-img');
     
        let counter = 0;

        document.addEventListener('scroll', function () {
            if (window.innerWidth>=600){
                changeImage(19,'#main-img', '.main-banner__img');
                changeImage(20,'.about__img', '.about__img__img');
            }
        });


      

        function changeImage(quantityImages, imgWrapSelector, imgSelector) {
               const wrapper = document.body.querySelector(imgWrapSelector);

                const top =wrapper.getBoundingClientRect().top;
                const height = wrapper.getBoundingClientRect().height;
                  counter =   (window.pageYOffset*quantityImages) / (top + height*3||1000);
                  wrapper.querySelectorAll(`${imgSelector}`).forEach(item=>{
                    item.style.display="none";
                     
                    })
                if (counter<1) counter = 1;
                if (counter >= quantityImages){
                  counter = quantityImages
                }
                wrapper.querySelector(`${imgSelector}--${Math.round(counter)}`).style.display="block";
                wrapper.querySelector(`${imgSelector}--${Math.round(counter)}`).style.visibility="visible";
                
        }
        // changeImage()

        
    }
    
  },
  mounted() {
     this.$nextTick(() => {
         this.setActiveSlide();
         setTimeout(() => {
            this.overlay()
            this.slider()
            this.amphorInit()
         }, 30);
      });
  }
}
</script>
<style lang="scss">
  .main-banner__title{
     h1{ 
       color: #fff;    
       background-clip: text;
      //  background-image: radial-gradient(circle at 170px 40px, rgb(209, 12, 12) 0%, #fff 6rem);
     }
  }
    /* #cont:after {//show percentage
  position: absolute;
  display: block;
  height: 160px;
  width: 160px;
  left: 50%;
  top: 50%;
  box-shadow: inset 0 0 1em black;
  content: attr(data-pct)"%";
  margin-top: -80px;
  margin-left: -80px;
  border-radius: 100%;
  line-height: 160px;
  font-size: 2em;
  text-shadow: 0 0 0.5em black;
} */

</style>
