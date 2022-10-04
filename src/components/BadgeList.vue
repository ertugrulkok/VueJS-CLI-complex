<template>
  <section>
    <base-card>
      <template #header> <h1>Verfügbare Badges</h1></template>
      <template #default>
        <ul>
          <li>
            <base-badge role-badge="admin" caption="ADMIN"></base-badge>
          </li>
          <li>
            <base-badge role-badge="developer" caption="DEVELOPER"></base-badge>
          </li>
          <li>
            <base-badge role-badge="manager" caption="MANAGER"></base-badge>
          </li>
        </ul>
      </template>
      <template #special>
        <h2>Special Slot</h2>
      </template>
    </base-card>
  </section>
</template>

<style scoped>
section h1 {
  margin: 0.5rem 0;
  color: #3a3a3a;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
}

li {
  margin-right: 1rem;
}
</style>
