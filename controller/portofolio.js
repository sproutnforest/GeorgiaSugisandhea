const container = document.getElementById("scrollContainer");
const items = container.querySelectorAll(".scroll-item");
let lastHighlightedValue = null;

function highlightCenterItem() {
  const containerRect = container.getBoundingClientRect();
  const centerY = containerRect.top + containerRect.height / 2;

  let closestItem = null;
  let closestDistance = Infinity;

  items.forEach(item => {
    const itemRect = item.getBoundingClientRect();
    const itemCenter = itemRect.top + itemRect.height / 2;
    const distance = Math.abs(centerY - itemCenter);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestItem = item;
    }
  });

  items.forEach(item => item.classList.remove("active"));
  if (closestItem) {
    closestItem.classList.add("active");

    const currentValue = closestItem.textContent.trim();
    if (currentValue !== lastHighlightedValue) {
      lastHighlightedValue = currentValue;
      console.log("New highlighted item:", currentValue);
      if(currentValue === "VICARA -  Designer & Documenter"){
        const iframe = document.getElementById("expFrame");
        iframe.src = "vicara.html";
      }
      else if(currentValue === "Bonibot - Software Engineer"){
        const iframe = document.getElementById("expFrame");
        iframe.src = "bonibot.html";
      }
      else if(currentValue === "Edubuddy - Software Engineer"){
        const iframe = document.getElementById("expFrame");
        iframe.src = "edubuddy.html";
      }
      else if(currentValue === "Office Werewolf Game - Game Developer"){
        const iframe = document.getElementById("expFrame");
        iframe.src = "werewolf.html";
      }
      else if(currentValue === "Room Booking System - Software Engineer"){
        const iframe = document.getElementById("expFrame");
        iframe.src = "roombooking.html";
      }
      else if(currentValue === "Third place adigraph poster competition - Researcher"){
        const iframe = document.getElementById("expFrame");
        iframe.src = "adigraph.html";
      }
      else{
        const iframe = document.getElementById("expFrame");
        iframe.src = "schoolwebsite.html";
      }
    }
  }
}

container.addEventListener("scroll", () => {
  requestAnimationFrame(highlightCenterItem);
});

items.forEach(item => {
  item.addEventListener("click", () => {
    const containerRect = container.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();
    const offset = itemRect.top - containerRect.top;

    const scrollOffset = offset - container.clientHeight / 2 + item.clientHeight / 2;
    container.scrollBy({ top: scrollOffset, behavior: 'smooth' });
  });
});

highlightCenterItem();
