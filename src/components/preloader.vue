<template>
    <div id="preloader">
        <img src="@/assets/img/preloader.gif" alt="">
    </div>
</template>
<style lang="scss">
    #preloader{
        position: fixed;
        display: flex;
        justify-content: center;
        align-items:center;
        z-index: 1500;
        left: 0;top: 0;right: 0;bottom: 0;
        background: rgba(0,0,0,0.95);
        // background: rgba(255,255,255,0.3);

    }
</style>