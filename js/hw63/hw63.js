window.pcs = function (id) {
  'use strict';

  function get(id) {
    return document.getElementById(id);
  }

  function setCss(element, property, value) {
    element.style[property] = value;
  }

  function getCss(element, property) {
    //return element.style[property];
    return getComputedStyle(element)[property];
    }
    
    function getRandomColor() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        return `rgb(${r},${g},${b})`;
    }

  const theElem = get(id);

  return {
    /*setCss: (property, value) => setCss(theElem, property, value),
    getCss: property => getCss(theElem, property),*/
    css: function (property, value) {
      if (arguments.length < 2) { // get
        return getCss(theElem, property);
      }
    setCss(theElem, property, value);
      return this;
    },
    click: function (callback) {
      theElem.addEventListener('click', callback);
      return this;
    },
    hide: function () {
      setCss(theElem, 'display', 'none');
      return this;
    },
    show: function () {
      setCss(theElem, 'display', 'block');
      return this;
      },
    flashColor: function (duration = 5000 ) {
        
        const originalColor = getCss(theElem, 'color');
        const flashInterval = setInterval(() => setCss(theElem, 'color', getRandomColor()));
        setTimeout(() => {
          clearInterval(flashInterval);
          setCss(theElem, 'color', originalColor);
        }, duration);
        return this;
    }
  };
};