// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Dailz - Minimal day planner",
      meta: [
        {
          name: "description",
          content:
            "Minimal, but beautiful day planner. Focus on what you need to get done.",
        },
      ],
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode", "@nuxtjs/supabase"],
  colorMode: {
    classSuffix: "",
  },
});
