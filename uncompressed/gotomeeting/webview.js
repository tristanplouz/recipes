"use strict";

const path = require('path');

module.exports = Franz => {
  Franz.injectCSS(path.join(__dirname, 'service.css'));
  if(document.location.href.match("after")){
    	document.location.href="https://app.gotomeeting.com/home.html";
    }
};
