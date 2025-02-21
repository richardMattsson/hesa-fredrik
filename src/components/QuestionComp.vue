<!-- Main component for section-question and content -->
<script>
export default {
  props: {
    results: { type: Array },
    index: { type: Number },
    // question: { type: String },
  },
};
</script>
<template>
  <section class="section-question">
    <p id="question">{{ results[index].question }}</p>
    <!-- <p>{{ question }}</p> -->
  </section>
</template>
<style>
.section-question {
  grid-area: 1 / 1 / span 1 / span 3;
  font-size: 1.3rem;
  padding: 10px;
  font-weight: 400;
}
#question {
  font-size: 1.5rem;
}
</style>
