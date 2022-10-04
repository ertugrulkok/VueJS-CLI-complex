<template>
  <span class="badge" :class="classes">{{ caption }}</span>
</template>

<script>
export default {
  props: ["roleBadge", "caption"],
  computed: {
    classes() {
      return {
        "badge--developer": this.roleBadge === "developer",
        "badge--admin": this.roleBadge === "admin",
        "badge--manager": this.roleBadge === "manager",
      };
    },
  },
};
</script>

<style scoped>
.badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  background-color: #ccc;
  color: #2e2e2e;
 font-size: 13px;
}



.badge--admin {
  background-color: #810036;
  color: white;
}

.badge--developer {
  background-color: rgb(115, 144, 250);
  color: white;
}

.badge--manager {
  background-color: rgb(2, 186, 2);
  color: white;
}
</style>
