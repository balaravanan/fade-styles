export function add_hooks(id, suggestedclassName, pf) {
    const ids = id;
    window.addEventListener("load", function () {
      var element = document.querySelector("#" + id);
      try {
        var position = element.getBoundingClientRect();
        if (pf) {
          if (position.top >= 0 && position.bottom <= window.innerHeight) {
            // console.log("Element is fully visible in screen");
            var ele = document.getElementById(ids);
            if (!ele.className.includes(suggestedclassName)) {
              ele.className += " " + suggestedclassName;
            }
          }
        } else {
          if (position.top < window.innerHeight && position.bottom >= 0) {
            // console.log("Element is partially visible in screen");
            var ele = document.getElementById(ids);
            if (!ele.className.includes(suggestedclassName)) {
              ele.className += " " + suggestedclassName;
            }
          }
        }
      } catch (e) {
        console.log(e);
      }
    });
    window.addEventListener("scroll", function () {
      var element = document.querySelector("#" + id);
      try {
        var position = element.getBoundingClientRect();
        if (pf) {
          if (position.top >= 0 && position.bottom <= window.innerHeight) {
            // console.log("Element is fully visible in screen");
            var ele = document.getElementById(ids);
            if (!ele.className.includes(suggestedclassName)) {
              ele.className += " " + suggestedclassName;
            }
          }
        } else {
          if (position.top < window.innerHeight && position.bottom >= 0) {
            // console.log("Element is partially visible in screen");
            var ele = document.getElementById(ids);
            if (!ele.className.includes(suggestedclassName)) {
              ele.className += " " + suggestedclassName;
            }
          }
        }
      } catch (e) {
        console.log(e);
      }
    });
    return () => {
      window.removeEventListener("scroll");
      window.removeEventListener("load");
    };
  }
  