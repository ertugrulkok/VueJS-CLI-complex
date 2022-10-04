<template>
  <section>
    <!--  <div> -->
    <base-card>
      <template #header>
        <h3>{{ nameP }}</h3>
        <base-badge
          :role-badge="roleP"
          :caption="roleP.toUpperCase()"
        ></base-badge>
      </template>
      <template #default>
        <p>{{ taskP }}</p>
      </template>
    </base-card>
    <!--  </div> -->
  </section>
</template>

<script>
export default {
  props: ["nameP", "roleP", "taskP"],
  //   props: {
  //     nameP: {
  //       type: String,
  //       required: true,
  //     },
  //   },
};
</script>

<style scoped>
/* section {
  border-radius: 15px;
  padding: 1rem;
  margin: 1rem auto;
  width: 500px;
  text-align: left;
  box-shadow: 4px 2px 7px 1px rgba(199, 0, 0, 0.76);
}
 */
section header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
