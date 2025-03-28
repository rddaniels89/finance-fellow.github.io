// src/data/quests.data.tsx

export interface Quest {
  id: number;
  titles: {
    retro: string;
    sleek: string;
  };
  company?: string;
  workTitle: string; // Shared field
  description: string;
  summary?:string;
  accomplishments: Accomplishment[];
  type: 'career' | 'hobby' | 'education' | 'independent';
  startDate: Date;
  endDate: Date;
  roles: string[];
  tags?: string[];       // New property to help with filtering and categorization
  externalLink?: string; // Optional external reference (e.g., project or company website)
}

export interface Accomplishment {
  description: string;
  role: string;       // Role in which it was achieved
  learnings: string[]; // What was learned or the 'reward' achieved
}

const quests: Quest[] = [
{
  id: 101,
  titles: {
    retro: 'The Fiscal Strategist',
    sleek: 'Financial Management Analyst at Defense Health Agency',
  },
  company: 'Defense Health Agency',
  workTitle: 'Financial Management Analyst',
  description: 'Oversaw financial planning and budget execution for enterprise-wide IT systems.',
  summary: 'Led enterprise budget formulation and execution across DHA J-6 divisions using Ektropy, Tableau, and data analytics to align resources with strategic priorities.',
  type: 'career',
  startDate: new Date('2023-04-01'),
  endDate: new Date(2035, 11, 31),
  roles: ['Financial Management Analyst'],
  tags: ['Budget Execution', 'DHA', 'Ektropy', 'Tableau'],
  accomplishments: [
    {
      description: 'Prepared Program Objective Memorandum (POM) analysis and executed complex budget strategies for DHA’s enterprise-wide IT requirements.',
      role: 'Financial Management Analyst',
      learnings: ['POM', 'Ektropy', 'DHA Budget']
    },
    {
      description: 'Developed financial dashboards in Salesforce Tableau and Excel to support senior executive briefings and decision-making.',
      role: 'Financial Management Analyst',
      learnings: ['Tableau', 'Data Visualization']
    },
    {
      description: 'Tracked spend plans, obligations, and expenditures across J-6 divisions and MTFs to ensure alignment with fiscal strategy.',
      role: 'Financial Management Analyst',
      learnings: ['Budget Tracking', 'Strategic Planning']
    },
    {
      description: 'Recommended budget reallocations and corrective actions to prevent insolvency and improve resource utilization.',
      role: 'Financial Management Analyst',
      learnings: ['Resource Optimization', 'Financial Risk Mitigation']
    }
  ]
},
{
  id: 102,
  titles: {
    retro: 'The Compliance Guardian',
    sleek: 'Budget Analyst at Defense Health Agency',
  },
  company: 'Defense Health Agency',
  workTitle: 'Budget Analyst',
  description: 'Managed MTF budgets and executed resource allocation strategies across multiple programs.',
  summary: 'Improved budget forecasting and compliance for four major MTFs through advanced reporting, strategic planning, and policy alignment.',
  type: 'career',
  startDate: new Date('2021-09-01'),
  endDate: new Date('2023-04-01'),
  roles: ['Budget Analyst'],
  tags: ['GFEBS', 'MTFs', 'Forecasting', 'Compliance'],
  accomplishments: [
    {
      description: 'Managed Military Treatment Facilities (MTF) budgets across four operating programs, ensuring compliance with DHP and fiscal policies.',
      role: 'Budget Analyst',
      learnings: ['GFEBS', 'SOO', 'Budget Compliance']
    },
    {
      description: 'Developed budget forecasts using obligation reports and financial tools to advise reallocation and prevent insolvency.',
      role: 'Budget Analyst',
      learnings: ['Forecasting', 'Trend Analysis', 'Financial Systems']
    },
    {
      description: 'Reprogrammed funds and advised leadership on strategic fund allocation to support fluctuating program operations.',
      role: 'Budget Analyst',
      learnings: ['Resource Allocation', 'Reprogramming']
    },
    {
      description: 'Produced detailed funding reports and participated in mid-year reviews and fiscal closeouts across multiple MTFs.',
      role: 'Budget Analyst',
      learnings: ['SoF Reports', 'Fiscal Closeout', 'Financial Audit Readiness'],
    },
  ],
},
{
  id: 103,
  titles: {
    retro: 'The Readiness Analyst',
    sleek: 'Budget Analyst at Defense Health Agency (Early Role)',
  },
  company: 'Defense Health Agency',
  workTitle: 'Budget Analyst',
  description: 'Analyzed, executed, and reprogrammed Defense Health Program (DHP) funding for MTFs during COVID and post-COVID operations.',
  summary: 'Oversaw multimillion-dollar DHP budgets for MTFs, ensured accurate fund utilization, and implemented contingency planning across changing operational needs.',
  type: 'career',
  startDate: new Date('2020-07-01'),
  endDate: new Date('2021-09-01'),
  roles: ['Budget Analyst'],
  tags: ['DHP', 'MTFs', 'Contingency Planning', 'GFEBS'],
  accomplishments: [
    {
      description: 'Led reprogramming of funds to support program revamping, mid-year reviews, and year-end closeout activities.',
      role: 'Budget Analyst',
      learnings: ['Reprogramming', 'SoF Reviews', 'Year-End Strategy']
    },
    {
      description: 'Monitored and coordinated execution of reimbursable and baseline funds to ensure MTF solvency.',
      role: 'Budget Analyst',
      learnings: ['Reimbursable Funding', 'Budget Execution']
    },
    {
      description: 'Created forecasting models using FMIS, IRIS, and obligation reports to ensure effective execution of appropriated funds.',
      role: 'Budget Analyst',
      learnings: ['Forecasting', 'Financial Systems', 'FMIS']
    },
    {
      description: 'Trained supply custodians and financial advisors on budget policy and execution during COVID-era shifts.',
      role: 'Budget Analyst',
      learnings: ['Training', 'Policy Guidance', 'COVID Financial Operations'],
    },
  ],
},
{
  id: 104,
  titles: {
    retro: 'Fleet Finance Commander',
    sleek: 'Financial Manager at United States Navy',
  },
  company: 'United States Navy',
  workTitle: 'Financial Manager',
  description: 'Directed shipboard budgeting and inventory control for multimillion-dollar Navy operations.',
  summary: 'Managed $80M in annual operating budgets and led financial operations supporting 97 divisions. Reduced waste, maintained readiness, and ensured mission-critical outcomes.',
  type: 'career',
  startDate: new Date('2014-08-01'),
  endDate: new Date('2019-08-01'),
  roles: ['Financial Manager'],
  tags: ['Military Finance', 'Inventory Control', 'Audit', 'OPTAR'],
  accomplishments: [
    {
      description: 'Managed $80 million annual operating target (OPTAR) account, supporting logistics and supply chain operations.',
      role: 'Financial Manager',
      learnings: ['OPTAR', 'Defense Budgeting']
    },
    {
      description: 'Supervised inventory and replenishment of 35,000+ line items valued over $260 million.',
      role: 'Financial Manager',
      learnings: ['Inventory Control', 'Supply Chain Oversight']
    },
    {
      description: 'Led implementation and training for RSUPPLY system, streamlining data conversion and reporting.',
      role: 'Financial Manager',
      learnings: ['RSUPPLY', 'Financial Systems']
    },
    {
      description: 'Conducted audits and managed DFAS reporting, achieving a 98% accuracy rate in budget transactions.',
      role: 'Financial Manager',
      learnings: ['Audit Readiness', 'DFAS'],
    }
  ],
},
{
  id: 105,
  titles: {
    retro: 'Retail Finance Advisor',
    sleek: 'Personal Banker at Wells Fargo',
  },
  company: 'Wells Fargo',
  workTitle: 'Personal Banker',
  description: 'Delivered financial solutions and advisory services while meeting sales goals in a high-volume retail banking environment.',
  summary: 'Achieved top-performer status through expert customer service, cross-selling, and portfolio management. Developed foundational skills in financial advising and relationship banking.',
  type: 'career',
  startDate: new Date('2012-10-01'),
  endDate: new Date('2014-07-31'),
  roles: ['Personal Banker'],
  tags: ['Retail Banking', 'Customer Service', 'Sales', 'Portfolio Management'],
  accomplishments: [
    {
      description: 'Achieved top performer tier in the Orange County district for three consecutive quarters.',
      role: 'Personal Banker',
      learnings: ['Sales Strategy', 'Customer Engagement']
    },
    {
      description: 'Managed customer portfolios and provided personalized financial guidance and services.',
      role: 'Personal Banker',
      learnings: ['Financial Advising', 'Relationship Management']
    },
    {
      description: 'Coordinated account maintenance, vault balancing, and financial reporting.',
      role: 'Personal Banker',
      learnings: ['Branch Operations', 'Compliance']
    },
    {
      description: 'Developed and executed marketing strategies with partners across the Orange County district.',
      role: 'Personal Banker',
      learnings: ['Marketing Strategy', 'Cross-Sell Optimization'],
    },
  ],
},
{
  id: 106,
  titles: {
    retro: 'Mastering the AI Frontier',
    sleek: 'AI Enthusiast (Hybrid)',
  },
  workTitle: 'AI Enthusiast (Hybrid)',
  description: 'Explored generative AI tools to streamline creative projects and practical automations.',
  summary: 'Tested and applied a range of generative AI tools—such as OpenAI, MidJourney, Udio, ElevenLabs, Google NotebookLM, Relevance AI, and Heygen—to enhance productivity, explore creativity, and better understand modern AI workflows. Gained hands-on experience with APIs, local model exploration, and basic Python scripting.',
  type: 'hobby',
  startDate: new Date('2022-11-01'),
  endDate: new Date(2038, 2, 10),
  roles: ['AI Enthusiast (Hybrid)'],
  tags: ['AI', 'Machine Learning', 'OpenAI', 'MidJourney', 'Python', 'Creative Tools'],
  accomplishments: [
    {
      description: 'Used OpenAI API to run real-world prompts and experiment with text-based automations.',
      role: 'AI Enthusiast (Hybrid)',
      learnings: ['Prompt Design', 'API Integration']
    },
    {
      description: 'Explored local and hosted AI models using Hugging Face and Fooocus to better understand model deployment.',
      role: 'AI Enthusiast (Hybrid)',
      learnings: ['Model Exploration', 'Generative AI Use Cases']
    },
    {
      description: 'Experimented with Bolt for rapid AI-assisted task completion and interface testing.',
      role: 'AI Enthusiast (Hybrid)',
      learnings: ['Workflow Augmentation', 'Natural Language Interfaces']
    },
    {
      description: 'Used ElevenLabs and Udio for text-to-speech and music generation projects.',
      role: 'AI Enthusiast (Hybrid)',
      learnings: ['Voice Generation', 'Generative Audio']
    },
    {
      description: 'Tested Google NotebookLM, Heygen, and Relevance AI for text-to-video, knowledge assistants, and semantic search capabilities.',
      role: 'AI Enthusiast (Hybrid)',
      learnings: ['AI Knowledge Assistants', 'Generative Video', 'Vector Search']
    },
    {
      description: 'Built light AI experiments using beginner-level Python scripting to support automation and learning.',
      role: 'AI Enthusiast (Hybrid)',
      learnings: ['Python Basics', 'AI Integration'],
      },
    ]
},
{
  id: 107,
  titles: {
    retro: 'Strategic Leadership MBA',
    sleek: 'MBA – Western Governors University',
  },
  company: 'Western Governors University',
  workTitle: 'Master of Business Administration (MBA)',
  description: 'Focused on leadership, decision-making, finance, and strategic planning.',
  summary: 'Completed an MBA program designed to develop leadership and management expertise across financial and strategic disciplines.',
  type: 'education',
  startDate: new Date('2021-08-01'),
  endDate: new Date('2023-03-01'),
  roles: ['Student'],
  tags: ['MBA', 'Business Strategy', 'Leadership'],
  accomplishments: [
    {
      description: 'MBA in Business Administration, graduated 2023.',
      role: 'Student',
      learnings: ['Strategic Leadership', 'Data-Driven Decision Making', 'Financial Management']
    }
  ]
},
{
  id: 108,
  titles: {
    retro: 'Finance Foundations',
    sleek: 'BA in Business Administration – CSU Fullerton',
  },
  company: 'California State University, Fullerton',
  workTitle: 'Bachelor of Arts in Business Administration – Finance',
  description: 'Undergraduate degree with a concentration in Finance, covering economics, investments, and risk management.',
  summary: 'Earned a B.A. in Business Administration with a finance focus, gaining skills in investment strategy, economic analysis, and financial decision-making.',
  type: 'education',
  startDate: new Date('2009-06-01'),
  endDate: new Date('2020-12-01'),
  roles: ['Student'],
  tags: ['Finance', 'Business Administration', 'Undergraduate'],
  accomplishments: [
    {
      description: 'B.A. in Business Administration with a concentration in Finance, completed in 2020.',
      role: 'Student',
      learnings: ['Investment Strategy', 'Financial Analysis', 'Risk Management']
    }
  ]
}
{
  id: 109,
  titles: {
    retro: 'Financial Command Certified',
    sleek: 'CDFM & DoD Financial Training',
  },
  workTitle: 'Certified Defense Financial Manager (CDFM)',
  description: 'Formal recognition of expertise in defense financial management, budgeting, and execution.',
  summary: 'Earned the CDFM certification and completed multiple DoD training courses in budgeting, PPBE, and audit readiness. Demonstrates deep knowledge of federal financial policies and defense resource strategy.',
  type: 'education',
  startDate: new Date('2022-01-01'),
  endDate: new Date('2023-06-01'),
  roles: ['Trainee'],
  tags: ['CDFM', 'DoD Financial Management', 'PPBE', 'Audit Readiness'],
  accomplishments: [
    {
      description: 'Earned Certified Defense Financial Manager (CDFM) credential, validating expertise in federal budgeting and resource allocation.',
      role: 'Trainee',
      learnings: ['Defense Financial Policy', 'Strategic Budget Planning']
    },
    {
      description: 'Completed DoD Financial Management courses through the Defense Acquisition University (DAU).',
      role: 'Trainee',
      learnings: ['DoD Budgeting', 'Execution Strategy']
    },
    {
      description: 'Trained in Planning, Programming, Budgeting, and Execution (PPBE) and audit readiness fundamentals.',
      role: 'Trainee',
      learnings: ['PPBE', 'Audit Readiness', 'Fiscal Law']
];

export default quests;