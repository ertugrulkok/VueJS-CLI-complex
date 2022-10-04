<template>
  <div class="main-container">
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      :name-p="activeUser.name"
      :role-p="activeUser.role"
      :task-p="activeUser.tasks"
    ></user-info>
    <base-card>
      <template #default>
        <h1>Hallo</h1>
      </template>
      <!--  <template #sepcial>
      <p>I am a sepcial slot</p>
    </template> -->
    </base-card>
    <!-- scoped slots -->
    <!-- name von slotProps kann auch anders heißen -->
    <!-- <employee-tasks>
      <template #default="metehansSlotProps">
        <h2>{{ metehansSlotProps.item }}</h2>
        <p>{{ metehansSlotProps["andereProp"] }}</p>
      </template>
      <template #age="zweiterSlot">
        <h3>{{ zweiterSlot.slotAge }}</h3>
      </template>
    </employee-tasks> -->
    <!-- scoped slot end -->
    <button @click="setSelectedTab('CurrentTasks')">Current Tasks</button>
    <button @click="setSelectedTab('manage-tasks')">Manage Tasks</button>
    <!--  <button @click="setSelectedTab('badge-list')">BadgeList</button> -->
    <!--  <current-tasks v-if="selectedTab == 'current-tasks'"></current-tasks>
    <manage-tasks v-if="selectedTab == 'manage-tasks'"></manage-tasks> -->
    <keep-alive>
      <component :is="selectedTab"></component>
    </keep-alive>
  </div>
</template>

<script>
import UserInfo from "./components/UserInfo.vue";
import BadgeList from "./components/BadgeList.vue";
//import EmployeeTasks from "./components/EmployeeTasks.vue";
import ManageTasks from "./components/ManageTasks.vue";
import CurrentTasks from "./components/CurrentTasks.vue";

export default {
  name: "App",

  components: {
    UserInfo,
    BadgeList,
    ManageTasks,
    CurrentTasks,
    // EmployeeTasks,
  },
  data() {
    return {
      selectedTab: "current-tasks",
      activeUser: {
        id: 1,
        name: "Max Mustermann",
        tasks: "develop & maintain the webpage",
        role: "developer",
      },
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
      // console.log("selecedTab " + tab);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
