<script>
export default {
  props: {
    msg: String,
  },
};
</script>

<template>
  <img alt="" src="/assets/icon-hesa-fredrik.png" />
  <p>{{ msg }}</p>
</template>

<style>
p {
  font-weight: bold;
}
</style>
