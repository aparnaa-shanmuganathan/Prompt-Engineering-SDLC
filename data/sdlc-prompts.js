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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  }
};