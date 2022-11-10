<template>
  <section class="reward_container">
    <div class="reward_wrapper">
      <h2 class="page_title reward_page_title">
        區區修煉已經無法滿足了嗎？<span class="title_delay">還有比賽等著你!</span>
      </h2>
    </div>
    <div class="reward_vetor_line_container">
      <div class="reward_vetor_container">
        <img src="../assets/images/rewards/Vector-flag.png" alt="" class="vetor_flag" />
        <img src="../assets/images/rewards/Vector-car.png" alt="" class="vetor_car" />
      </div>
      <div class="reward_underline"></div>
    </div>
    <div class="reward_cards_container">
      <div class="reward_cards_wrapper">
        <div
          class="reward_cards_group"
          v-on:mouseenter="testEnter"
          v-on:mouseleave="testLeave"
        >
          <div class="card_title">
            <img
              class="reward_cards_img"
              src="../assets/images/rewards/countingBoard.png"
              alt=""
            />
            <h3 class="reward_cards_title">評審機制</h3>
          </div>
          <div class="card_context">
            <h4>初選：</h4>
            <h5 class="para_2">將由六角學院前端、UI 評審進行第一波篩選。</h5>
            <h4>決選：</h4>
            <h5 class="para_2">
              由六角學院與贊助廠商討論，進行最後篩選，並於 12/30(五)
              由評審進行直播公布名單！
            </h5>
          </div>
        </div>
        <div class="reward_cards_group" @mouseenter="testEnter" @mouseleave="testLeave">
          <div class="card_title">
            <img
              class="reward_cards_img"
              src="../assets/images/rewards/prize.png"
              alt=""
            />
            <h3 class="reward_cards_title">獎金</h3>
          </div>
          <div class="card_context">
            <h5>
              初選佳作：<span class="p2 para_space">共六十位</span
              ><span class="p2 accent_word">數位獎狀</span>
            </h5>
            <p class="p3">每週主題個人組十位、團體組十組</p>
            <h5>
              個人企業獎：<span class="p2 para_space">共六位</span
              ><span class="p2 accent_word">NTD 3,000/位</span>
            </h5>
            <p class="p3">每週主題個人組十位、團體組十組</p>
            <h5>
              團體企業獎：<span class="p2 para_space">共三組</span
              ><span class="p2 accent_word">NTD 10,000/組</span>
            </h5>
            <p class="p3">每週主題各一組</p>
            <h5>以上皆提供完賽數位獎狀</h5>
          </div>
        </div>
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
    testEnter: function (event) {
      gsap.to(event.target, { y: -15 }, 0);
    },
    testLeave: function (event) {
      gsap.to(event.target, { y: 0 });
    },
    testScroll() {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".reward_page_title",
            start: "top center",
            end: "top",
            toggleActions: "play none none none",
            // markers: true,
          },
        })
        .from(".reward_page_title", { autoAlpha: 0, y: 10, duration: 1 }, "<")
        .from(".reward_cards_group", { autoAlpha: 0, y: 10, duration: 1 }, "<")
        .from(".title_delay", { autoAlpha: 0, y: 10, duration: 1 }, "<1")
        .to(".vetor_car", { x: "-750%", duration: 0.7 })
        .to(".vetor_flag", { rotation: "-45deg", x: -20, y: -20, duration: 1 });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/base/style.scss";
@import "../assets/scss/reward.scss";
</style>
