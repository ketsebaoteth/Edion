<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { menu_tree } from "../../main/titlebar";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
} from '@/components/ui/menubar'

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
    <!-- <div v-for="(menu, menu_i) in menu_tree" :key="menu_i" @click="menuClicked(menu, $event)" @blur="resetActiveMenu">
      <h1>{{ menu.label }}</h1>
      <div class="submenu" v-if="menu.label == activemenu">
        <subMenuListVue :submenulist="menu.submenus" />
      </div>
    </div> -->
    <Menubar v-for="(menu,menuindex) in menu_tree" :key="menuindex" class="menus">
      <MenubarMenu>
        <MenubarTrigger class="cursor-pointer">{{menu.label}}</MenubarTrigger>
        <MenubarContent>
          <div class="menufather"  v-for="(menuitem,menuitemindex) in menu.submenus" :key="menuitemindex">
            <MenubarItem v-if="!menuitem.subsubmenus">
              {{menuitem.label}}
              <MenubarShortcut v-if="menuitem.shortcut">⌘{{menuitem.shortcut}}</MenubarShortcut>
            </MenubarItem>
            <MenubarSub v-if="menuitem.subsubmenus">
              <MenubarSubTrigger>
                {{menuitem.label}}
              </MenubarSubTrigger>
              <MenubarSubContent>
                <div class="subfather" v-for="(submenus, submenuindex) in menuitem.subsubmenus" :key="submenuindex">
                  <MenubarItem >
                    {{submenus.label}}
                  <MenubarShortcut v-if="submenus.shortcut">⌘{{submenus.shortcut}}</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator v-if="submenus.bottomSeparator"></MenubarSeparator>
                </div>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator v-if="menuitem.bottomSeparator"></MenubarSeparator>
          </div>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  </div>
</template>

<style scoped lang="scss">
@import "../styles/colors";
@import "../styles/variables";

.titlebar {
  background-color: $background-base;
  border-bottom: 1px solid $border-base;
  gap: 0px !important;
  .menus{
    @apply h-8 border-none;
  }
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
</style>