const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    
    projectId: "9kb3vf",
    baseUrl:'https://buger-eats-qa.vercel.app', 
    viewportWidth: 1440, viewportWidth: 900    

  },
});
