// jest.config.js
module.exports = {
    testEnvironment: process.env.REACT_APP_CUSTOM_OPTION ? 'your-custom-environment' : 'jsdom',
    // outras configurações do Jest...
  };
  