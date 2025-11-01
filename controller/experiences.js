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
      if(currentValue === "Assistant for Community Service Program - VICARA"){
        const iframe = document.getElementById("expFrame");
        iframe.src = "communityservice.html";
      }
      else if(currentValue === "Member of DPM FTI Untar Development and Administration Division"){
        const iframe = document.getElementById("expFrame");
        iframe.src = "dpmfti.html";
      }
      else if(currentValue === "Head of FTI Open House 2025"){
        const iframe = document.getElementById("expFrame");
        iframe.src = "oh.html";
      }
      else if(currentValue === "Assistant for Community Service Program - Edubot13"){
        const iframe = document.getElementById("expFrame");
        iframe.src = "communityserviceedubot.html";
      }
      else if(currentValue === "Administrative Assistant – Master's Program Establishment"){
        const iframe = document.getElementById("expFrame");
        iframe.src = "administrativeassistant.html";
      }
      else if(currentValue === "Prof. Hiroshi Murase Guest Lecture \"Image Recognition for Daily Life\" Master of Ceremony"){
        const iframe = document.getElementById("expFrame");
        iframe.src = "proflecture.html";
      }
      else if(currentValue === "Catholic Youth various subsections and events crew"){
        const iframe = document.getElementById("expFrame");
        iframe.src = "catholicyouth.html";
      }
      else if(currentValue === "Member of the St. Andrew KTG Catholic Church Youth Affairs Management Division"){
        const iframe = document.getElementById("expFrame");
        iframe.src = "youthaffairs.html";
      }
      else{
        const iframe = document.getElementById("expFrame");
        iframe.src = "adigraph.html";
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
