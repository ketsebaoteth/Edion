<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { menuBarStructure } from "../../main/titlebar";
import { state } from "../state/state";
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
import ScrollArea from "../ui/scroll-area/ScrollArea.vue";


//makes the window fullscreen handles electron too cause i am thinking of expanding there too in the future
function go_fullscreen() {
  state.windowIsFullscreen = true;
  if (window && window.process && window.process.type === "renderer") {
    require("electron").remote.getCurrentWindow().setFullScreen(true);
  } else {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
  }
}
//exit full screen
function exit_fullscreen(){
  state.windowIsFullscreen = false;
  if (window && window.process && window.process.type === "renderer") {
    require("electron").remote.getCurrentWindow().setFullScreen(false);
  } else {
    document.exitFullscreen();
  }
}
</script>

<template>
  <div class="titlebar w-screen h-10">
    <Menubar v-for="(menu,menuindex) in menuBarStructure" :key="menuindex" class="menus">
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
                    <Img v-if="submenus.icon" :src="submenus.icon" class="w-5 h-5 mr-2"></Img>
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
    <button v-if="!state.windowIsFullscreen" class="ml-auto" @click="go_fullscreen">
      <img src="../icons/titlebar/go_fullscreen.svg" alt="">
    </button>
    <button v-if="state.windowIsFullscreen">
      <img src="../icons/titlebar/exit_fullscreen.svg" alt="" @click="exit_fullscreen">
    </button>
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
    font-size: $text-base;
  }
  @apply flex place-items-center px-2 gap-4;
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