const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
     
    },
    baseUrl:"https://magento.softwaretestingboard.com/",
    viewportWidth:1000,
    viewportHeight:1000,
    
    video:false, 
    videosFolder: "cypress/videos", 
    videoCompression: 0, 
    trashAssetsBeforeRuns:false, 
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/myReport", // where to save in directory
      overwrite: false,
      html: true,
      json: false,
      timestamp: "mmddyyyy_HHMMss"
  }

  }
  
  
});
