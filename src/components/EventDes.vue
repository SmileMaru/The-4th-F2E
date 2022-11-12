<template>
  <section class="event_container">
    <div class="event_wrapper">
      <div class="event_page_title">
        <div class="event_title_pac_man">
          <img class="event_pac_man_img" src="../assets/images/event/pacMan.png" alt="" />
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
        <h2 class="page_title">活動說明</h2>
        <div class="event_title_pac_man">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot dot_lg"></div>
        </div>
      </div>
      <div class="event_cards_container">
        <div class="event_cards_flow">
          <!-- 1st card -->
          <div class="event_cards_group">
            <div class="event_img_box">
              <img src="../assets/images/event/pencil.png" alt="" />
            </div>
            <div class="event_content">
              <h3>開放報名</h3>
              <p class="p2"><span class="accent_word">10/13</span>(四) 早上 11:00</p>
              <div class="line"></div>
              <p class="p2"><span class="accent_word">10/30</span>(日) 晚上 23:59</p>
              <p class="p2">截止前可修改報名組別</p>
            </div>
          </div>
          <!-- arrow image -->
          <div class="event_arrow_img_box">
            <img class="event_arrow_img" src="../assets/images/event/arrow.png" alt="" />
          </div>
          <!-- 2nd card -->
          <div class="event_cards_group">
            <div class="event_content">
              <h3>各組別開賽</h3>
              <p class="p2"><span class="accent_word">10/13</span>UI組、團體組開賽</p>
              <p class="p2"><span class="accent_word">11/07</span>前端組開賽</p>
              <p class="p2">前端工程師可採用<br />UI 設計師的設計稿產出完整作品</p>
            </div>
            <div class="event_img_box">
              <img src="../assets/images/event/clock.png" alt="" />
            </div>
          </div>
        </div>
        <!-- arrow image middle -->
        <div class="event_arrow_img_box arrow_middle">
          <div class="blank"></div>
          <!-- <div class="blank"></div> -->
          <div class="blank">
            <img class="event_arrow_img" src="../assets/images/event/arrow.png" alt="" />
          </div>
        </div>
        <div class="event_cards_flow">
          <!-- 3rd card -->
          <div class="event_cards_group">
            <div class="event_img_box">
              <img src="../assets/images/event/file.png" alt="" />
            </div>
            <div class="event_content">
              <h3>登錄報名</h3>
              <p class="p2"><span class="accent_word">10/31</span>(一) 中午 12:00</p>
              <div class="line"></div>
              <p class="p2"><span class="accent_word">11/28</span>(一) 中午 12:00</p>
              <p class="p2">依賽程登錄作品</p>
            </div>
          </div>
          <!-- arrow image third-->
          <div class="event_arrow_img_box third_arrow">
            <img class="event_arrow_img" src="../assets/images/event/arrow.png" alt="" />
          </div>
          <!-- 4th card -->
          <div class="event_cards_group">
            <div class="event_content event_live_stream">
              <h3>線上直播</h3>
              <p class="p2"><span class="accent_word">11/03 - 11/24</span>每週四</p>
            </div>
            <div class="event_img_box">
              <img src="../assets/images/event/play.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <!-- RWD tablet & mobile -->
      <div class="event_cards_rwd_container">
        <!-- 1st card -->
        <div class="event_cards_group">
          <div class="event_img_box">
            <img src="../assets/images/event/pencil.png" alt="" />
          </div>
          <div class="event_content">
            <h3>開放報名</h3>
            <p class="p2"><span class="accent_word">10/13</span>(四) 早上 11:00</p>
            <div class="line"></div>
            <p class="p2"><span class="accent_word">10/30</span>(日) 晚上 23:59</p>
            <p class="p2">截止前可修改報名組別</p>
          </div>
        </div>
        <div class="event_arrow_img_box">
          <img class="event_arrow_img" src="../assets/images/event/arrow.png" alt="" />
        </div>
        <!-- 2nd card -->
        <div class="event_cards_group">
          <div class="event_img_box">
              <img src="../assets/images/event/clock.png" alt="" />
            </div>
          <div class="event_content">
            <h3>各組別開賽</h3>
            <p class="p2"><span class="accent_word">10/13</span>UI組、團體組開賽</p>
            <p class="p2"><span class="accent_word">11/07</span>前端組開賽</p>
            <p class="p2">前端工程師可採用<br />UI 設計師的設計稿產出完整作品</p>
          </div>
        </div>
        <div class="event_arrow_img_box">
          <img class="event_arrow_img" src="../assets/images/event/arrow.png" alt="" />
        </div>
        <!-- 3rd card -->
        <div class="event_cards_group">
          <div class="event_img_box">
            <img src="../assets/images/event/file.png" alt="" />
          </div>
          <div class="event_content">
            <h3>登錄報名</h3>
            <p class="p2"><span class="accent_word">10/31</span>(一) 中午 12:00</p>
            <div class="line"></div>
            <p class="p2"><span class="accent_word">11/28</span>(一) 中午 12:00</p>
            <p class="p2">依賽程登錄作品</p>
          </div>
        </div>
        <div class="event_arrow_img_box">
          <img class="event_arrow_img" src="../assets/images/event/arrow.png" alt="" />
        </div>
        <div class="event_cards_group">
          <div class="event_img_box">
            <img src="../assets/images/event/play.png" alt="" />
          </div>
          <div class="event_content event_live_stream">
            <h3>線上直播</h3>
            <p class="p2"><span class="accent_word">11/03 - 11/24</span>每週四</p>
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
    this.pageEnter();
  },
  methods: {
    pageEnter() {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".event_page_title",
            start: "top center",
            end: "top",
            toggleActions: "play none none reset",
            // markers: true,
          },
        })
        .from(".event_page_title", { autoAlpha: 0, y: 50, duration: 1 })
        .from(".event_cards_container", { autoAlpha: 0, y: 50, duration: 1.5 }, "-=0.75");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "/src/assets/scss/base/style.scss";
@import "/src/assets/scss/event.scss";
</style>
