<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { menu_tree } from "../../main/titlebar";
import subMenuListVue from "./subMenuList.vue";

const activemenu = ref("");

function resetActiveMenu() {
  activemenu.value = "";
}

function menuClicked(menu, event) {
  event.stopPropagation(); // Prevent event from propagating to the document
  // Run callback if there is one
  if (menu.labelCallback) {
    menu.labelCallback();
  }
  // Set menu as active one
  if (activemenu.value == menu.label) {
    // If already enabled disable it
    activemenu.value = "";
  } else {
    activemenu.value = menu.label;
  }
}

function handleClickOutside(event) {
  if (!event.target.closest(".titlebar") && !event.target.closest(".submenu")) {
    resetActiveMenu();
  }
}

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
  <div class="titlebar w-screen h-10">
    <div v-for="(menu, menu_i) in menu_tree" :key="menu_i" @click="menuClicked(menu, $event)" @blur="resetActiveMenu">
      <h1>{{ menu.label }}</h1>
      <div class="submenu" v-if="menu.label == activemenu">
        <subMenuListVue :submenulist="menu.submenus" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../styles/colors";
@import "../styles/variables";

.titlebar {
  background-color: $background-base;
  border-bottom: 1px solid $border-base;
  @apply flex place-items-center px-5 gap-4;
  h1 {
    color: $text-base;
    font-size: $titlebar-font-size;
    user-select: none;
    
    @apply cursor-pointer;
    &:hover {
      color: $text-base-hover;
    }
  }
}

.submenu {
  // Add styles for submenu if needed
}
</style>