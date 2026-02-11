// sdlc-prompts.js
// Contains prompt engineering data mapped to SDLC stages

const SDLC_PROMPTS = {
  Requirements: {
    title: "Requirements Gathering",
    description:
      "Prompt engineering helps extract clear, structured, and unambiguous requirements from stakeholders using LLMs.",
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
    ],
    content: `
<h3>Requirements Gathering: The Foundation of Success</h3>

<p>As a senior developer, I've learned that poorly defined requirements are the root cause of most project failures. This stage is absolutely critical—it's where we translate business goals into actionable specifications that engineers can build against.</p>

<h4>Key Responsibilities:</h4>
<ul>
  <li><strong>Stakeholder Interview & Analysis:</strong> Engage with product managers, business analysts, and end-users to understand pain points and desired outcomes. Use prompt engineering to structure these conversations and extract actionable insights.</li>
  <li><strong>Functional vs Non-Functional Requirements:</strong> Clearly separate what the system must do (functional) from how it should perform (non-functional like scalability, security, performance).</li>
  <li><strong>User Stories & Acceptance Criteria:</strong> Break down requirements into bite-sized user stories with clear acceptance criteria. This becomes your contract with QA and stakeholders.</li>
  <li><strong>Risk Identification:</strong> Early identification of ambiguous or contradictory requirements prevents costly rework later.</li>
</ul>

<h4>Best Practices from Experience:</h4>
<ul>
  <li>Use AI to generate structured outputs like requirement matrices and traceability tables</li>
  <li>Always validate requirements with actual end-users, not just assumptions</li>
  <li>Document non-functional requirements explicitly—they often drive architecture decisions</li>
  <li>Create a living requirements document that evolves with stakeholder feedback</li>
  <li>Ensure all requirements are testable and measurable</li>
</ul>

<h4>Red Flags:</h4>
<ul>
  <li>Vague requirements like "it should be fast" or "it should be user-friendly"</li>
  <li>Missing acceptance criteria for user stories</li>
  <li>No input from actual end-users or domain experts</li>
  <li>Conflicting requirements without resolution</li>
</ul>
    `
  },

  Feasibility: {
    title: "Feasibility Analysis",
    description:
      "LLMs assist in evaluating technical, operational, and economic feasibility early in the SDLC.",
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
    ],
    content: `
<h3>Feasibility Analysis: De-Risking Your Project</h3>

<p>Before committing significant resources, we need to answer hard questions: Can we build this? How long will it take? What are the technical and financial risks? Feasibility analysis is your opportunity to identify showstoppers early, when changes are cheap.</p>

<h4>Three Pillars of Feasibility:</h4>
<ul>
  <li><strong>Technical Feasibility:</strong> Do we have the technology stack, expertise, and infrastructure to build this? Are there unproven technologies that introduce risk?</li>
  <li><strong>Operational Feasibility:</strong> Do we have the team, resources, and organizational capacity? Will this require significant training or hiring?</li>
  <li><strong>Economic Feasibility:</strong> Is the ROI justified? What's the time-to-market vs. business value? Are there hidden costs?</li>
</ul>

<h4>Critical Analysis Points:</h4>
<ul>
  <li><strong>Technology Assessment:</strong> Evaluate technology choices for maturity, community support, and team expertise. New tech is exciting but risky.</li>
  <li><strong>Scalability Considerations:</strong> Will this architecture scale to production loads? What are the bottlenecks?</li>
  <li><strong>Integration Points:</strong> How does this fit with existing systems? Integration complexity often gets underestimated.</li>
  <li><strong>Risk Assessment:</strong> What could go wrong? Security threats, performance issues, regulatory compliance, third-party dependencies.</li>
  <li><strong>Resource Planning:</strong> What's the team composition? Do we have enough senior developers for architecture decisions?</li>
</ul>

<h4>Common Pitfalls:</h4>
<ul>
  <li>Underestimating complexity—always add 30-50% buffer to estimates</li>
  <li>Ignoring legacy system integration challenges</li>
  <li>Assuming unlimited resources—constrain your analysis realistically</li>
  <li>Overlooking regulatory or compliance requirements early</li>
  <li>Not involving actual development teams in feasibility assessment</li>
</ul>
    `
  },

  Design: {
    title: "System Design",
    description:
      "Prompt engineering supports architecture design, API definitions, and data modeling decisions.",
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
    ],
    content: `
<h3>System Design: Blueprint for Excellence</h3>

<p>Good design is invisible—users don't see it, but they feel its impact. As a senior developer, I know that poor architectural decisions haunt teams for years. This stage is where we make decisions that affect scalability, maintainability, and performance for the entire lifecycle.</p>

<h4>Architectural Decisions:</h4>
<ul>
  <li><strong>Monolith vs Microservices:</strong> Monoliths are simpler but harder to scale. Microservices offer flexibility but add operational complexity. Choose based on team maturity and scalability needs.</li>
  <li><strong>Data Architecture:</strong> SQL vs NoSQL? Single database vs polyglot persistence? This decision affects everything downstream.</li>
  <li><strong>Communication Patterns:</strong> Synchronous REST, asynchronous queues, event-driven? Each has tradeoffs in latency, complexity, and consistency.</li>
  <li><strong>Security Architecture:</strong> Authentication, authorization, encryption, secrets management. Don't bolt these on later.</li>
</ul>

<h4>Design Artifacts You Need:</h4>
<ul>
  <li><strong>System Context Diagram:</strong> Shows external systems and data flows</li>
  <li><strong>Architecture Diagram:</strong> Components, layers, and dependencies</li>
  <li><strong>API Contracts:</strong> Detailed endpoint specifications, request/response schemas, error handling</li>
  <li><strong>Database Schema:</strong> Tables, relationships, indexing strategy</li>
  <li><strong>Deployment Architecture:</strong> How does this run in production? Containers? Orchestration?</li>
</ul>

<h4>Common Design Mistakes:</h4>
<ul>
  <li>Over-engineering for hypothetical scale—build for current needs, design for future needs</li>
  <li>Ignoring operational concerns (monitoring, logging, alerting) in initial design</li>
  <li>Creating designs that are hard to test or debug</li>
  <li>Not considering data consistency and eventual consistency tradeoffs</li>
  <li>Assuming infinite resources—always design for constraints</li>
</ul>

<h4>Golden Rules:</h4>
<ul>
  <li>Favor simplicity over complexity</li>
  <li>Make explicit tradeoffs, not hidden assumptions</li>
  <li>Design for testability from day one</li>
  <li>Consider operational concerns as first-class requirements</li>
  <li>Document your decisions and rationale—future you will thank you</li>
</ul>
    `
  },

  Implementation: {
    title: "Implementation",
    description:
      "LLMs help generate, refactor, and optimize code when guided by precise prompts.",
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
    ],
    content: `
<h3>Implementation: Where Ideas Become Reality</h3>

<p>This is where developers shine—turning design into working code. But implementation is not just about making it work; it's about making it maintainable, performant, and secure. Code is read far more often than it's written, so optimize for readability.</p>

<h4>Development Best Practices:</h4>
<ul>
  <li><strong>Code Quality:</strong> Follow SOLID principles, DRY (Don't Repeat Yourself), and KISS (Keep It Simple). Use linters and formatters consistently.</li>
  <li><strong>Version Control:</strong> Meaningful commit messages, atomic commits, clear branch strategy. Git history should tell a story.</li>
  <li><strong>Code Review:</strong> Peer reviews catch bugs, share knowledge, and maintain standards. Be thorough but respectful.</li>
  <li><strong>Documentation:</strong> Code comments explain 'why', not 'what'. Document APIs, complex algorithms, and architectural decisions.</li>
  <li><strong>Testing Strategy:</strong> Unit tests, integration tests, end-to-end tests. Aim for meaningful coverage, not arbitrary percentages.</li>
</ul>

<h4>Using AI for Implementation:</h4>
<ul>
  <li><strong>Code Generation:</strong> AI excels at boilerplate and well-understood patterns. Use it to bootstrap, then refine and review.</li>
  <li><strong>Refactoring Assistant:</strong> AI can suggest improvements, extract functions, identify duplicates. But use judgment—not all suggestions are right.</li>
  <li><strong>Learning Tool:</strong> Ask AI to explain code, suggest alternatives, or discuss tradeoffs. Treat it as a junior developer who never gets tired.</li>
</ul>

<h4>Critical Implementation Concerns:</h4>
<ul>
  <li><strong>Error Handling:</strong> Don't ignore exceptions. Design how your system responds to failures gracefully.</li>
  <li><strong>Performance:</strong> Profile before optimizing. Most bottlenecks are not where you think they are.</li>
  <li><strong>Security:</strong> Input validation, output encoding, avoiding injection attacks. Security is everyone's responsibility.</li>
  <li><strong>Dependencies:</strong> Be selective about external libraries. Each adds maintenance overhead and potential vulnerabilities.</li>
  <li><strong>Logging & Observability:</strong> Build this in from the start. Future debugging depends on good logs.</li>
</ul>

<h4>Practical Wisdom:</h4>
<ul>
  <li>Make the common path fast, handle edge cases correctly</li>
  <li>Write tests as you code, not after</li>
  <li>Commit often with meaningful messages</li>
  <li>Don't optimize prematurely—measure first</li>
  <li>Seek code reviews early and often</li>
</ul>
    `
  },

  Testing: {
    title: "Testing",
    description:
      "Prompt-driven testing assists in creating test cases, edge cases, and validation strategies.",
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
    ],
    content: `
<h3>Testing: Your Safety Net</h3>

<p>Testing is not just about finding bugs—it's about confidence. Quality testing gives you the confidence to refactor, deploy, and make changes without fear. Tests also serve as executable documentation of how the system should behave.</p>

<h4>Testing Pyramid (What We Aim For):</h4>
<ul>
  <li><strong>Unit Tests (Base):</strong> Fast, isolated tests of individual functions. Should be your largest category (60-70% of tests).</li>
  <li><strong>Integration Tests (Middle):</strong> Test how components work together. Slower but catch real-world issues (20-30%).</li>
  <li><strong>End-to-End Tests (Top):</strong> Test full user workflows. Slowest and most brittle, so keep them minimal (10-15%).</li>
</ul>

<h4>What to Test:</h4>
<ul>
  <li><strong>Happy Path:</strong> The normal, expected flow. Users will follow this 95% of the time.</li>
  <li><strong>Boundary Cases:</strong> Empty inputs, maximum values, null pointers. These reveal off-by-one errors and edge cases.</li>
  <li><strong>Error Cases:</strong> What happens when things fail? Database down? Invalid input? Network timeout?</li>
  <li><strong>Security Cases:</strong> SQL injection, XSS, authentication bypass. Consider threat models specific to your domain.</li>
  <li><strong>Performance Cases:</strong> Does this function perform acceptably with realistic data volumes?</li>
</ul>

<h4>Using AI for Testing:</h4>
<ul>
  <li>Generate comprehensive test cases—AI can explore edge cases systematically</li>
  <li>Create test data and fixtures—AI excels at generating realistic but varied data</li>
  <li>Review test coverage—ask AI to identify untested paths in your code</li>
  <li>Generate negative tests—what should fail and how should it fail gracefully?</li>
</ul>

<h4>Testing Anti-Patterns to Avoid:</h4>
<ul>
  <li><strong>Brittle Tests:</strong> Tests that break with minor refactors. Test behavior, not implementation details.</li>
  <li><strong>Test Code Debt:</strong> Testing code needs to be as clean as production code. Refactor tests too.</li>
  <li><strong>Incomplete Coverage:</strong> 100% code coverage is a vanity metric. Coverage should be meaningful.</li>
  <li><strong>Slow Tests:</strong> Slow tests are skipped. Use mocks and stubs to keep tests fast.</li>
  <li><strong>Flaky Tests:</strong> Tests that sometimes pass, sometimes fail. Determinism is essential.</li>
</ul>

<h4>The Testing Mindset:</h4>
<ul>
  <li>Think about failure modes early—design for testability</li>
  <li>Write tests as you code—not an afterthought</li>
  <li>Use test failures as valuable feedback about your design</li>
  <li>Automate everything you can—humans are unreliable testers</li>
  <li>Testing is a development tool, not QA overhead</li>
</ul>
    `
  },

  Deployment: {
    title: "Deployment",
    description:
      "LLMs assist in generating deployment plans, scripts, and CI/CD workflows.",
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
    ],
    content: `
<h3>Deployment: Getting Code to Users</h3>

<p>Deployment is where code meets reality. It's where we learn if all our assumptions were correct. A smooth deployment process gives teams confidence; a chaotic one creates fear and manual workarounds. Modern deployment should be automated, repeatable, and reversible.</p>

<h4>Deployment Pipeline Stages:</h4>
<ul>
  <li><strong>Commit Stage:</strong> Code committed, built, unit tested, packaged into artifacts. Should complete in minutes.</li>
  <li><strong>Automated Acceptance Tests:</strong> Integration and end-to-end tests against a production-like environment. Catch integration issues early.</li>
  <li><strong>Manual Approval:</strong> Business stakeholders verify everything looks good before production deployment.</li>
  <li><strong>Production Deployment:</strong> Blue-green, canary, or rolling deployments to minimize risk. Not big-bang.</li>
</ul>

<h4>Infrastructure & Configuration:</h4>
<ul>
  <li><strong>Infrastructure as Code:</strong> Define infrastructure (servers, databases, networks) in version control. Reproducibility is key.</li>
  <li><strong>Configuration Management:</strong> Separate configuration from code. Environment-specific settings should not be hardcoded.</li>
  <li><strong>Secrets Management:</strong> Passwords, API keys, certificates should never be in version control. Use secure vaults.</li>
  <li><strong>Database Migrations:</strong> Plan how schema changes roll out. Can they be rolled back? Are there zero-downtime strategies?</li>
</ul>

<h4>Deployment Strategies:</h4>
<ul>
  <li><strong>Blue-Green:</strong> Two identical production environments. Switch traffic between them for instant rollback capability.</li>
  <li><strong>Canary Deployment:</strong> Roll out to a small percentage of users first. Monitor metrics, gradually increase if healthy.</li>
  <li><strong>Rolling Deployment:</strong> Gradually replace old instances with new ones. Users experience zero downtime.</li>
  <li><strong>Feature Flags:</strong> Deploy code that's hidden behind flags. Control rollout independently of code deployment.</li>
</ul>

<h4>Monitoring & Observability:</h4>
<ul>
  <li><strong>Health Checks:</strong> Automated checks that verify the application is functioning correctly</li>
  <li><strong>Metrics:</strong> CPU, memory, latency, error rates, business metrics. Real-time visibility into system behavior.</li>
  <li><strong>Logs:</strong> Structured logs with context. Should be searchable and queryable.</li>
  <li><strong>Alerts:</strong> Notification system for critical issues. Route to on-call engineer immediately.</li>
  <li><strong>Dashboards:</strong> Real-time visualization of critical metrics. Situation room for incidents.</li>
</ul>

<h4>Deployment Readiness Checklist:</h4>
<ul>
  <li>All tests passing in CI/CD pipeline</li>
  <li>Code reviewed and approved</li>
  <li>Release notes prepared and communicated</li>
  <li>Rollback plan documented</li>
  <li>On-call engineer available for first 24 hours post-deployment</li>
  <li>Monitoring and alerts configured</li>
  <li>Database migrations tested in staging</li>
  <li>All dependencies and configuration validated</li>
</ul>

<h4>Culture of Deployment:</h4>
<ul>
  <li>Deployment should be boring and routine, not a major event</li>
  <li>Automate everything—humans are terrible at repetitive tasks</li>
  <li>If deployment is painful, do it more often to build confidence</li>
  <li>Reversibility is more important than getting it perfect the first time</li>
  <li>Learn from each deployment—blameless post-mortems for issues</li>
</ul>
    `
  },

  Maintenance: {
    title: "Maintenance",
    description:
      "Prompt engineering supports debugging, optimization, and long-term system improvements.",
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
    ],
    content: `
<h3>Maintenance: The Long Game</h3>

<p>Maintenance is where systems spend 80% of their life. It's not glamorous like building new features, but it's critical. A well-maintained system is predictable, reliable, and a pleasure to work with. A poorly maintained one becomes a drag on the entire organization.</p>

<h4>Types of Maintenance Work:</h4>
<ul>
  <li><strong>Reactive Maintenance:</strong> Fixing bugs reported by users. Should be minimized through good testing.</li>
  <li><strong>Preventive Maintenance:</strong> Proactively addressing technical debt, updating dependencies, refactoring complex code.</li>
  <li><strong>Adaptive Maintenance:</strong> Adapting to changes in environment (OS updates, dependency versions, cloud platform changes).</li>
  <li><strong>Perfective Maintenance:</strong> Performance improvements, adding monitoring, improving usability based on analytics.</li>
</ul>

<h4>Incident Response & Debugging:</h4>
<ul>
  <li><strong>Triage:</strong> Understand severity. Is user-facing? How many users affected? Can we work around it?</li>
  <li><strong>Investigation:</strong> Gather logs, metrics, user reports. Look for patterns. When did it start?</li>
  <li><strong>Root Cause Analysis:</strong> Don't just fix symptoms. Understand why the bug existed. Prevent recurrence.</li>
  <li><strong>Temporary Fix vs Permanent Fix:</strong> Sometimes you need immediate relief (hotfix) before proper fix. That's okay.</li>
  <li><strong>Post-Mortem:</strong> After incident is resolved, analyze what happened and how to prevent similar issues.</li>
</ul>

<h4>Performance Optimization:</h4>
<ul>
  <li><strong>Measure First:</strong> Profile the system. Find actual bottlenecks, not perceived ones.</li>
  <li><strong>Database Optimization:</strong> Add indexes, optimize queries, consider caching strategies (Redis, memcached).</li>
  <li><strong>Caching Strategy:</strong> Cache appropriately. Client-side, server-side, CDN. Understand cache invalidation.</li>
  <li><strong>Code Optimization:</strong> Algorithmic improvements, avoiding N+1 queries, efficient data structures.</li>
  <li><strong>Scaling:</strong> Vertical (more powerful servers) vs horizontal (more servers). Usually horizontal is more cost-effective.</li>
</ul>

<h4>Technical Debt Management:</h4>
<ul>
  <li><strong>Identify Debt:</strong> Code that's hard to change, outdated dependencies, missing tests, poor documentation.</li>
  <li><strong>Prioritize:</strong> Not all debt is created equal. High-touch areas should be prioritized for cleanup.</li>
  <li><strong>Pay It Down Regularly:</strong> Don't let it accumulate. Reserve 20-30% of sprint capacity for technical work.</li>
  <li><strong>Communicate Impact:</strong> Help stakeholders understand that technical debt slows future feature development.</li>
</ul>

<h4>Dependency Management:</h4>
<ul>
  <li><strong>Security Updates:</strong> Keep dependencies current for security patches. Use automated tools to track vulnerabilities.</li>
  <li><strong>Version Strategies:</strong> Semantic versioning helps understand breaking changes. Test upgrades in staging first.</li>
  <li><strong>Removal:</strong> Periodically audit unused dependencies. Less code = fewer attack vectors and faster builds.</li>
</ul>

<h4>Monitoring & Alerting:</h4>
<ul>
  <li><strong>Business Metrics:</strong> Monitor what matters to users. Conversion rates, response times, error rates.</li>
  <li><strong>Infrastructure Metrics:</strong> CPU, memory, disk, network. Early warning signs of problems.</li>
  <li><strong>Alerting Strategy:</strong> Alert on symptoms, not just thresholds. Reduce false positives that cause alert fatigue.</li>
  <li><strong>On-Call Rotation:</strong> Share responsibility fairly. Blameless culture reduces stress and improves incident response.</li>
</ul>

<h4>Knowledge & Documentation:</h4>
<ul>
  <li>Keep runbooks up to date—procedures for handling common incidents</li>
  <li>Document architectural decisions and tradeoffs</li>
  <li>Create postmortems not as blame but as learning opportunities</li>
  <li>Share knowledge through team discussions and documentation</li>
</ul>

<h4>The Maintenance Mindset:</h4>
<ul>
  <li>Maintenance is development—give it the same rigor and care</li>
  <li>Your future self (or teammate) will thank you for clear code and good documentation</li>
  <li>Small, frequent improvements prevent the need for major rewrites</li>
  <li>Systems are living things—they evolve and change</li>
  <li>Great teams invest in maintainability as seriously as they invest in new features</li>
</ul>
    `
  }
};