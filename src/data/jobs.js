const jobs = [
  {
    title: 'Senior Software Engineer',
    company: 'Justworks',
    start: [2022, 10],
    categories: [
      {
        label: 'Strategic Technical Leadership & Identity Architecture',
        items: [
          'Architected and managed the deployment of the Okta-hosted login engine, a mission-critical gateway leveraged across the entire Justworks ecosystem.',
          'Designed and spearheaded the unified account creation flow and the "Global Identity Settings" standalone application, integrating identity provisioning across all core Justworks apps.',
          'Served as Technical Lead for the enterprise-wide KYC (Know Your Customer) rollout, architecting a multi-phase implementation for the entire member base.',
          'Delivered risk-based authentication logic to reduce "MFA fatigue," streamlining the login experience for thousands of low-risk users.',
          'Acted as the primary CIAM Point of Contact during active security threats, collaborating with the Payments team to identify and suspend compromised accounts, preventing unauthorized financial transactions.',
        ],
      },
      {
        label: 'Infrastructure & Operational Excellence',
        items: [
          'Spearheaded the rapid deployment of a dedicated Okta Tour tenant for sales/demo initiatives, defining the integration roadmap for all other engineering domains to follow.',
          'Coached emerging engineers on scope management and "MVP-first" mentalities, ensuring team delivery remained on track through major organizational re-orgs.',
          'Eliminated manual administrative overhead by implementing PR-driven automation for Okta admin account provisioning, replacing manual tickets with self-service developer tools.',
          'Scaled specialized CIAM expertise across the team by establishing a knowledge-sharing culture, resulting in 100% on-call self-reliance through guided mentorship and collaborative run-book development.',
        ],
      },
    ],
  },
  {
    title: 'Senior Software Engineer',
    company: 'Capsule',
    start: [2021, 12],
    end: [2022, 7],
    tasks: [
      'Develop mission-critical internal tooling using Node and React to optimize prescription processing workflows for pharmacy staff.',
      'Lead the end-to-end frontend development for the prescription processing interface, improving operational efficiency and UI consistency',
    ],
  },
  {
    title: 'Lead Software Engineer',
    company: "Macy's",
    start: [2020, 10],
    end: [2021, 11],
    tasks: [
      'Architect scalable client-side code for Product Detail Pages (PDP) across Macy’s and Bloomingdale’s, serving millions of monthly active users.',
      'Coordinate PDP development efforts across all participating parties to ensure proper code execution of all projects within planned timeframes.',
    ],
  },
  {
    title: 'Lean Lab Manager / Senior UI Developer',
    company: "Bloomingdale's",
    start: [2018, 12],
    end: [2020, 9],
    tasks: [
      'Lead a cross-functional team of 8 engineers, mentoring junior staff and streamlining the delivery of core e-commerce features.',
      'Ensure code quality and maintainability through code reviews.',
    ],
  },
  {
    title: 'UI Developer',
    company: "Bloomingdale's",
    start: [2017, 4],
    end: [2018, 12],
    tasks: [
      'Work directly with Product Manager, UX, UI, and QA roles in a small lean lab team of 5 to 6 members to A/B test new features and customer experiences. Experiments within mobile lean lab in 2017 resulted in an estimated increase in revenue of $11 million.',
      'Develop redesigned product detail page for desktop. Project consisted of rewriting client-side code with Backbone/Marionette and adding responsive behavior.',
    ],
  },
  {
    title: 'Junior UI Developer',
    company: "Bloomingdale's",
    start: [2016, 2],
    end: [2017, 4],
    tasks: [
      'Coordinate with team members across 2-week iterations from initial planning stages with feasibility assessment through to confirmation of successful deployment to production.',
      'Design and build responsive front-end components with object-oriented approach and supported with behavior driven unit testing. Utilized tools and libraries include javascript ES2015/ES6+, Backbone/Marionette, Jasmine, Sass, Webpack, and Node.',
    ],
  },
]

export default jobs
