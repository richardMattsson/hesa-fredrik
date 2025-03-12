<script>
  export default {
    props: {
      inputText: { type: Object, default: null }
    }
  };
</script>
<template>
  <section class="section-intro">
    <h2 class="tutorial-h2">{{ inputText.title }}</h2>
    <p>
      {{ inputText.text }}
    </p>
    <p>
      {{ inputText.text2 }}
    </p>
    <p>
      {{ inputText.text3 }}
    </p>
  </section>
</template>
