<script>
  export default {
    data() {
      return { showAnswer: null };
    },
    emits: { 'clicked-question': null },
    props: {
      item: { type: Object, default: null },
      title: { type: String, default: '' }
    },
    methods: {
      onClick(item) {
        this.showAnswer = item.title;
        this.$emit('clicked-question', item);
      }
    }
  };
</script>
<template>
  <section class="container-white container-example">
    <h3>{{ title }}</h3>
    <div class="container-white container-div">
      <p>{{ item.question }}</p>
      <input
        class="buttonColor"
        type="button"
        value="Visa rätt svar"
        @click="onClick(item)"
      />
      <p class="exampleAnswer" v-if="showAnswer === item.title">
        {{ item.answer }}
      </p>
    </div>
  </section>
</template>
