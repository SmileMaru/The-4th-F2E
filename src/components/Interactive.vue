<template>
  <section class="interactive_container">
    <div class="interactive_wrapper">
      <div class="interactive_marquee">
        <span class="interactive_para">Interactive web design</span>
        <span class="interactive_para">Interactive web design</span>
        <span class="interactive_para">Interactive web design</span>
      </div>
      <!-- banner interactive image -->
      <div class="interactive_block_container">
        <div class="interactive_block_wrapper">
          <div class="interactive_block_title_box">
            <img
              class="interactive_title_img"
              src="../assets/images/interactive/title.png"
              alt=""
            />
            <img
              class="interactive_banner_img"
              src="../assets/images/interactive/green_bg.png"
              alt=""
            />
            <div class="interactive_hands_img_box">
                <img src="../assets/images/interactive/hand_left.png" alt="" class="hand_img left_hand">
                <img src="../assets/images/interactive/hand_right.png" alt="" class="hand_img right_hand">
            </div>
            <div class="interactive_circle_img_box">
                <img src="../assets/images/interactive/yellow.png" alt="" class="yellow_circle">
                <img src="../assets/images/interactive/purple.png" alt="" class="purple_circle">
            </div>
          </div>
          <!-- banner 文字 x 文字 -->
          <div class="interactive_ui_web_box">
            <span>前端工程師</span>
            <div class="interactive_close_img_box">
              <img
                class="interactive_close_img"
                src="../assets/images/interactive/close.png"
                alt=""
              />
            </div>
            <span class="ui_designer">UI設計師</span>
          </div>
        </div>
      </div>
      <div class="interactive_marquee">
        <span class="interactive_para">Interactive web design</span>
        <span class="interactive_para">Interactive web design</span>
        <span class="interactive_para">Interactive web design</span>
      </div>
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
            trigger: ".interactive_container",
            start: "top center",
            end: "top",
            toggleActions: "play none none reset",
            // markers: true,
          },
        })
        .to(".interactive_para", {
            xPercent: "-50",
            ease: "power4.Out",
            duration: 5,
            // repeat: -1,
        })
        .to(
          [
            ".interactive_title_img",
            ".interactive_banner_img",
            ".left_hand",
            ".right_hand",
            ".yellow_circle",
            ".purple_circle",
            ".interactive_ui_web_box",
          ],
          {
            scale: 0, duration:0
          }, "<"
        )
        .from(".left_hand", { scale: 1, duration: 1.75, x: 350, rotation: 90 }, "<")
        .from(".right_hand", { scale: 1, duration: 1.75, x: -350, rotation: -90 }, "<")
        .from(".interactive_banner_img", { autoAlpha: 0, scale: 0, duration: 1.5}, "<")
        .from(".interactive_title_img", { scale: 0, duration: 1.5}, "<")
        .from(".interactive_ui_web_box", { scale: 0, duration: 1.5}, "<")
        .from(".yellow_circle", { scale: 0, duration: 2, x:-100, y:100, rotation: -120}, "<")
        .from(".purple_circle", { scale: 0, duration: 1.5, x:100, y:-100, rotation: 120}, "<");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "/src/assets/scss/base/style.scss";
@import "/src/assets/scss/interactive.scss";
</style>
