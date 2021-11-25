<template>
  <div class="timer">
    <div class="timer__block">
      <div class="timer__num">{{ days }}</div>
      <div class="timer__text">days</div>
    </div>

    <span class="timer__separator">:</span>

    <div class="timer__block">
      <div class="timer__num">{{ hours }}</div>
      <div class="timer__text">hours</div>
    </div>

    <span class="timer__separator">:</span>

    <div class="timer__block">
      <div class="timer__num">{{ minutes }}</div>
      <div class="timer__text">minutes</div>
    </div>

    <span class="timer__separator">:</span>

    <div class="timer__block">
      <div class="timer__num">{{ seconds }}</div>
      <div class="timer__text">seconds</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "timer",
  props: ['starttime','endtime'],
  data(){
    return{
      timer:"",
      start: "",
      end: "",
      interval: "",
      days:"",
      minutes:"",
      hours:"",
      seconds:"",

    };
  },
  methods: {
    timerCount: function(start,end){
      // Get todays date and time
      let now = new Date().getTime();

      // Find the distance between now an the count down date
      let distance = start - now;
      let passTime =  end - now;

      if(distance < 0 && passTime < 0){
        clearInterval(this.interval);
        return;

      }else if(distance < 0 && passTime > 0){
        this.calcTime(passTime);
      } else if( distance > 0 && passTime > 0 ){
        this.calcTime(distance);
      }
    },
    calcTime: function(dist){
      // Time calculations for days, hours, minutes and seconds
      this.days = Math.floor(dist / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((dist % (1000 * 60)) / 1000);
    }

  },
  mounted(){
    this.start = new Date(this.starttime).getTime();
    this.end = new Date(this.endtime).getTime();
    // Update the count down every 1 second
    this.timerCount(this.start,this.end);
    this.interval = setInterval(() => {
      this.timerCount(this.start,this.end);
    }, 1000);
  },
}
</script>

<style scoped>

</style>