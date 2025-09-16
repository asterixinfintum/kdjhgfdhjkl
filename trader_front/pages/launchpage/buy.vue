<template>
  <div>
    <div class="launchpagebuy">
      <HeaderLanding :coloredbackground="true" />

      <div class="launchpagebuy__content">
        <AssetSwap />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.launchpagebuy {
  &__content {
    display: flex;
    justify-content: center;
    min-height: 100vh;
    padding-top: #{scaleValue(170)};
    padding-left: #{scaleValue(170)};
    padding-right: #{scaleValue(170)};

    @media only screen and (max-width: 1024px) {
      padding-top: #{scaleValue(600)};
    }
  }
}
</style>
