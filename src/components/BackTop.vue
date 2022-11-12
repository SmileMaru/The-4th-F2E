<template>
  <div class="back_top_container">
    <div class="back_top_wrapper">
      <div class="back_top">
        <img
          src="../assets/images/header/up-arrow.png"
          alt="back to top"
          class="back_top_img"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const scroll = document.querySelector(".back_top");
    let timer = null; // 設置定時器
    let isTop = true; // 確認定時器的開關

    window.addEventListener("scroll", scrollFunction);

    function scrollFunction() {
      //show
      if (window.scrollY > 2500) {
        scroll.classList.remove("btn_leave");
        scroll.classList.add("btn_start");
        scroll.style.display = "block";
        isTop = false;
        // 一開始在初始值就加上.leave 就不需要去判斷屬性質去執行條件
        // 只需要單純判斷他滑了800就可以了
        // if (!scroll.classList.contains('btn_start')) {
        // }
      } else {
        //hide
        scroll.classList.remove("btn_start");
        scroll.classList.add("btn_leave");
        scroll.style.display = "none";
        // if (!scroll.classList.contains('btn_start')) {
        // }
      }
    }
    scroll.addEventListener("click", backToTop);

    function backToTop() {
      timer = setInterval(() => {
        // 獲取滾動條高度
        let osTop = document.documentElement.scrollTop || document.body.scrollTop;

        // 讓滑動效果產生
        let speed = Math.floor(-osTop / 100);
        document.documentElement.scrollTop = document.body.scrollTop = osTop + speed;

        isTop = true;

        // 清除定時器
        if (osTop == 0) {
          clearInterval(timer);
        }
      }, 3);
    }
  },
};
</script>

<style lang="scss" scoped>
@import "/src/assets/scss/base/style.scss";
.back_top_container{
    position: relative;
    width: 100%;
    @include sm(){
      display: none;
    }
}
.back_top_wrapper {
  position: fixed;
  max-width: 80%;
}
.back_top {
  position: fixed;
  bottom: 5%;
  right: 3%;
  cursor: pointer;
  z-index: 300;
  @include md(){
    right: 20px;
  }
  .back_top_img {
    width: 70px;
    @include md() {
      width: 35px;
    }
  }
  &:hover {
    transition: .3s ease-in;
    transform: scale(1.1);
  }
}
</style>
