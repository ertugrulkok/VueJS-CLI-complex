<template>
  <div>
    <header v-if="$slots.header">
      <!-- header slot -->
      <slot name="header">
      
<!--         <h1>The default header</h1> -->
      </slot>
    </header>
    <!-- default slot   -->
    <slot name="sepcial">
      <h1>Default value</h1>
    </slot>
    <slot></slot>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$slots)
  }
};
</script>

<style scoped>
div {
  border-radius: 15px;
  padding: 1rem;
  margin: 1rem auto;
  width: 500px;
  text-align: left;
  box-shadow: 4px 2px 7px 1px rgba(199, 0, 0, 0.76);
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: red; */
  /*  background-color: bisque; */
}

</style>
