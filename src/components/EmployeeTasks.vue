<template>
  <ul>
    <li v-for="task in tasks" :key="task">
      <slot :item="task" :andereProp="hasan"></slot>
    </li>
  </ul>
  <ul>
    <li v-for="age in alter" :key="age">
        <slot name="age" :slotAge="age"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      hasan: "Hasan Sakalli",
      tasks: [
        "Build a Contact Form",
        "Build a Menubar",
        "Provide Legal Stuff",
        "Build a Search Function",
      ],
      alter: [23, 24, 25, 26],
    };
  },
};
</script>

<style scoped>
ul {
  text-align: left;
}
</style>
