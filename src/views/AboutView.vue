<template>
  <div>
    <div class="test_container">
      <div class="test_wrapper">
        <div class="card">
          <div class="card_upper">
            <img src="../assets/images/rewards/prize.png" alt="">
            <h3>test</h3>
          </div>
          <div class="card_below">
            
            <h4>1234</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptatum
              natus vel, iusto libero, provident commodi sequi doloribus neque omnis quod
              vero perspiciatis! Tempore, culpa nam magni provident numquam beatae?
            </p>
            <h4>1234</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptatum
              natus vel, iusto libero, provident commodi sequi doloribus neque omnis quod
              vero perspiciatis! Tempore, culpa nam magni provident numquam beatae?
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card_upper">
            <img src="../assets/images/rewards/prize.png" alt="">
            <h3>test</h3>
          </div>
          <div class="card_below">
            <h4>1234</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptatum
              natus vel, iusto libero, provident commodi sequi doloribus neque omnis quod
              vero perspiciatis! Tempore, culpa nam magni provident numquam beatae?
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "/src/assets/scss/base/style.scss";

.test_wrapper{
  padding-top: 100px;
  @include wrapper;
  display: flex;
  justify-content: space-around;
}
.card_upper img{
  width: 10vw;
}
.card {
  width: 30vw;
  padding: 1rem;
  background-color: #fff;
  border-radius: 24px;
  display: flex;
  align-content: center;
  flex-direction: column;
  h3{
    line-height: 0;
  }
  h4{
    line-height: 0;
  }
  p{
    line-height: 20px;
  };
}
</style>
