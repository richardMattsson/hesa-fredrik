<script>
  export default {
    props: {
      item: { type: Object, default: null }
    }
  };
</script>
<template>
  <section class="container-white section-info">
    <h2 class="tutorial-h2">{{ item.title }}</h2>
    <p>
      {{ item.info }}
    </p>
    <p>
      {{ item.info2 }}
    </p>
    <ul v-if="item.title === 'Kommunikation'">
      <li :key="index" v-for="(itemGoodToHave, index) in item.itemsGoodToHave">
        {{ itemGoodToHave }}
      </li>
    </ul>
  </section>
</template>
<style scoped>
  .container-example {
    margin-top: 20px;
    margin-left: 2rem;
    margin-right: 2rem;
    border: 1px solid #333;
    border-radius: 4px;
  }
  .section-info {
    margin-top: 20px;
    border: 1px solid #333;
    border-radius: 4px;
  }
  .checklist {
    list-style-type: circle;
  }
</style>
