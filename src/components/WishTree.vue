<template>
  <section class="wish_container">
    <div class="wish_wrapper">
      <div class="wish_animation_img_box">
        <img
          class="wish_img wish_img_rect1"
          src="../assets/images/wish/Rectangle26.png"
          alt=""
        />
        <img class="wish_img wish_img_star" src="../assets/images/wish/Star.png" alt="" />
      </div>
      <div class="wish_animation_img_box">
        <img
          class="wish_img wish_img_purple1"
          src="../assets/images/wish/purple1.png"
          alt=""
        />
        <img
          class="wish_img wish_img_question"
          src="../assets/images/wish/question.png"
          alt=""
        />
      </div>
      <div class="wish_animation_img_box">
        <img
          class="wish_img wish_img_surprise"
          src="../assets/images/wish/surprise.png"
          alt=""
        />
        <img class="wish_img wish_img_maru" src="../assets/images/wish/maru.png" alt="" />
        <img
          class="wish_img wish_img_green"
          src="../assets/images/wish/green.png"
          alt=""
        />
      </div>
      <div class="wish_animation_img_box">
        <img
          class="wish_img wish_img_rect2"
          src="../assets/images/wish/Rectangle28.png"
          alt=""
        />
        <img
          class="wish_img wish_img_polygon"
          src="../assets/images/wish/Polygon2.png"
          alt=""
        />
      </div>
      <div class="wish_animation_img_box">
        <img
          class="wish_img wish_img_purple2"
          src="../assets/images/wish/purple2.png"
          alt=""
        />
        <img class="wish_img wish_img_eyes" src="../assets/images/wish/eyes.png" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default {
  mounted() {
    this.testScroll();
  },
  methods: {
    testScroll() {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".wish_container",
            start: "top center",
            end: "top",
            toggleActions: "play none none reset",
            // markers: true,
          },
        })
        .to(
          [
            ".wish_img_rect1",
            ".wish_img_star",
            ".wish_img_purple1",
            ".wish_img_question",
            ".wish_img_surprise",
            ".wish_img_maru",
            ".wish_img_green",
            ".wish_img_rect2",
            ".wish_img_polygon",
            ".wish_img_purple2",
            ".wish_img_eyes",
          ],
          {
            scale: 0, duration:0
          }
        )
        .from(
          [
            ".wish_img_rect1",
            ".wish_img_star",
            ".wish_img_purple1",
            ".wish_img_question",
          ],
          {
            keyframes: [{ scale: 1.25 }, { scale: 1 }],
            duration: 1, ease: "bounce.out"
          }, ">0.2"
        )
        .from(
          [
            ".wish_img_surprise",
            ".wish_img_maru",
            ".wish_img_green",
          ],
          {
            keyframes: [{ scale: 1.25 }, { scale: 1 }],
            duration: 1, ease: "bounce.out"
          }, ">0.2"
        )
        .from(
          [
            ".wish_img_rect2",
            ".wish_img_polygon",
            ".wish_img_purple2",
            ".wish_img_eyes",
          ],
          {
            keyframes: [{ scale: 1.25 }, { scale: 1 }],
            duration: 1, ease: "bounce.out"
          }, ">0.2"
        );
    },
  },
};
</script>

<style lang="scss" scoped>
@import "/src/assets/scss/base/style.scss";
@import "/src/assets/scss/wishTree.scss";
</style>
