// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Dailz - Minimal day planner",
      meta: [
        {
          name: "description",
          content:
            "The best way to create the future, is to plan it. Dailz is a minimal, but beautiful day planner. That helps you focus on what you need to get done.",
        },
      ],
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode", "@nuxtjs/supabase"],
  colorMode: {
    classSuffix: "",
  },
});
