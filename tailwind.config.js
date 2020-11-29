module.exports = {
  purge: {
    content: ["./components/**/*.vue", "./layouts/**/*.vue", "./pages/**/*.vue"],
  },
  darkMode: "class",
  theme: {
    fontFamily: {
      default: "'Avenir', Helvetica, Arial, sans-serif;",
    },
    extend: {
      spacing: {
        "17": "4.25rem",
      },
      boxShadow: {
        "outline-light": "0 0 0 3px #22D3EE", // cyan-400
        "outline-dark": "0 0 0 3px #67E8F9", // cyan-300
        // box-shadow: inset 0 -0.125em 0 0 #fff, inset 0 -0.375em 0 0 rgba(165,243,252,.4);
      },
      // soft-black, emerald, cyan are used. others are from the tailwind 2.0 palette for experimentation
      colors: {
        "soft-black": "#121212",
        emerald: {
          50: "#ECFDF5",
          100: "#D1FAE5",
          200: "#A7F3D0",
          300: "#6EE7B7",
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
          700: "#047857",
          800: "#065F46",
          900: "#064E3B",
        },
        cyan: {
          50: "#ECFEFF",
          100: "#CFFAFE",
          200: "#A5F3FC",
          300: "#67E8F9",
          400: "#22D3EE",
          500: "#06B6D4",
          600: "#0891B2",
          700: "#0E7490",
          800: "#155E75",
          900: "#164E63",
        },
        lightblue: {
          50: "#F0F9FF",
          100: "#E0F2FE",
          200: "#BAE6FD",
          300: "#7DD3FC",
          400: "#38BDF8",
          500: "#0EA5E9",
          600: "#0284C7",
          700: "#0369A1",
          800: "#075985",
          900: "#0C4A6E",
        },
        indigo: {
          50: "#EEF2FF",
          100: "#E0E7FF",
          200: "#C7D2FE",
          300: "#A5B4FC",
          400: "#818CF8",
          500: "#6366F1",
          600: "#4F46E5",
          700: "#4338CA",
          800: "#3730A3",
          900: "#312E81",
        },
        violet: {
          50: "#F5F3FF",
          100: "#EDE9FE",
          200: "#DDD6FE",
          300: "#C4B5FD",
          400: "#A78BFA",
          500: "#8B5CF6",
          600: "#7C3AED",
          700: "#6D28D9",
          800: "#5B21B6",
          900: "#4C1D95",
        },
        rose: {
          50: "#FFF1F2",
          100: "#FFE4E6",
          200: "#FECDD3",
          300: "#FDA4AF",
          400: "#FB7185",
          500: "#F43F5E",
          600: "#E11D48",
          700: "#BE123C",
          800: "#9F1239",
          900: "#881337",
        },
      },
    },
  },
  variants: {
    boxShadow: ["responsive", "dark", "group-hover", "focus-within", "hover", "focus"],
    cursor: ["responsive", "hover", "disabled"],
    opacity: ["responsive", "group-hover", "focus-within", "hover", "disabled"],
    padding: ["responsive", "disabled"],
  },
  plugins: [],
};
