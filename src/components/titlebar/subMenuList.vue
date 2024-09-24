<script setup>
import { onMounted, onBeforeUnmount } from "vue";

const props = defineProps({
  submenulist: {
    type: Array,
    default: []
  }
});
</script>

<template>
  <div class="sub min-w-20 min-h-20 bg-black z-50">
    <div class="submenuitem" v-for="(item, itemindex) in props.submenulist" :key="itemindex">
      <div class="menuitem" @click="item.labelCallback">
        <h2 class="submenu-label">{{ item.label }}</h2>
        <h3 class="shortcut-text flex place-items-center gap-1" v-if="item.shortcut">
          <span class="text-lg">⌘</span>{{ item.shortcut }}
        </h3>
      </div>
      <div class="separator w-full h-[1px] bg-white" v-if="item.bottomSeparator"></div>
      <!-- Sub-submenu list -->
      <div v-if="item.submenu" class="subsubmenu">
        <sub-menu-list :submenulist="item.submenu"></sub-menu-list>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/colors";
@import "../styles/variables";

.sub {
  position: absolute;
  border: 1px solid $border-base;
  @apply top-11 rounded;

  .submenuitem {
    .menuitem {
      @apply w-56 h-8 cursor-pointer flex place-items-center px-2 m-1 rounded;

      &:hover {
        background-color: $background-base-hover;
      }

      .submenu-label {
        color: $text-base;
        font-size: $titlebar-sub-fsize;
        user-select: none;
      }

      .shortcut-text {
        color: $submenu-shortcut;
        font-size: $shortcut-fsize;
        @apply ml-auto;
      }
    }

    .separator {
      background-color: $separator-color;
    }

    .subsubmenu {
      position: absolute;
      left: 100%;
      top: 0;
      @apply mt-1;
    }
  }
}
</style>