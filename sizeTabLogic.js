document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll('.size-tab-button');
  const tabContents = document.querySelectorAll('.size-tab-content');
  const sizeHeading = document.querySelector('.selected-size');

  tabButtons.forEach(tabButton => {
    tabButton.addEventListener('click', () => {
      const targetTab = tabButton.getAttribute('data-tab');
      tabButtons.forEach(button => button.classList.remove('active'));
      tabButton.classList.add('active');
      tabContents.forEach(tabContent => {
        tabContent.classList.remove('active');
        if (tabContent.id === targetTab) {
          tabContent.classList.add('active');
        };
      });
      sizeHeading.textContent = 'selected size';
    });
  });

  const sizeButtons = document.querySelectorAll('.size-options button');
  sizeButtons.forEach(sizeButton => {
    sizeButton.addEventListener('click', () => {
      sizeButtons.forEach(btn => btn.classList.remove('selected'));
      sizeButton.classList.add('selected');
      sizeHeading.textContent = sizeButton.textContent;
    });
  });
});

