document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector('.sidebar');
  if (!sidebar) return;

  const items = sidebar.querySelectorAll('li');
  const overviewSection = document.querySelector('.overview-section');
  
  function updateStageContent(stageKey) {
    // Handle Overview separately
    if (stageKey === 'Overview') {
      if (overviewSection) {
        overviewSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }

    // Update content for regular stages
    const promptsData = (typeof SDLC_PROMPTS !== 'undefined') ? SDLC_PROMPTS : (window.SDLC_PROMPTS || null);
    if (!promptsData) return;
    const data = promptsData[stageKey];
    if (!data) return;

    const section = document.querySelector(`#section-${stageKey}`);
    if (section) {
      const heading = section.querySelector('h2');
      const desc = section.querySelector('p');
      const promptBox = section.querySelector('.prompt-box');

      if (heading) heading.textContent = data.title || stageKey;
      if (desc) desc.textContent = data.description || '';
      if (promptBox) {
        const promptTitle = promptBox.querySelector('.prompt-title');
        const pre = promptBox.querySelector('pre');
        if (promptTitle) promptTitle.textContent = 'Prompt Template';
        if (pre) pre.textContent = (data.prompts && data.prompts[0]) || '';
      }

      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Sidebar item click handler
  items.forEach((li) => {
    li.addEventListener('click', () => {
      items.forEach((i) => i.classList.remove('active'));
      li.classList.add('active');

      const stage = li.dataset.stage;
      if (stage) updateStageContent(stage);
    });
  });

  // Stage card click handler
  const stageCards = document.querySelectorAll('.stage-card');
  stageCards.forEach((card) => {
    card.addEventListener('click', () => {
      const stage = card.dataset.stage;
      if (stage) {
        const sidebarItem = sidebar.querySelector(`li[data-stage="${stage}"]`);
        if (sidebarItem) {
          sidebarItem.click();
        }
      }
    });
  });

  // Populate all stage sections with data on load
  const promptsData = (typeof SDLC_PROMPTS !== 'undefined') ? SDLC_PROMPTS : (window.SDLC_PROMPTS || null);
  if (promptsData) {
    Object.keys(promptsData).forEach((stageKey) => {
      const data = promptsData[stageKey];
      const section = document.querySelector(`#section-${stageKey}`);
      if (section) {
        const heading = section.querySelector('h2');
        const desc = section.querySelector('p');
        const promptBox = section.querySelector('.prompt-box');

        if (heading) heading.textContent = data.title || stageKey;
        if (desc) desc.textContent = data.description || '';
        if (promptBox) {
          const promptTitle = promptBox.querySelector('.prompt-title');
          const pre = promptBox.querySelector('pre');
          if (promptTitle) promptTitle.textContent = 'Prompt Template';
          if (pre) pre.textContent = (data.prompts && data.prompts[0]) || '';
        }
      }
    });
  }

  // Intersection Observer for scroll-based auto-navigation
  const observerOptions = {
    threshold: 0.3,
    rootMargin: '-50% 0px -50% 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.id;
        
        // Extract stage name from section ID
        let stageName = sectionId.replace('section-', '');
        
        // Remove active class from all sidebar items
        items.forEach((li) => li.classList.remove('active'));
        
        // Add active class to matching sidebar item
        const activeItem = sidebar.querySelector(`li[data-stage="${stageName}"]`);
        if (activeItem) {
          activeItem.classList.add('active');
        }
      }
    });
  }, observerOptions);

  // Observe all sections
  const sections = document.querySelectorAll('[id^="section-"]');
  sections.forEach((section) => observer.observe(section));
  
  // Also observe overview section
  if (overviewSection) {
    const overviewObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          items.forEach((li) => li.classList.remove('active'));
          const overviewItem = sidebar.querySelector('li[data-stage="Overview"]');
          if (overviewItem) {
            overviewItem.classList.add('active');
          }
        }
      });
    }, observerOptions);
    overviewObserver.observe(overviewSection);
  }

  // Initialize with Requirements section active
  const requirementsItem = sidebar.querySelector('li[data-stage="Requirements"]');
  if (requirementsItem) {
    requirementsItem.classList.add('active');
  }
});
