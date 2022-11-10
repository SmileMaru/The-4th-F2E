<template>
  <nav class="nav_container">
    <div class="nav_wrapper">
      <div class="nav_logo">
        <a href="https://2022.thef2e.com/" target="blank"
          ><img class="logo_img" src="../assets/images/banner/logo.png" alt=""
        /></a>
      </div>
      <ul class="nav_menu">
        <a href="https://2022.thef2e.com/news" target="blank"><li>關卡資訊</li></a>
        <a href="https://2022.thef2e.com/works" target="blank"><li>作品列表</li></a>
        <a href="https://hackmd.io/ofJD4K7iSI65V19zxC7d0w" target="blank"
          ><li>攻略資源</li></a
        >
        <a href="https://2022.thef2e.com/jobs" target="blank"><li>求職專區</li></a>
        <a href="https://2022.thef2e.com/login" target="blank" class="nav_login"
          ><span class="login">登入</span></a
        >
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  mounted(){
    window.addEventListener("scroll",function(){
            console.log(scrollY);
            var header = document.querySelector(".nav_container");
            header.classList.toggle("sticky", window.scrollY > 0);
        })
  }
};
</script>

<style lang="scss" scoped>
@import "/src/assets/scss/base/style.scss";

$btline_height: 4px;
$btline_width: 12px;
$bt_radius: 20px;
$p_font_size: 20px;
$p_line_height: 28px;
.nav_container {
  width: 100%;
  z-index: 1000;
  background-color: $N5_Bk_Color_02;
  width: 100%;
  position: fixed;
  padding: 0 5%;
  top: 0;
  .sticky{
    padding: 5px 100px;
    background: #fff;
}
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
      background-color: rgba(85, 255, 173, 20%);
      border: 1px solid $G1_Secondary_Color;
      box-shadow: 0px 0px 10px 3px rgba(85, 255, 173, 20%);
      &:hover li {
        color: $G1_Secondary_Color;
      }
    }
  }
}
.nav_menu {
  position: relative;
  padding: 1vw 0;
  display: flex;
  li {
    color: $N2_Secondary_Text;
    align-self: center;
    padding: 0.6vw 1.3vw;
    font-size: 1.3vw;
  }
  li:hover::after{
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
.nav_logo {
  display: flex;
  align-items: center;
  .logo_img {
    width: 100%;
  }
}
</style>
