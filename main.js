"use strict";

(() => {

    setInterval(() => {
        const now = new Date();
        document.title = "Time: " + now.toLocaleTimeString();
    }, 1000);

})();