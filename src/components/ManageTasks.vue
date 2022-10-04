<template>
  <div class="taskmanager">
    <h1>Manage Tasks</h1>
    <input type="text" ref="task" />
    <button @click="setTask">Set Task</button>
    <teleport to="body">
      <error-message v-if="inputIsInvalid">
        <h2>Ungültige Eingabe</h2>
        <p>Bitte trage einige Zeichen ein in das Eingabefeld</p>
        <button @click="this.inputIsInvalid = false">X</button>
      </error-message>
    </teleport>
  </div>
</template>

<script>
import ErrorMessage from "./ErrorMessage.vue";
export default {
  name: "ManageTasks",
  components: {
    ErrorMessage,
  },
  data() {
    return {
      inputIsInvalid: false,
    };
  },
  methods: {
    setTask() {
      const enteredValue = this.$refs.task.value;
      if (enteredValue == "") {
        this.inputIsInvalid = true;
      }
    },
  },
};
</script>

<style scoped>
.taskmanager {
  padding: 1rem;
  border: 3px dashed darkcyan;
  width: fit-content;
  margin: auto;
}
</style>
