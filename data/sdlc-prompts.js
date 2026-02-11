// Enhanced structure for each stage with 5-step framework

const SDLC_PROMPTS = {
  Requirements: {
    title: "Requirements Gathering",
    description: "Prompt engineering helps extract clear, structured, and unambiguous requirements from stakeholders using LLMs.",
    
    // 5-Step Framework Prompts
    framework: {
      task: `You are a business analyst. Your task: Convert the project idea into detailed, testable requirements.`,
      
      context: `Context: We're gathering requirements from multiple stakeholders with different priorities. 
The project must serve business goals while being technically feasible. 
Stakeholders include: [list roles]. 
Timeline constraint: [specify deadline].
Budget constraint: [specify budget].`,
      
      references: `Reference these standards: 
- INVEST principle for user stories (Independent, Negotiable, Valuable, Estimable, Small, Testable)
- IEEE 830 SRS (Software Requirements Specification) standard
- Domain-specific requirements from industry: [specify industry]
- Regulatory compliance requirements: [list relevant regulations]`,
      
      evaluate: `Evaluation criteria for each requirement:
1. Is it measurable and testable?
2. Does it align with business objectives?
3. Is it technically feasible?
4. Can QA create test cases from it?
5. Are dependencies clearly identified?
Provide assessment for each requirement.`,
      
      iterate: `Iteration process:
1. Review feedback from stakeholders
2. Identify conflicting requirements
3. Refine ambiguous acceptance criteria
4. Re-validate with technical team for feasibility
5. Document rationale for changes`
    },

    prompts: [
      `Act as a business analyst.
Convert the following project idea into detailed user stories
with acceptance criteria in a structured format.`,

      `Analyze the following problem statement and identify
functional and non-functional requirements separately.`,

      `Ask clarifying questions to remove ambiguity
from the given requirements.`
    ],
    bestPractices: [
      "Ask for structured outputs (tables, bullet points)",
      "Clearly define stakeholder roles",
      "Iterate prompts to refine unclear requirements"
    ]
  },

  Feasibility: {
    title: "Feasibility Analysis",
    description: "LLMs assist in evaluating technical, operational, and economic feasibility early in the SDLC.",
    
    framework: {
      task: `Your task: Evaluate whether the proposed solution is feasible from technical, operational, and financial perspectives.`,
      
      context: `Context: Organization has [describe resources/team]. 
Current infrastructure: [describe existing systems].
Market timeline: [specify time-to-market requirements].
Budget ceiling: [specify budget limits].
Risk tolerance: [low/medium/high].`,
      
      references: `Reference frameworks:
- Technical feasibility: TECH stack selection criteria, scalability benchmarks
- Operational feasibility: Team capability matrix, resource availability standards
- Economic feasibility: Industry ROI benchmarks, TCO (Total Cost of Ownership) models
- Risk management: NIST risk assessment framework
- Similar past projects: [reference previous implementations]`,
      
      evaluate: `Assessment framework:
1. Technical: Rate complexity on scale 1-10, identify skill gaps
2. Operational: List required resources, timeline estimate with confidence level
3. Economic: Calculate ROI, payback period, hidden costs
4. Risks: Identify top 5 risks with probability and impact
5. Go/No-Go decision criteria with thresholds`,
      
      iterate: `Refinement loop:
1. Validate assumptions with technical leads
2. Adjust scope if feasibility is marginal
3. Explore alternative approaches
4. Re-assess risks based on feedback
5. Create contingency plans for high-risk areas`
    },

    prompts: [
      `Evaluate the technical feasibility of the following system
considering scalability, security, and maintainability.`,

      `Analyze the cost, timeline, and resource feasibility
for the given project scope.`,

      `List potential risks and constraints
associated with implementing this solution.`
    ],
    bestPractices: [
      "Mention constraints explicitly",
      "Ask for pros and cons",
      "Validate feasibility with domain experts"
    ]
  },

  Design: {
    title: "System Design",
    description: "Prompt engineering supports architecture design, API definitions, and data modeling decisions.",
    
    framework: {
      task: `Your task: Create a comprehensive system design that meets requirements while optimizing for scalability, security, and maintainability.`,
      
      context: `Context: System must handle [specify scale: users, requests/sec, data volume].
Required technologies: [list tech stack].
Integration points: [list external systems].
Performance SLAs: [specify latency, availability requirements].
Security profile: [specify sensitivity level].`,
      
      references: `Design references:
- Architectural patterns: 12-Factor App, Microservices pattern, CQRS, Event Sourcing
- API design standards: RESTful principles, GraphQL best practices, OpenAPI specification
- Database design: Normalization rules, denormalization patterns, CAP theorem
- Security architecture: OWASP Top 10, Zero Trust model, encryption standards (AES-256, TLS 1.3)
- Infrastructure patterns: Cloud-native design, container orchestration`,
      
      evaluate: `Design evaluation checklist:
1. Scalability: Can this handle 10x current load?
2. Security: Are authentication, authorization, data protection covered?
3. Maintainability: Is code modular and testable?
4. Reliability: What are failure modes? SPOF (Single Points of Failure)?
5. Cost: Is this cost-effective for organization?
6. Operational: Can Ops team manage this in production?`,
      
      iterate: `Design refinement:
1. Stakeholder review - architecture, security, ops teams
2. Threat modeling exercise
3. Capacity planning validation
4. Trade-off analysis for architectural choices
5. Create ADRs (Architecture Decision Records)`
    },

    prompts: [
      `Act as a software architect.
Design a high-level system architecture for the following requirements.`,

      `Create a REST API design including endpoints,
request/response formats, and data models.`,

      `Suggest a suitable database schema
based on the given use case.`
    ],
    bestPractices: [
      "Specify architecture style (monolith, microservices)",
      "Request diagrams or step-by-step design",
      "Refine designs iteratively"
    ]
  },

  Implementation: {
    title: "Implementation",
    description: "LLMs help generate, refactor, and optimize code when guided by precise prompts.",
    
    framework: {
      task: `Your task: Generate production-quality code that implements the design specification with optimal performance and maintainability.`,
      
      context: `Context: 
Language: [specify programming language].
Framework: [specify framework/libraries].
Code style: [specify conventions].
Target: [specify deployment environment].
Quality gates: [specify metrics/thresholds].`,
      
      references: `Code standards:
- Language-specific best practices: [e.g., PEP 8 for Python, standard for Go]
- Design patterns: Factory, Observer, Strategy, Repository, Dependency Injection
- SOLID principles, KISS, DRY, YAGNI
- Industry coding standards: Google style guides, corporate standards
- Security hardening: OWASP, input validation, output encoding`,
      
      evaluate: `Code quality evaluation:
1. Correctness: Does it implement the design spec?
2. Readability: Is code understandable by average developer?
3. Performance: Are there obvious bottlenecks?
4. Security: Are inputs validated? Are outputs encoded?
5. Testability: Can this be easily unit tested?
6. Maintainability: Will juniors understand this in 6 months?`,
      
      iterate: `Implementation improvements:
1. Code review with senior devs
2. Static analysis for code smells
3. Performance profiling
4. Security scanning
5. Refactor for clarity and efficiency`
    },

    prompts: [
      `Generate clean, optimized, and well-documented code
for the following requirement using best practices.`,

      `Refactor the given code to improve readability,
performance, and maintainability.`,

      `Explain the logic of the following code
step by step.`
    ],
    bestPractices: [
      "Specify programming language and framework",
      "Ask for comments and explanations",
      "Always review generated code manually"
    ]
  },

  Testing: {
    title: "Testing",
    description: "Prompt-driven testing assists in creating test cases, edge cases, and validation strategies.",
    
    framework: {
      task: `Your task: Design comprehensive test coverage including unit, integration, and end-to-end tests that verify requirements are met.`,
      
      context: `Context: 
Coverage target: [specify percentage].
Test environment: [describe testing infrastructure].
Critical paths: [list high-priority features].
Performance baselines: [specify acceptable performance].
User workflows: [describe typical user journeys].`,
      
      references: `Testing frameworks & standards:
- Testing pyramid: 70% unit, 20% integration, 10% e2e
- Test case design: Equivalence partitioning, boundary value analysis, decision table testing
- Unit testing: [Specify framework: Jest, pytest, JUnit, etc.]
- BDD: Gherkin/Cucumber syntax for acceptance tests
- Security testing: OWASP testing guide
- Performance testing: Load profile specifications`,
      
      evaluate: `Testing quality metrics:
1. Coverage: Code coverage + path coverage (target: >80%)
2. Completeness: All requirements have test cases
3. Edge cases: Boundary, null, error conditions covered
4. Security: Authorization, injection, XSS tests included
5. Performance: Response times within SLA?
6. Reliability: Tests are deterministic (no flakiness)`,
      
      iterate: `Test improvement cycle:
1. Execute tests in CI/CD
2. Analyze failures and code coverage gaps
3. Add tests for newly discovered edge cases
4. Refactor flaky tests
5. Optimize slow tests
6. Document test strategy and coverage`
    },

    prompts: [
      `Generate unit test cases for the following function
covering normal, boundary, and edge cases.`,

      `Create a comprehensive test plan
based on the given requirements.`,

      `Suggest automated testing strategies
for this application.`
    ],
    bestPractices: [
      "Clearly define test scope",
      "Ask for negative and boundary cases",
      "Validate test coverage manually"
    ]
  },

  Deployment: {
    title: "Deployment",
    description: "LLMs assist in generating deployment plans, scripts, and CI/CD workflows.",
    
    framework: {
      task: `Your task: Design a robust, automated deployment pipeline that safely moves code from development to production with minimal risk.`,
      
      context: `Context: 
Target environment: [specify cloud: AWS, Azure, GCP, On-Prem].
Deployment frequency: [specify: daily, weekly, on-demand].
Downtime tolerance: [specify: zero-downtime required, maintenance window allowed].
Rollback requirements: [RTO/RPO: Recovery Time/Point Objectives].
Compliance: [specify regulatory: SOC2, HIPAA, PCI-DSS, etc.]`,
      
      references: `Deployment patterns & standards:
- Deployment strategies: Blue-Green, Canary, Rolling, Shadow
- CI/CD platforms: Jenkins, GitLab CI, GitHub Actions, Azure Pipelines
- IaC tools: Terraform, CloudFormation, Helm, Ansible
- Containerization: Docker, Kubernetes best practices
- Monitoring: Prometheus, DataDog, New Relic, CloudWatch
- Security: Signed artifacts, secrets management (Vault, AWS Secrets Manager)`,
      
      evaluate: `Deployment readiness checklist:
1. All automated tests passing
2. Code coverage at target threshold
3. Security scans completed (SAST, DAST)
4. Performance baselines validated
5. Deployment procedure documented & tested
6. Rollback plan verified
7. Monitoring & alerting configured
8. On-call coverage confirmed`,
      
      iterate: `Continuous deployment improvement:
1. Monitor deployment metrics (success rate, MTTR)
2. Blameless post-mortems for failures
3. Automate manual steps
4. Reduce deployment time & complexity
5. Improve observability of deployments
6. Update runbooks based on lessons learned`
    },

    prompts: [
      `Create a deployment checklist
for the following application.`,

      `Design a CI/CD pipeline
for deploying this application to the cloud.`,

      `List security best practices
to follow during deployment.`
    ],
    bestPractices: [
      "Mention target environment and tools",
      "Specify cloud provider if applicable",
      "Review security configurations carefully"
    ]
  },

  Maintenance: {
    title: "Maintenance",
    description: "Prompt engineering supports debugging, optimization, and long-term system improvements.",
    
    framework: {
      task: `Your task: Analyze system issues, optimize performance, and manage technical debt while ensuring reliability and security.`,
      
      context: `Context: 
Current production metrics: [specify P95 latency, error rate, SLA].
User base: [specify scale: number of users, request volume].
Known constraints: [specify limitations, tech debt areas].
Maintenance window: [specify available time for work].
Stakeholder priorities: [list competing demands].`,
      
      references: `Maintenance frameworks:
- Incident management: Incident severity levels, escalation procedures, war room protocols
- Debugging methodology: Hypothesis-driven, 5 Whys, fault tree analysis
- Performance optimization: Profiling tools, benchmarking standards, optimization priority matrix
- Technical debt: Sonar, code complexity metrics, refactoring patterns
- Monitoring & alerting: Key metrics per service, alert fatigue reduction, SLO/SLI/SLA definitions
- Dependency security: CVE tracking, patch management, version upgrade strategies`,
      
      evaluate: `Maintenance effectiveness metrics:
1. MTBF (Mean Time Between Failures): How stable is the system?
2. MTTR (Mean Time To Recovery): How quickly can we fix issues?
3. Availability percentage: 99.9%, 99.95%, etc.?
4. Performance: P50, P95, P99 latencies meet SLA?
5. Security: No critical vulnerabilities, patch compliance?
6. Cost efficiency: Resource utilization, optimization opportunities?`,
      
      iterate: `Ongoing maintenance cycle:
1. Triage incoming issues by severity
2. Investigate root causes thoroughly
3. Implement fixes with monitoring
4. Schedule preventive maintenance (dependency updates, refactoring)
5. Review metrics and adjust monitoring thresholds
6. Share learnings with team through documentation`
    },

    prompts: [
      `Analyze the following issue or log
and suggest possible root causes and fixes.`,

      `Recommend performance optimizations
for the given system.`,

      `Suggest enhancements
to improve system scalability and reliability.`
    ],
    bestPractices: [
      "Provide logs, metrics, and context",
      "Ask for step-by-step analysis",
      "Validate fixes in staging environments"
    ]
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector('.sidebar');
  if (!sidebar) return;

  const items = sidebar.querySelectorAll('li');
  const overviewSection = document.querySelector('.overview-section');
  const content = document.querySelector('.content');
  
  function formatFrameworkContent(framework) {
    if (!framework) return '';
    
    const steps = ['task', 'context', 'references', 'evaluate', 'iterate'];
    let html = '<div class="framework-container">';
    html += '<h3>5-Step Framework</h3>';
    
    steps.forEach((step, index) => {
      if (framework[step]) {
        html += `<div class="framework-step">
          <div class="step-header">
            <span class="step-number">${index + 1}</span>
            <h4>${step.toUpperCase()}</h4>
          </div>
          <div class="step-content">
            <pre>${framework[step]}</pre>
          </div>
        </div>`;
      }
    });
    
    html += '</div>';
    return html;
  }
  
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
        if (promptTitle) promptTitle.textContent = 'Prompt Templates';
        if (pre) pre.textContent = (data.prompts && data.prompts[0]) || '';
      }
      
      // Build combined content with framework + existing content
      let combinedContent = '';
      if (data.framework) {
        combinedContent += formatFrameworkContent(data.framework);
      }
      if (data.content) {
        combinedContent += data.content;
      }
      
      if (contentDiv) {
        contentDiv.innerHTML = combinedContent;
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
          if (promptTitle) promptTitle.textContent = 'Prompt Templates';
          if (pre) pre.textContent = (data.prompts && data.prompts[0]) || '';
        }
        
        // Build combined content with framework + existing content
        let combinedContent = '';
        if (data.framework) {
          combinedContent += formatFrameworkContent(data.framework);
        }
        if (data.content) {
          combinedContent += data.content;
        }
        
        if (contentDiv) {
          contentDiv.innerHTML = combinedContent;
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