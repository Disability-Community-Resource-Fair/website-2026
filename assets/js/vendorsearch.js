import { highlightSearchTerm } from "./highlight-search-term.js";

document.addEventListener("DOMContentLoaded", function () {
  // actual vendorsearch logic
  const filterItems = (searchTerm, list_selctor, list_item) => {
    document.querySelectorAll(`${list_selctor}>${list_item}`).forEach((element) => {
      element.classList.remove("unloaded");
      element.querySelector('h3').removeAttribute('data-toc-skip');
    } );

    document.querySelectorAll(`${list_selctor}>${list_item} h3`).forEach((element) => {
      element.removeAttribute('data-toc-skip');
    });

    // if (!searchTerm) return;

    // highlight-search-term
    if (CSS.highlights) {
      const nonMatchingElements = highlightSearchTerm({ search: searchTerm, selector: `${list_selctor}>${list_item}` });
      
      if (!nonMatchingElements) {
        return;
      }
      nonMatchingElements.forEach((element) => {
        element.classList.add("unloaded");
        element.querySelector('h3').setAttribute('data-toc-skip', '');
      });
      const sidebar = $("#toc-sidebar");
      sidebar.empty();
      Toc.init(sidebar);

    } else {
      // Simply add unloaded class to all non-matching items if Browser does not support CSS highlights
      document.querySelectorAll(`${list_selctor} > ${list_item}`).forEach((element, index) => {
        const text = element.innerText.toLowerCase();
        if (text.indexOf(searchTerm) == -1) {
          element.classList.add("unloaded");
        }
      });
    }

    // document.querySelectorAll("h2.vendor_list").forEach(function (element) {
    //   let iterator = element.nextElementSibling; // get next sibling element after h2, which can be h3 or ol
    //   let hideFirstGroupingElement = true;
    //   // iterate until next group element (h2), which is already selected by the querySelectorAll(-).forEach(-)
    //   while (iterator && iterator.tagName !== "H2") {
    //     if (iterator.tagName === "OL") {
    //       const ol = iterator;
    //       const unloadedSiblings = ol.querySelectorAll(":scope > li.unloaded");
    //       const totalSiblings = ol.querySelectorAll(":scope > li");

    //       if (unloadedSiblings.length === totalSiblings.length) {
    //         ol.previousElementSibling.classList.add("unloaded"); // Add the '.unloaded' class to the previous grouping element (e.g. year)
    //         ol.classList.add("unloaded"); // Add the '.unloaded' class to the OL itself
    //       } else {
    //         hideFirstGroupingElement = false; // there is at least some visible entry, don't hide the first grouping element
    //       }
    //     }
    //     iterator = iterator.nextElementSibling;
    //   }
    //   // Add unloaded class to first grouping element (e.g. year) if no item left in this group
    //   if (hideFirstGroupingElement) {
    //     element.classList.add("unloaded");
    //   }
    // });
  };

  // const updateInputField = () => {
  //   const hashValue = decodeURIComponent(window.location.hash.substring(1)); // Remove the '#' character
  //   document.getElementById("vendorsearch").value = hashValue;
  //   filterItems(hashValue, "#toc-sidebar > .nav", "li");
  //   filterItems(hashValue, ".vendor_list", "div");
  // };

  // Sensitive search. Only start searching if there's been no input for 300 ms
  let timeoutId;
  document.getElementById("vendorsearch").addEventListener("input", function () {
    clearTimeout(timeoutId); // Clear the previous timeout
    const searchTerm = this.value.toLowerCase();
    timeoutId = setTimeout(() => {
      // filterItems(searchTerm, "#toc-sidebar > .nav", "li");
      filterItems(searchTerm, ".vendor_list", "div");

    }, 300);
  });

  // window.addEventListener("hashchange", updateInputField); // Update the filter when the hash changes

  // updateInputField(); // Update filter when page loads
});
