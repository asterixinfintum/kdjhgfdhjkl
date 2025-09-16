<template>
  <div class="vision">
    <div class="vision__headers">
      <h3 class="section__area--h3 section-header">Cross Chain Oracle</h3>

      <p class="vision__headers--p">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam illum
        voluptatibus enim libero, asperiores at omnis, molestias ipsam, reprehenderit
        impedit rerum commodi delectus! Eligendi, non! Architecto nihil eius quibusdam a.
      </p>
    </div>

    <div class="vision__slidearea">
      <div class="vision__slidenav">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.vision {
  padding: $paddingside;
  color: $white;
  height: #{scaleValue(1000)};
  position: relative;
  @include topbottompadding;
  z-index: 4;

  &__headers {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    & h3 {
      width: #{scaleValue(600)};
    }

    & p {
      width: #{scaleValue(600)};
      font-family: "Space Grotesk", sans-serif;
      font-size: 1.4rem;
      line-height: 2rem;
    }
  }

  &__slidearea {
    margin-top: #{scaleValue(50)};
  }

  &__slidenav {
    display: flex;

    & span {
      display: inline-block;
      border-radius: 3rem;
      height: #{scaleValue(3)};
      width: #{scaleValue(50)};
      background: $primary-orange;
      margin-right: #{scaleValue(10)};
      cursor: pointer;

      &.white {
        background: $white;
      }
    }
  }
}
</style>
