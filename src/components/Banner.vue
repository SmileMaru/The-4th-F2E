<template>
    <section class="banner_container">
        <div class="banner_wrapper">
            <div class="banner_content_container">
                <div class="banner_content_img_group">
                    <img src="../assets/images/banner/closeTag.png" alt="" class="close_tag_img">
                    <img src="../assets/images/banner/arrow.png" alt="" class="arrow_img">
                    <img src="../assets/images/banner/chart.png" alt="" class="chart_img">
                    <img src="../assets/images/banner/pacman.png" alt="" class="pacman_img">
                </div>
                <div class="banner_title_box">
                    <h2 class="banner_main_title">THE F2E</h2>
                    <h3 class="banner_sub_title">互動式網頁設計</h3>
                    <div class="btn_box banner_btn">
                        <a href="https://2022.thef2e.com/" target="blank" class="btn_signup">立即報名</a>
                    </div>
                    <span class="banner_text">4th</span>
                </div>
            </div>
        </div>
        <div class="banner_marquee_text">
            <span class="marquee_text">join us</span>
            <span class="marquee_text">join us</span>
            <span class="marquee_text">join us</span>
            <span class="marquee_text">join us</span>
            <span class="marquee_text">join us</span>
            <span class="marquee_text">join us</span>
            <span class="marquee_text">join us</span>
            <span class="marquee_text">join us</span>
            <span class="marquee_text">join us</span>
        </div>
    </section>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);
export default {
  mounted() {
    this.testScroll();
  },
  methods: {
    testScroll() {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".banner_container",
            start: "top center",
            end: "top",
            toggleActions: "play none none reset",
            // markers: true,
          },
        })
      
        .from(".banner_main_title", { autoAlpha: 0, y: 40, duration: 1 }, "<")
        .from(".banner_text", { autoAlpha: 0, y: 40, duration: 1 }, "<")
        .from(".chart_img", { autoAlpha: 0, y: 40, duration: 1 }, "<")
        .from(".close_tag_img", { autoAlpha: 0, y: -40, duration: 1 }, "<")
        .to(".chart_img", { y: "5%", duration: 2, repeat: -1, yoyo: true})
        .to(".close_tag_img", { y: "5%", duration: 2, repeat: -1, yoyo: true}, "<")

        .from(".marquee_text", {
            xPercent: "-100", //代表每次僅往左50%，讓視覺看起來像是在無限循環，因為下一個動畫又會繼續補上
            ease: "none",
            duration: 3,
            repeat: -1, //代表動畫無限循環
        },"-=1")
        
    }
}
}
</script>

<style lang="scss" scoped>
@import "/src/assets/scss/base/style.scss";
@import "/src/assets/scss/banner.scss";

</style>