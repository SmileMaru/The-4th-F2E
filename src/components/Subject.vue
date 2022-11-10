<template>
  <section class="subject_container">
    <div class="subject_wrapper">
      <div class="subject_page_title_container">
        <div class="subject_page_title_box">
          <h2 class="page_title subject_hot_title">年度最強合作 三大主題來襲</h2>
        </div>
        <p class="p1">各路廠商強強聯手<br />共同設計出接地氣的網頁互動挑戰關卡</p>
      </div>
      <!-- flip side -->
      <div class="subject_cards_container">
        <!-- # 板塊設計 -->
        <div class="subject_cards_group card_block_studio">
          <div class="sponsor_tags">
            <h3 class="title"># 板塊設計</h3>
          </div>
          <h4>The F2E 活動網站設計</h4>
          <p class="p2">視覺滾動</p>
          <img class="subject_card_img" src="../assets/images/subject/chart.png" alt="" />
          <div class="subject_card_footer">
            <p class="p4 p_period">Week 1</p>
            <a href="https://2022.thef2e.com/news/week1" target="_blank"
              ><p class="p4 p_arrow">查看關卡細節</p></a
            >
          </div>
        </div>
        <!-- # 凱鈿行動科技 -->
        <div class="subject_cards_group card_kdan">
          <div class="sponsor_tags">
            <h3 class="title"># 凱鈿行動科技</h3>
          </div>
          <h4>今晚，我想來點點簽</h4>
          <p class="p2">CANVAS</p>
          <img
            class="subject_card_img"
            src="../assets/images/subject/Group1.png"
            alt=""
          />
          <div class="subject_card_footer">
            <p class="p4 p_period">Week 2</p>
            <a href="https://2022.thef2e.com/news/week2" target="_blank"
              ><p class="p4 p_arrow">查看關卡細節</p></a
            >
          </div>
        </div>
        <!-- # 鈦坦科技 -->
        <div class="subject_cards_group card_titan">
          <div class="sponsor_tags">
            <h3 class="title"># 鈦坦科技</h3>
          </div>
          <h4>SCRUM 新手村</h4>
          <p class="p2">JS Draggable</p>
          <img
            class="subject_card_img"
            src="../assets/images/subject/draggable.png"
            alt=""
          />
          <div class="subject_card_footer">
            <p class="p4 p_period">Week 3</p>
            <a href="https://2022.thef2e.com/news/week3" target="_blank"
              ><p class="p4 p_arrow">查看關卡細節</p></a
            >
          </div>
        </div>
      </div>
      <!-- lock side -->
      <div class="subject_cards_container">
        <div class="subject_cards_lock_container">
          <div class="subject_cards_group subject_cards_group_lock card_week1">
            <p class="para_lock_week">WEEK 1</p>
            <img
              src="../assets/images/subject/Lock-locked.png"
              alt=""
              class="subject_lock_img"
            />
          </div>
          <div class="subject_cards_group subject_cards_group_lock card_week2">
            <p class="para_lock_week">WEEK 2</p>
            <img
              src="../assets/images/subject/Lock-locked.png"
              alt=""
              class="subject_lock_img"
            />
          </div>
          <div class="subject_cards_group subject_cards_group_lock card_week3">
            <p class="para_lock_week">WEEK 3</p>
            <img
              src="../assets/images/subject/Lock-locked.png"
              alt=""
              class="subject_lock_img"
            />
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
    testScroll() {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".subject_page_title_box",
            start: "top center",
            end: "top",
            toggleActions: "play none none reset",
            // markers: true,
          },
        })
        .from(".p1", { autoAlpha: 0, y: "+=100%", duration: 1 }, "<")
        .from(".card_block_studio", { autoAlpha: 0, y: "+=200%", duration: 1.5}, "<")
        .from(".card_week1", { autoAlpha: 1, y: "+=200%", duration: 1.5 }, "<")
        .from(".card_kdan", { autoAlpha: 0, y: "+=150%", duration: 1.25 }, "<")
        .from(".card_week2", { autoAlpha: 1, y: "+=150%", duration: 1.25 }, "<")
        .from(".card_titan", { autoAlpha: 0, y: "+=100%", duration: 1 }, "<")
        .from(".card_week3", { autoAlpha: 1, y: "+=100%", duration: 1 }, "<")
        .to([".card_block_studio", ".card_kdan", ".card_titan"], {scaleX: 0, duration: 0}, ">")
        .fromTo(".card_week1", {autoAlpha: 1}, {autoAlpha: 0, rotateY: 180, duration: 1})
        .fromTo(".card_block_studio", {autoAlpha: 0}, {autoAlpha: 1, zIndex: 200, scaleX: 1, duration: 0.7, ease: "linear",}, "<+0.2")
        .fromTo(".card_week2", {autoAlpha: 1}, {autoAlpha: 0, rotateY: 180, duration: 1})
        .fromTo(".card_kdan", {autoAlpha: 0}, {autoAlpha: 1, zIndex: 200, scaleX: 1, duration: 0.7, ease: "linear",}, "<+0.2")
        .fromTo(".card_week3", {autoAlpha: 1}, {autoAlpha: 0, rotateY: 180, duration: 1})
        .fromTo(".card_titan", {autoAlpha: 0}, {autoAlpha: 1, zIndex: 200, scaleX: 1, duration: 0.7, ease: "linear",}, "<+0.2")
    },
  },
};
</script>

<style lang="scss" scoped>
@import "/src/assets/scss/base/style.scss";
@import "/src/assets/scss/subject.scss";
</style>
