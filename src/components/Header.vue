<template>
  <header class="nav_container">
    <h1 class="sr_only">{{ pageTitle }}</h1>
    <nav class="nav_wrapper">
      <h2 scope class="sr_only">{{ navTitle }}</h2>
      <div class="nav_logo">
        <div class="nav_burger">
          <img @click="isShow = this.showNav=true"
            src="../assets/images/header/burger.png"
            alt=""
            class="burger_img"
          />
        </div>
        <a href="https://2022.thef2e.com/" target="blank"
          ><img class="logo_img" src="../assets/images/banner/logo.png" alt=""
        /></a>
      </div>
      
      <ul class="nav_menu">
        <a href="https://2022.thef2e.com/news" target="blank"
          ><li>關卡資訊</li></a
        >
        <a href="https://2022.thef2e.com/works" target="blank"
          ><li>作品列表</li></a
        >
        <a href="https://hackmd.io/ofJD4K7iSI65V19zxC7d0w" target="blank"
          ><li>攻略資源</li></a
        >
        <a href="https://2022.thef2e.com/jobs" target="blank"
          ><li>求職專區</li></a
        >
        <a href="https://2022.thef2e.com/login" target="blank" class="nav_login"
          ><span class="login">登入</span></a
        >
      </ul>
      <div class="header_login_box_rwd">
        <a
          href="https://2022.thef2e.com/login"
          target="blank"
          class="nav_login nav_login_rwd"
          ><span class="login_rwd">立即報名</span></a
        >
      </div>
    </nav>
  </header>
  <div class="nav_rwd_menu_container" v-if="showNav">
        <ul class="nav_rwd_menu">
          <img @click="isShow = this.showNav=false"
            src="../assets/images/header/close.png"
            alt=""
            class="nav_close_img"
          />
          <a href="https://2022.thef2e.com/news" target="blank"
            ><li>關卡資訊</li></a
          >
          <a href="https://2022.thef2e.com/works" target="blank"
            ><li>作品列表</li></a
          >
          <a href="https://hackmd.io/ofJD4K7iSI65V19zxC7d0w" target="blank"
            ><li>攻略資源</li></a
          >
          <a href="https://2022.thef2e.com/jobs" target="blank"
            ><li>求職專區</li></a
          >
          <a
            href="https://2022.thef2e.com/login"
            target="blank"
            class="nav_menu_rwd_login"
            ><span class="login">登入</span></a
          >
        </ul>
      </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
      pageTitle: "The 4th F2E 活動網站設計",
      navTitle: "Week 1 滾動視差挑戰",
      showNav: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", function () {
      console.log(scrollY);
      var header = document.querySelector(".nav_container");
      header.classList.toggle("sticky", window.scrollY > 0);
    });
  },
};
</script>

<style lang="scss" scoped>
@import "/src/assets/scss/base/style.scss";

$btline_height: 4px;
$btline_width: 12px;
$bt_radius: 20px;
$p_font_size: 20px;
$p_line_height: 28px;

.sr_only {
  width: 1px;
  height: 100%;
  position: absolute;
  overflow: hidden;
}
.nav_container {
  width: 100%;
  z-index: 1000;
  background-color: $N5_Bk_Color_02;
  width: 100%;
  // position: fixed;
  padding: 0 5%;
  top: 0;
}

.nav_wrapper {
  display: flex;
  justify-content: space-between;
  .nav_login {
    border-radius: 40px;
    border: 1px solid $N1_Primary_Text;
    display: inline-block;
    margin-left: 1vw;
    padding: 12px 24px;
    font-size: 1.3vw;
    &:hover {
      @include header_login_hover;
      &:hover li {
        color: $G1_Secondary_Color;
      }
    }
  }
}
.header_login_box_rwd {
  @include xl() {
    display: none;
  }
  @include md() {
    padding: 20px 0;
    display: block;
  }
  .nav_login_rwd {
    padding: 2vw;

    .login_rwd {
      font-size: 16px;
      color: $N1_Primary_Text;
    }
  }
}

.nav_menu {
  position: relative;
  padding: 1vw 0;
  display: flex;
  @include md() {
    display: none;
  }
  li {
    color: $N2_Secondary_Text;
    align-self: center;
    padding: 0.6vw 1.3vw;
    font-size: 1.3vw;
  }
  li:hover::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0;
    height: $btline-height;
    background: $G1_Secondary_Color;
    border-radius: $bt-radius;
    transition: 0.1s linear;
    width: $btline-width;
    color: $N1_Primary_Text;
    -webkit-filter: $text_drop_shadow;
    filter: $text_drop_shadow;
  }
  li:hover {
    color: $N1_Primary_Text;
    -webkit-filter: $text_drop_shadow;
    filter: $text_drop_shadow;
  }
  .login {
    color: $N1_Primary_Text;
  }
}
// click - > burger : nav bar
.nav_rwd_menu_container {
  @include xl(){
    display: none;
  }
  @include md(){
    display: block;
  }
  position: absolute;
  z-index: 100;
  width: 100%;
  min-height: 400px;
  background-color: $N5_Bk_Color_02;
}
.nav_rwd_menu {
  padding: 1vw 0;
  width: 100%;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  li {
    color: $N2_Secondary_Text;
    align-self: center;
    padding: 20px 20px;
    font-size: 20px;
  }
  li:hover::after {
    content: "";
    position: absolute;
    transform: rotate(90deg);
    width: 0;
    left: 0;
    top: 30px;
    height: $btline-height;
    background: $G1_Secondary_Color;
    border-radius: $bt-radius;
    transition: 0.1s linear;
    width: $btline-width;
    color: $N1_Primary_Text;
    -webkit-filter: $text_drop_shadow;
    filter: $text_drop_shadow;
  }
  li:hover {
    color: $N1_Primary_Text;
    -webkit-filter: $text_drop_shadow;
    filter: $text_drop_shadow;
  }
  .nav_menu_rwd_login {
    min-width: 90vw;
    text-align: center;
    border-radius: 40px;
    border: 1px solid $N1_Primary_Text;
    padding: 12px;
    margin: 20px;
    font-size: 20px;
    &:hover {
      @include header_login_hover;
      &:hover li {
        color: $G1_Secondary_Color;
      }
    }
  }
  .login {
    color: $N1_Primary_Text;
  }
  .nav_close_img {
    align-self: end;
    width: 20px;
    cursor: pointer;
    margin: 1vw 6vw;
  }
}
.nav_logo {
  position: relative;
  display: flex;
  align-items: center;
  padding: 20px 0;
  .logo_img {
    width: 100%;
    @include md(){
      width: 80%;
    }

  }
}
.nav_burger {
  position: relative;
  width: 30px;
  margin-right: 5vw;
  @include xl() {
    display: none;
  }
  @include md() {
    display: block;
  }
  .burger_img {
    width: 100%;
    cursor: pointer;
  }
}
</style>
