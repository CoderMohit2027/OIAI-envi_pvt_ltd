// ================================================================
// OIAI Site Data — All editable content in one place
// Connect to CMS or API by replacing these arrays
// ================================================================

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Courses', href: '#courses' },
  { label: 'AI Career Roadmap', href: '#roadmap' },
  { label: 'Internship', href: '#experience' },
  { label: 'Workshops', href: '#experience' },
  { label: 'Blog', href: '#blog' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const VALUE_PROPS = [
  {
    id: 'industry',
    icon: 'Briefcase',
    title: 'Industry-Relevant Learning',
    description: 'Curriculum designed in alignment with current industry demands, ensuring you learn skills that matter in today\'s technology landscape.',
    color: 'blue',
  },
  {
    id: 'projects',
    icon: 'Code2',
    title: 'Practical Projects',
    description: 'Apply what you learn through hands-on project work, building a portfolio that demonstrates your abilities to future employers.',
    color: 'violet',
  },
  {
    id: 'roadmap',
    icon: 'Map',
    title: 'Career-Oriented Roadmaps',
    description: 'Follow structured learning paths tailored to your chosen career goal — from beginner fundamentals to job-ready expertise.',
    color: 'cyan',
  },
  {
    id: 'guidance',
    icon: 'Users',
    title: 'Expert Guidance',
    description: 'Learn from experienced mentors and educators who bring real-world perspective to every concept they teach.',
    color: 'blue',
  },
  {
    id: 'internship',
    icon: 'Award',
    title: 'Internship Opportunities',
    description: 'Explore internship pathways that give you practical work experience and help bridge the gap between learning and employment.',
    color: 'violet',
  },
  {
    id: 'continuous',
    icon: 'RefreshCw',
    title: 'Continuous Skill Development',
    description: 'Technology evolves quickly. Stay current with updated content, emerging tools, and learning resources that grow with the industry.',
    color: 'cyan',
  },
];

export const COURSES = [
  {
    id: 'ai-ml',
    title: 'Artificial Intelligence & Machine Learning',
    description: 'Explore the foundations of AI and ML, covering supervised learning, neural networks, model evaluation, and practical implementation.',
    tags: ['Python', 'TensorFlow', 'Scikit-learn', 'Deep Learning'],
    duration: '16 Weeks',
    level: 'Intermediate',
    levelColor: 'violet',
    color: 'blue',
    icon: 'Brain',
  },
  {
    id: 'fullstack',
    title: 'Full Stack Web Development',
    description: 'Build complete, production-ready web applications from frontend to backend, covering modern frameworks, databases, and deployment.',
    tags: ['React', 'Node.js', 'MongoDB', 'REST APIs'],
    duration: '20 Weeks',
    level: 'Beginner–Advanced',
    levelColor: 'blue',
    color: 'violet',
    icon: 'Globe',
  },
  {
    id: 'data-science',
    title: 'Data Science & Analytics',
    description: 'Learn to collect, clean, analyze, and visualize data. Extract meaningful insights and communicate findings effectively.',
    tags: ['Python', 'Pandas', 'Matplotlib', 'SQL'],
    duration: '14 Weeks',
    level: 'Intermediate',
    levelColor: 'violet',
    color: 'cyan',
    icon: 'BarChart3',
  },
  {
    id: 'python',
    title: 'Python Programming',
    description: 'A comprehensive Python course covering programming fundamentals, data structures, OOP, and automation — ideal for beginners.',
    tags: ['Python', 'OOP', 'Automation', 'File Handling'],
    duration: '8 Weeks',
    level: 'Beginner',
    levelColor: 'green',
    color: 'blue',
    icon: 'Terminal',
  },
  {
    id: 'cloud-devops',
    title: 'Cloud Computing & DevOps',
    description: 'Understand cloud platforms, containerization, CI/CD pipelines, and the tools that power modern software infrastructure.',
    tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
    duration: '12 Weeks',
    level: 'Intermediate',
    levelColor: 'violet',
    color: 'violet',
    icon: 'Cloud',
  },
  {
    id: 'gen-ai',
    title: 'Generative AI',
    description: 'Discover how large language models and generative tools work. Learn prompt engineering, AI application development, and responsible use.',
    tags: ['LLMs', 'Prompt Engineering', 'LangChain', 'APIs'],
    duration: '10 Weeks',
    level: 'Intermediate',
    levelColor: 'cyan',
    color: 'cyan',
    icon: 'Sparkles',
  },
];

export const ROADMAP_STEPS = [
  {
    id: 1,
    number: '01',
    title: 'Choose Your Career Goal',
    description: 'Identify the technology role that excites you — data scientist, web developer, AI engineer, or cloud specialist.',
    icon: 'Target',
  },
  {
    id: 2,
    number: '02',
    title: 'Learn the Fundamentals',
    description: 'Build a strong foundation in programming, mathematics, and the core concepts relevant to your chosen path.',
    icon: 'BookOpen',
  },
  {
    id: 3,
    number: '03',
    title: 'Build Practical Projects',
    description: 'Apply your knowledge through real projects that solve practical problems and demonstrate your growing skills.',
    icon: 'Code2',
  },
  {
    id: 4,
    number: '04',
    title: 'Develop Job-Ready Skills',
    description: 'Advance to professional-level tools, workflows, and practices used in real technology teams and organizations.',
    icon: 'Zap',
  },
  {
    id: 5,
    number: '05',
    title: 'Prepare for Interviews',
    description: 'Practice technical interviews, refine your portfolio, and get guidance on presenting yourself confidently to employers.',
    icon: 'CheckCircle',
  },
];

export const EXPERIENCE_FEATURES = [
  {
    id: 'project-learning',
    title: 'Project-Based Learning',
    description: 'Every course emphasizes building things. You\'ll work on structured projects that mirror real-world use cases and professional expectations.',
    icon: 'Layers',
    tag: 'Core Approach',
  },
  {
    id: 'internships',
    title: 'Internship Pathways',
    description: 'Explore opportunities to gain professional work experience through internship programs that connect learning to practice.',
    icon: 'Briefcase',
    tag: 'Career Development',
  },
  {
    id: 'workshops',
    title: 'Workshops & Events',
    description: 'Participate in focused workshops, live sessions, and technology events that deepen your knowledge and expand your network.',
    icon: 'CalendarDays',
    tag: 'Community',
  },
  {
    id: 'student-projects',
    title: 'Student Project Showcase',
    description: 'A dedicated space to present your work, discover what other learners have built, and inspire the next generation of builders.',
    icon: 'Trophy',
    tag: 'Showcase',
  },
  {
    id: 'career-prep',
    title: 'Career Preparation',
    description: 'Access resources for resume building, portfolio development, interview practice, and career strategy as you near job readiness.',
    icon: 'Star',
    tag: 'Career Ready',
  },
];

export const BLOG_ARTICLES = [
  {
    id: 'intro-ml',
    category: 'AI & Machine Learning',
    categoryColor: 'blue',
    title: 'Getting Started with Machine Learning: A Beginner\'s Guide',
    excerpt: 'Machine learning can seem intimidating at first, but with the right approach, anyone can start understanding its core concepts and building simple models.',
    readTime: '6 min read',
    date: 'Oct 2025',
  },
  {
    id: 'career-data-science',
    category: 'Career Guidance',
    categoryColor: 'violet',
    title: 'How to Build a Career in Data Science in 2025',
    excerpt: 'Data science remains one of the most in-demand fields in technology. Here\'s a practical roadmap to help you navigate the skills and steps needed.',
    readTime: '8 min read',
    date: 'Sep 2025',
  },
  {
    id: 'interview-prep',
    category: 'Interview Preparation',
    categoryColor: 'cyan',
    title: 'Top Technical Interview Topics Every Developer Should Know',
    excerpt: 'Preparing for a technical interview? We break down the most commonly tested topics and how to approach them systematically and confidently.',
    readTime: '10 min read',
    date: 'Sep 2025',
  },
  {
    id: 'gen-ai-trends',
    category: 'Industry Trends',
    categoryColor: 'blue',
    title: 'The Rise of Generative AI: What It Means for Technology Careers',
    excerpt: 'Generative AI is reshaping how software is built and how teams work. We explore what this means for learners entering the technology field.',
    readTime: '7 min read',
    date: 'Aug 2025',
  },
  {
    id: 'python-tips',
    category: 'Learning Resources',
    categoryColor: 'green',
    title: 'Five Python Habits That Will Make You a Better Developer',
    excerpt: 'Beyond syntax and libraries, writing good Python code is about habits. These five practices will improve your code quality and development workflow.',
    readTime: '5 min read',
    date: 'Aug 2025',
  },
  {
    id: 'cloud-computing',
    category: 'Industry Trends',
    categoryColor: 'violet',
    title: 'Why Cloud Computing Skills Are Essential for Every Developer',
    excerpt: 'Cloud platforms are now central to how applications are built and deployed. Understanding cloud fundamentals is increasingly non-negotiable.',
    readTime: '6 min read',
    date: 'Jul 2025',
  },
];

export const FAQ_ITEMS = [
  {
    id: 'faq-1',
    question: 'What courses does OIAI offer?',
    answer: 'OIAI offers a range of technology-focused courses including Artificial Intelligence & Machine Learning, Full Stack Web Development, Data Science & Analytics, Python Programming, Cloud Computing & DevOps, and Generative AI. Our curriculum is regularly updated to reflect current industry needs.',
  },
  {
    id: 'faq-2',
    question: 'How do I choose the right course for me?',
    answer: 'The best starting point is to explore our AI Career Roadmap section, which helps you identify technology roles that match your interests. You can then see which learning paths align with your chosen goal. If you\'re unsure, you\'re welcome to contact us for guidance.',
  },
  {
    id: 'faq-3',
    question: 'Are practical projects included in the courses?',
    answer: 'Yes. Practical, project-based learning is central to our approach. Every course includes structured project work designed to help you apply concepts, build a portfolio, and develop skills that translate directly to real-world work.',
  },
  {
    id: 'faq-4',
    question: 'How can I explore career roadmaps?',
    answer: 'Our AI Career Roadmap section on the website introduces the concept of structured career paths for technology roles. You can explore the roadmap overview here and contact us to learn more about how we guide learners through their chosen path.',
  },
  {
    id: 'faq-5',
    question: 'How do I enquire about internship opportunities?',
    answer: 'Internship pathways are available for eligible learners. To find out more about internship opportunities, timelines, and eligibility, please use the Contact or Enquire options on this page and our team will provide details.',
  },
  {
    id: 'faq-6',
    question: 'Are the courses suitable for complete beginners?',
    answer: 'Several of our courses, including Python Programming and introductory modules, are designed specifically for beginners with no prior background. Other courses are aimed at learners who already have foundational knowledge. Each course page indicates the recommended experience level.',
  },
];

export const TESTIMONIALS = [
  {
    id: 't1',
    name: 'Student A',
    role: 'AI & ML Learner',
    initials: 'SA',
    quote: 'Placeholder: This space is reserved for a verified student testimonial. Actual feedback will be added here.',
    color: 'blue',
  },
  {
    id: 't2',
    name: 'Student B',
    role: 'Full Stack Developer',
    initials: 'SB',
    quote: 'Placeholder: This space is reserved for a verified student testimonial. Actual feedback will be added here.',
    color: 'violet',
  },
  {
    id: 't3',
    name: 'Student C',
    role: 'Data Science Learner',
    initials: 'SC',
    quote: 'Placeholder: This space is reserved for a verified student testimonial. Actual feedback will be added here.',
    color: 'cyan',
  },
];

export const FACULTY = [
  {
    id: 'f1',
    name: 'Faculty Member',
    role: 'AI & Machine Learning',
    initials: 'FM',
    bio: 'Placeholder: Faculty profile to be updated with verified information.',
    color: 'blue',
  },
  {
    id: 'f2',
    name: 'Faculty Member',
    role: 'Web Development',
    initials: 'FM',
    bio: 'Placeholder: Faculty profile to be updated with verified information.',
    color: 'violet',
  },
  {
    id: 'f3',
    name: 'Faculty Member',
    role: 'Data Science',
    initials: 'FM',
    bio: 'Placeholder: Faculty profile to be updated with verified information.',
    color: 'cyan',
  },
];

export const FOOTER_LINKS = {
  quickLinks: [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Courses', href: '#courses' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ],
  courses: [
    { label: 'AI & Machine Learning', href: '#courses' },
    { label: 'Full Stack Development', href: '#courses' },
    { label: 'Data Science', href: '#courses' },
    { label: 'Python Programming', href: '#courses' },
    { label: 'Cloud & DevOps', href: '#courses' },
    { label: 'Generative AI', href: '#courses' },
  ],
  career: [
    { label: 'Career Roadmaps', href: '#roadmap' },
    { label: 'Internships', href: '#experience' },
    { label: 'Workshops', href: '#experience' },
    { label: 'Interview Prep', href: '#blog' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms & Conditions', href: '#' },
  ],
};

// Replace with actual WhatsApp number when available
export const WHATSAPP_NUMBER = 'XXXXXXXXXX'; // e.g., '919876543210'
export const CONTACT_EMAIL = 'contact@oiai.in'; // placeholder
export const CONTACT_PHONE = '+91 XXXXX XXXXX'; // placeholder
