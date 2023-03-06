// document.addEventListener("DOMContentLoaded", (e) => {
//   const includeHTML = (el, url) => {
//     const xhr = new XMLHttpRequest();

//     xhr.addEventListener("readystatechange", (e) => {
//       if (xhr.readyState !== 4) return;

//       if (xhr.status >= 200 && xhr.status < 300) {
//         el.outerHTML = xhr.responseText;
//       } else {
//         let message =
//           xhr.statusText ||
//           "Error loading the file, verify that you are making the request by http or https";
//         el.outerHTML = `<div><p>Error ${xhr.status}: ${message}</p></div>`;
//       }
//     });

//     xhr.open("GET", url);
//     xhr.setRequestHeader("Content-type", "text/html; charset=utf-8");
//     xhr.send();
//   };

//   document
//     .querySelectorAll("[data-include]")
//     .forEach((el) => includeHTML(el, el.getAttribute("data-include")));
// });

// document.addEventListener("DOMContentLoaded", (e) => {
//   const includeHTML = (el, url) => {
//     fetch(url)
//       .then(response => {
//         if (response.ok) {
//           return response.text();
//         } else {
//           throw new Error("Error loading the file, verify that you are making the request by http or https");
//         }
//       })
//       .then(html => {
//         el.outerHTML = html;
//       })
//       .catch(error => {
//         el.outerHTML = `<div><p>Error: ${error.message}</p></div>`;
//       });
//   };

//   document
//     .querySelectorAll("[data-include]")
//     .forEach((el) => includeHTML(el, el.getAttribute("data-include")));
// });

//U S I N     F E T C H

// document.addEventListener("DOMContentLoaded", (e) => {
//   const includeHTML = async (el, url) => {
//     try {
//       const response = await fetch(url);
//       if (response.ok) {
//         const html = await response.text();
//         el.outerHTML = html;
//       } else {
//         throw new Error("Error loading the file, verify that you are making the request by http or https");
//       }
//     } catch (error) {
//       el.outerHTML = `<div><p>Error: ${error.message}</p></div>`;
//     }
//   };

//   document
//     .querySelectorAll("[data-include]")
//     .forEach((el) => includeHTML(el, el.getAttribute("data-include")));
// });


// U S I N G     A S Y N C / A W A I T 
document.addEventListener("DOMContentLoaded", (e) => {
  const includeHTML = (el, url) => {
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error("Error loading the file, verify that you are making the request by http or https");
        }
      })
      .then(html => {
        el.outerHTML = html;
      })
      .catch(error => {
        el.outerHTML = `<div><p>Error: ${error.message}</p></div>`;
      });
  };

  document
    .querySelectorAll("[data-include]")
    .forEach((el) => includeHTML(el, el.getAttribute("data-include")));
});