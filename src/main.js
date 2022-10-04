import { createApp } from "vue";
import App from "./App.vue";

import TheHeader from "./components/layout/TheHeader.vue";
import BaseBadge from "./components/UserInterface/BaseBadge.vue";
import BaseCard from "./components/UserInterface/BaseCard.vue";

const app = createApp(App);

app.component("the-header", TheHeader);
app.component("base-badge", BaseBadge);
app.component("base-card", BaseCard);

app.mount("#app");
