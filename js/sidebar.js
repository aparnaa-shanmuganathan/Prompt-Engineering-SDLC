document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector('.sidebar');
  if (!sidebar) return;

  const items = sidebar.querySelectorAll('li');
  const overviewSection = document.querySelector('.overview-section');
  const content = document.querySelector('.content');
  
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
      const contentDiv = section.querySelector('.stage-content');

      if (heading) heading.textContent = data.title || stageKey;
      if (desc) desc.textContent = data.description || '';
      if (promptBox) {
        const promptTitle = promptBox.querySelector('.prompt-title');
        const pre = promptBox.querySelector('pre');
        if (promptTitle) promptTitle.textContent = 'Prompt Template';
        if (pre) pre.textContent = (data.prompts && data.prompts[0]) || '';
      }
      if (contentDiv && data.content) {
        contentDiv.innerHTML = data.content;
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
        const contentDiv = section.querySelector('.stage-content');

        if (heading) heading.textContent = data.title || stageKey;
        if (desc) desc.textContent = data.description || '';
        if (promptBox) {
          const promptTitle = promptBox.querySelector('.prompt-title');
          const pre = promptBox.querySelector('pre');
          if (promptTitle) promptTitle.textContent = 'Prompt Template';
          if (pre) pre.textContent = (data.prompts && data.prompts[0]) || '';
        }
        if (contentDiv && data.content) {
          contentDiv.innerHTML = data.content;
        }
      }
    });
  }

  // Scroll progress tracker and section visibility detection
  function updateScrollProgress() {
    if (!content) return;
    
    const scrollHeight = content.scrollHeight - content.clientHeight;
    const scrolled = content.scrollTop;
    const scrollProgress = scrollHeight > 0 ? scrolled / scrollHeight : 0;
    
    sidebar.style.setProperty('--scroll-progress', scrollProgress);
    
    // Update sidebar based on visible sections
    updateVisibleSection();
  }

  function updateVisibleSection() {
    const sections = document.querySelectorAll('[id^="section-"], .overview-section');
    let mostVisibleSection = null;
    let maxVisibility = 0;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const sectionHeight = rect.height;
      
      // Calculate how much of the section is visible in viewport
      const visibleTop = Math.max(0, rect.top);
      const visibleBottom = Math.min(window.innerHeight, rect.bottom);
      const visibleHeight = Math.max(0, visibleBottom - visibleTop);
      const visibility = visibleHeight / sectionHeight;

      if (visibility > maxVisibility) {
        maxVisibility = visibility;
        mostVisibleSection = section;
      }
    });

    // Update sidebar if we have a visible section
    if (mostVisibleSection && maxVisibility > 0.1) {
      let stageName = mostVisibleSection.id.replace('section-', '') || 'Overview';
      
      // Remove active class from all sidebar items
      items.forEach((li) => li.classList.remove('active'));
      
      // Add active class to matching sidebar item
      const activeItem = sidebar.querySelector(`li[data-stage="${stageName}"]`);
      if (activeItem) {
        activeItem.classList.add('active');
      }
    }
  }

  // Track content scroll
  if (content) {
    content.addEventListener('scroll', updateScrollProgress);
  }

  // Track window scroll for sections
  window.addEventListener('scroll', updateScrollProgress);
  window.addEventListener('resize', updateScrollProgress);

  // Intersection Observer for scroll-based auto-navigation
  // Note: Primary detection is now handled by updateVisibleSection() for better responsiveness
  const observerOptions = {
    threshold: [0, 0.25, 0.5, 0.75, 1],
    rootMargin: '0px 0px -80% 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    // This serves as a fallback/enhancement to the scroll listener
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio > 0.2) {
        updateScrollProgress();
      }
    });
  }, observerOptions);

  // Observe all sections
  const sections = document.querySelectorAll('[id^="section-"]');
  sections.forEach((section) => observer.observe(section));
  
  // Also observe overview section
  if (overviewSection) {
    observer.observe(overviewSection);
  }

  // Initialize with Requirements section active
  const requirementsItem = sidebar.querySelector('li[data-stage="Requirements"]');
  if (requirementsItem) {
    requirementsItem.classList.add('active');
  }

  // Initial scroll progress update
  updateScrollProgress();
});
