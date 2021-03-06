<template>
  <div class="fixed top-0 float-left p-3 h-17 z-10 left-0 items-center hover:opacity-75 sm:float-none sm:static">
    <!-- sun / moon svg icons -->
    <client-only>
      <transition-group name="toggleFade">
        <button
          v-show="prefersDarkMode"
          key="sunToggle"
          ref="sunToggle"
          aria-label="toggle on light mode"
          class="relative left-0 p-1 rounded-sm focus:outline-none focus:shadow-outline-light dark:focus:shadow-outline-dark"
          @click="toggleDarkMode()"
        >
          <sun-icon />
        </button>
        <button
          v-show="!prefersDarkMode"
          key="moonToggle"
          ref="moonToggle"
          aria-label="toggle on dark mode"
          class="relative left-0 p-1 rounded-sm focus:outline-none focus:shadow-outline-light dark:focus:shadow-outline-dark"
          @click="toggleDarkMode()"
        >
          <moon-icon />
        </button>
      </transition-group>
    </client-only>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { mapState } from "vuex";

import MoonIcon from "../widgets/svg/MoonIcon.vue";
import SunIcon from "../widgets/svg/SunIcon.vue";

import { getCookieValue, isDarkModePreferred, doesColorSchemeCookieExist, setCookieValue } from "../../composables/cookieUtils";

export default defineComponent({
  components: {
    MoonIcon,
    SunIcon,
  },
  props: {
    cookieKey: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapState([
      "prefersDarkMode",
    ]),
  },
  beforeMount() {
    const cookieKey = this.cookieKey;
    const documentHasColorModeCookie : boolean = doesColorSchemeCookieExist(cookieKey);
    let isDarkModeByDefault = false;
    
    if (documentHasColorModeCookie) {
      const cookieValue = getCookieValue(cookieKey);
      isDarkModeByDefault = cookieValue === "dark";
    } else {
      isDarkModeByDefault = isDarkModePreferred();
      const newCookieValue = isDarkModeByDefault ? "dark" : "light";
      setCookieValue(cookieKey, newCookieValue);
    }
    this.$store.commit("setPrefersDarkMode", isDarkModeByDefault);
  },
  methods: {
    toggleDarkMode(): void {
      // change data value, add/remove dark-mode class, then focus on the newly visible svg icon
      this.$store.commit("toggleDarkMode");
      const htmlElement = document.querySelector("html");
      if (htmlElement != null) {
        if (this.prefersDarkMode) {
          htmlElement.classList.add("dark");
          setCookieValue(this.cookieKey, "dark");
        } else {
          htmlElement.classList.remove("dark");
          setCookieValue(this.cookieKey, "light");
        }
      }
      this.$nextTick(() => {
        if (this.prefersDarkMode) {
          const sunToggle = this.$refs.sunToggle as HTMLElement;
          sunToggle.focus();
        } else {
          const moonToggle = this.$refs.moonToggle as HTMLElement;
          moonToggle.focus();
        }
      });
    },
  },
});
</script>

<style scoped>
/* CHECKBOX TOGGLE SWITCH */
/* @apply rules for documentation, these do not work as inline style */
.toggle-checkbox:checked {
  @apply right-0;
}
.toggle-checkbox {
  @apply absolute inline-block align-middle w-5 h-5 border-2 border-gray-400 rounded-full bg-white appearance-none cursor-pointer;
  right: 1.25rem;
  transition: right 0.4s ease;
}
.toggle-checkbox:checked + .toggle-label {
  @apply bg-purple-400;
}

.toggleFade-enter-active {
  display: block;
  transition: opacity 0.2s ease-in;
}
.toggleFade-leave-active {
  display: none;
  transition: opacity 0.2s ease-out;
}
.toggleFade-enter,
.toggleFade-leave-to {
  opacity: 0;
}
</style>
