<template>
  <dialog open>
    <slot></slot>
  </dialog>
</template>

<style scoped>
dialog {
  position: fixed;
  top: 15%;
  left: 40%;
  transform: translateX(-100%);
  width: 320px;
  background-color: white;
  box-shadow: 0px 0px 9px 3px #ffe2a6;
  padding: 1rem; 
}
</style>
