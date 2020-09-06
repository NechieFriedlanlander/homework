(function () {
  "use strict";

  function get(id) {
    return document.getElementById(id);
  }

  function setCss(element, property, value) {
    element.style[property] = value;
  }

  let interval;
  const theButton = get("start");

  let r = 0;
  let g = 0;
  let b = -1;
  const colors = [];
  const INCREMENT = 50;

  function startColors() {
    interval = setInterval(() => {
      b += INCREMENT;
      if (b >= 256) {
        b = 0;

        g += INCREMENT;
        if (g >= 256) {
          g = 0;

          r += INCREMENT;
          if (r >= 256) {
            r = 0;
          }
        }
      }

      setCss(document.body, "backgroundColor", `rgb(${r},${g},${b})`);
      setCss(document.body, "color", `rgb(${b},${g},${r})`);

      const colorTable = get("colors");

      if (!colors.length) {
        colorTable.deleteRow(1);
      }
      const now = new Date();
      console.log(now.toLocaleString());

      const newColor = {
        time: now.toLocaleString(),
        color: `rgb(${r},${g},${b})`,
      };

      colors.push(newColor);

      const newRow = colorTable.insertRow();
      const timeCell = newRow.insertCell();
      const colorCell = newRow.insertCell();

      timeCell.innerHTML = newColor.time;
      colorCell.innerHTML = newColor.color;

      theButton.innerHTML = "stop";
    }, 1000);
  }

  function stopColors() {
    clearInterval(interval);
    interval = null;
    theButton.innerHTML = "start";
  }

  get("start").addEventListener("click", function () {
    if (!interval) {
      startColors();
    } else {
      stopColors();
    }
  });
})();
