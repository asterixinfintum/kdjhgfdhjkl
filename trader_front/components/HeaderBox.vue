<template>
  <div class="headerbox">
    <HeaderAnnouncement :announcement="announcements[0]" />
    <CurrencyEscalator />
    <Header />
  </div>
</template>

<script>
export default {
  data() {
    return {
      announcements: [
        `BSN Token (BSNT) ICO launches Soon!`,
      ],
    };
  },
};
</script>

<style lan="scss" scoped>
.headerbox {
  position: relative;

  z-index: 1000;
}
</style>
