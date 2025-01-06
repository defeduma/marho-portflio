// src/components/Portfolio.js
import React, { useState, useEffect } from 'react';
import { 
  Linkedin, 
  Mail, 
  ChevronDown, 
  ChevronUp,
  Database,
  BarChart,
  Network,
  Settings,
  ListChecks,
  FileText,
  Workflow,
  Binary,
  ExternalLink
} from 'lucide-react';
import Logo from './logo';
import NavLink from './NavLink';
/**import { ChevronDown, ChevronUp } from 'lucide-react';**/
import profilePhoto from '../assets/profile-photo.jpg';
import aboutImage from '../assets/about-image.jpg'; 
import agileBadge from '../assets/badges/agile-badge.jpg';
import scrumBadge from '../assets/badges/scrum-badge.jpg';
import dataBadge from '../assets/badges/data-badge.jpg';
import agilefonBadge from '../assets/badges/agile-foundation-badge.jpg';
import swansealogo from '../assets/logos/swansea-university-logo.jpg';
import aunlogo from '../assets/logos/american-univeristy-logo.jpg';



const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('experience');
  const [expandedProject, setExpandedProject] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [activeProjectType, setActiveProjectType] = useState('consulting');
 

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for section detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-50% 0px',
        threshold: 0
      }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Scroll to next section
  const scrollToNextSection = () => {
    const sections = document.querySelectorAll('section[id]');
    const currentIndex = Array.from(sections).findIndex(section => section.id === activeSection);
    if (currentIndex < sections.length - 1) {
      sections[currentIndex + 1].scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      id: 1,
      title: "Product Suite Integration",
      summary: "Led the redesign and integration of independent applications into a cohesive product suite, resulting in a 10% increase in sales",
      company: "Jean Edwards Consulting",
      client: "Internal Project",
      description: `This enterprise-wide initiative focused on integrating disparate systems into a unified product suite. 
      Key achievements include:
      • Successfully consolidated 5 independent applications into a single, cohesive platform
      • Reduced operational costs by 25% through system optimization
      • Implemented automated workflows resulting in 40% faster processing times
      • Led a cross-functional team of 12 members across 3 departments
      • Established new integration patterns that became company standards`,
      technology: ["Java", "Spring Boot", "React", "MySQL", "Redis", "AWS"],
      tools: ["JIRA", "Confluence", "Jenkins", "Git", "SonarQube", "Postman"],
      tags: ["Business Analysis", "Product Strategy", "Integration"]
    },
    {
      id: 2,
      title: "Digital Transformation and Process Automation Project",
      summary: "Implemented Agile methodologies (Scrum and Kanban) reducing project delays by 15%",
      company: "Jean Edwards Consulting",
      client: "eMQT",
      description: `Led the end-to-end digital transformation of a paper-intensive business process into a streamlined data management and reporting system. 
      Successfully drove product development from conception through deployment, resulting in improved operational efficiency and data accuracy for the client.

      Key responsibilities and achievements:
      
      • Orchestrated cross-functional collaboration between design, development, and product teams to ensure alignment with business objectives and user needs
      • Drove product backlog management and feature prioritization based on business value and user impact
      • Successfully delivered a complete digital transformation solution that eliminated paper-based processes
      • Successfully managed the system launch, post-deployment support, and user training programs
      • Created comprehensive user documentation, including training manuals and release notes
      • Maintained strong stakeholder engagement throughout the project lifecycle`,
      technology: ["NoSQL", "SharePoint", "Power BI"],
      tools: ["JIRA", "Figma", "Miro", "Microsoft Teams", "Selenium"],
      tags: ["Agile", "JIRA", "Process Improvement"]
    },
    {
      id: 3,
      title: "Customer Experience Enhancement",
      summary: "Drove product development strategy resulting in two new offerings and 20% revenue boost",
      company: "Insurance Corp",
      client: "Retail Banking Division",
      description: `Spearheaded the enhancement of customer-facing digital platforms to improve user experience
      and increase customer satisfaction.
      Key achievements include:
      • Reduced customer complaint rates by 35%
      • Increased mobile app usage by 45%
      • Implemented real-time customer feedback system
      • Led user research and stakeholder workshops
      • Developed comprehensive customer journey maps`,
      technology: ["React Native", "Node.js", "MongoDB", "Firebase"],
      tools: ["Figma", "UserTesting", "Google Analytics", "Hotjar", "Amplitude"],
      tags: ["Product Development", "Stakeholder Management", "Requirements Gathering"]
    }
  ];

  const dataProjects = [
    {
      id: 1,
      title: "Sales Performance Analytics Dashboard",
      summary: "Developed comprehensive sales analytics solution with real-time KPI tracking and predictive modeling",
      company: "Jean Edwards Consulting",
      client: "Retail Client",
      description: `Led the development of an end-to-end sales analytics solution using Power BI and Python. 
      Key achievements include:
      • Created interactive dashboards tracking 15+ KPIs in real-time
      • Implemented predictive models achieving 85% accuracy in sales forecasting
      • Automated data processing reducing reporting time by 70%
      • Developed custom visualizations for trend analysis
      • Integrated multiple data sources including SQL, Excel, and CRM data`,
      technology: ["Python", "Power BI", "SQL", "Azure", "Pandas", "Scikit-learn"],
      tools: ["Git", "Jupyter Notebook", "DAX", "Power Query"],
      tags: ["Data Analysis", "Business Intelligence", "Predictive Analytics"],
      dashboard: "/path-to-dashboard-screenshot.jpg",
      githubLink: "https://github.com/yourusername/sales-analytics"
    },
    {
      id: 2,
      title: "Customer Segmentation Analysis",
      summary: "Implemented advanced customer segmentation using machine learning techniques to drive targeted marketing strategies",
      company: "Jean Edwards Consulting",
      client: "Finance Sector",
      description: `Developed a customer segmentation model using clustering algorithms to identify distinct customer groups and behavior patterns.
      Key achievements include:
      • Identified 5 distinct customer segments with unique characteristics
      • Created interactive segment analysis dashboard
      • Developed automated reporting system
      • Improved marketing ROI by 25% through targeted campaigns
      • Generated monthly customer behavior insights reports`,
      technology: ["R", "Python", "Tableau", "SQL"],
      tools: ["RStudio", "Jupyter", "Git", "Tableau Desktop"],
      tags: ["Machine Learning", "Customer Analytics", "Data Visualization"],
      dashboard: "/path-to-segmentation-dashboard.jpg",
      githubLink: "https://github.com/yourusername/customer-segmentation"
    }
  ];
  
  const skills = [
    {
      category: "Technical Skills",
      icon: Database,
      description: "Core technical expertise and tools",
      bgColor: "from-blue-500/10 to-indigo-500/10",
      borderColor: "border-blue-500/20",
      items: [
        { 
          name: "SQL & Databases", 
          icon: Database,
          proficiency: 90,
          description: "Database design, complex queries, performance optimization"
        },
        { 
          name: "Business Intelligence", 
          icon: BarChart,
          proficiency: 85,
          description: "Data visualization, analytics, report development"
        },
        { 
          name: "System Integration", 
          icon: Network,
          proficiency: 80,
          description: "API integration, system architecture, middleware development"
        },
        { 
          name: "Process Automation", 
          icon: Settings,
          proficiency: 95,
          description: "Workflow automation, business process optimization"
        }
      ]
    },
    {
      category: "Methodologies",
      icon: Workflow,
      description: "Project management and development methodologies",
      bgColor: "from-emerald-500/10 to-teal-500/10",
      borderColor: "border-emerald-500/20",
      items: [
        { 
          name: "Agile", 
          icon: Workflow,
          proficiency: 95,
          description: "Scrum, Kanban, and Agile project management"
        },
        { 
          name: "Business Analysis", 
          icon: ListChecks,
          proficiency: 90,
          description: "Requirements engineering and process modeling"
        },
        { 
          name: "System Design", 
          icon: Binary,
          proficiency: 85,
          description: "Architecture and solution design"
        },
        { 
          name: "Documentation", 
          icon: FileText,
          proficiency: 90,
          description: "Technical writing and documentation"
        }
      ]
    }
  ];
  /*Skills section v1 - older version
    {
      category: "Methodologies",
      icon: Shapes,
      description: "Project management and development methodologies",
      items: [
        { name: "Agile", icon: FastForward },
        { name: "Scrum", icon: GitPullRequest },
        { name: "Waterfall", icon: LineChart },
        { name: "SDLC", icon: Bug }
      ]
    },
    {
      category: "Tools",
      icon: Laptop,
      description: "Proficiency in various business and analysis tools",
      items: [
        { name: "Microsoft Excel", icon: Table },
        { name: "Tableau", icon: BarChart },
        { name: "MySQL", icon: Database },
        { name: "Microsoft Visio", icon: GitBranch }
      ]
    }
  ];
  End of v1 skills section */
  const SkillCard = ({ skill, isHovered, onHover }) => {
    return (
      <div
        className="relative group cursor-pointer"
        onMouseEnter={() => onHover(true)}
        onMouseLeave={() => onHover(false)}
      >
        <div className={`
          p-6 rounded-xl border bg-gradient-to-br transition-all duration-300
          ${skill.borderColor} ${skill.bgColor}
          ${isHovered ? 'scale-105 shadow-lg shadow-indigo-500/10' : 'scale-100'}
        `}>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <skill.icon className="w-8 h-8 text-indigo-500" />
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-semibold text-white mb-2">
                {skill.category}
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                {skill.description}
              </p>
            </div>
          </div>
  
          <div className="space-y-4 mt-6">
            {skill.items.map((item, index) => (
              <div 
                key={index}
                className="relative bg-gray-900/50 rounded-lg p-4 hover:bg-gray-900/70 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  {item.logo ? (
                    <img 
                      src={item.logo} 
                      alt={item.name} 
                      className="w-12 h-12 rounded-lg bg-white p-2"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-indigo-400" />
                    </div>
                  )}
                  <div className="flex-grow">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium text-white">{item.name}</h4>
                      <span className="text-sm text-indigo-400">{item.proficiency}%</span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-1.5">
                      <div 
                        className="bg-gradient-to-r from-indigo-500 to-indigo-400 h-1.5 rounded-full transition-all duration-500"
                        style={{ 
                          width: isHovered ? `${item.proficiency}%` : '0%' 
                        }}
                      />
                    </div>
                    {isHovered && (
                      <p className="text-sm text-gray-400 mt-2 transition-all duration-300">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
  
        {/* Decorative Elements */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-0 group-hover:opacity-15 transition duration-300" />
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav 
        className={`fixed w-full transition-all duration-300 z-50 ${
          isScrolled 
            ? 'bg-black/90 backdrop-blur-md py-2' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <Logo />
            <div className="flex gap-6">
              <NavLink href="#home" isActive={activeSection === 'home'}>Home</NavLink>
              <NavLink href="#about" isActive={activeSection === 'about'}>About</NavLink>
              <NavLink href="#services" isActive={activeSection === 'services'}>Services</NavLink>
              <NavLink href="#projects" isActive={activeSection === 'projects'}>Projects</NavLink>
              <NavLink href="#contact" isActive={activeSection === 'contact'}>Contact</NavLink>
            </div>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="relative min-h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-right-top bg-no-repeat"
          style={{
            backgroundImage: `url(${profilePhoto})`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent" />
        
        <div className="relative h-screen flex items-center">
          <div className="max-w-6xl mx-auto px-4 w-full">
            <div className="max-w-2xl">
              <div className="animate-fadeIn">
                <h1 className="text-5xl font-bold text-white mb-4">
                  Marho Efeduma
                </h1>
                <p className="text-2xl text-gray-300 mb-4">
                  Certified Agile Business Analyst
                </p>
                <p className="text-lg text-gray-400 mb-8 max-w-xl">
                  7+ years of experience in technology-driven roles within Insurance, 
                  Reinsurance, and Finance sectors. 
                </p>
                <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/oghenemarho-efeduma"
                  className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-green-500 text-white px-6 py-3 rounded-lg hover:from-emerald-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105"
                >
                 <Linkedin size={20} />
                 Connect on LinkedIn
                </a>
                <a 
                  href="mailto:defeduma@gmail.com"
                  className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-emerald-500 transition-all duration-300 transform hover:scale-105 border border-emerald-500"
                >
                 <Mail size={20} />
                 Email Me
                 </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToNextSection}
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="Scroll to next section"
          >
            <ChevronDown size={24} />
          </button>
        </div>
      </section>

     {/* About Section */}
<section id="about" className="relative bg-black min-h-screen">
  {/* Themed Background */}
<div className="absolute inset-0">
  <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full filter blur-3xl"></div>
    </div>
  </div>
</div>

  {/* Content */}
  <div className="relative max-w-6xl mx-auto px-4 py-20">
   <div className="lg:w-2/3">
      <h2 className="text-3xl font-bold text-white mb-8">About Me</h2>
      <p className="text-gray-400 mb-12">
      A Certified Agile Business Analyst with 7+ years in insurance and finance, 
      I transform complex business challenges into elegant technical solutions. 
      I excel at leading digital transformation initiatives, combining analytical expertise
      with strategic product ownership to drive measurable results.
      My strength lies in translating stakeholder needs into clear roadmaps while fostering 
      collaboration between business and technical teams. 
      I've successfully reduced operational costs by 30% through strategic process improvements 
      and accelerated project delivery by implementing robust Agile methodologies.
        Key focus areas:
      </p>

      {/* Tabs Navigation */}
      <div className="flex space-x-8 border-b border-gray-800 mb-8">
        <button
          onClick={() => setActiveTab('experience')}
          className={`pb-4 relative text-lg font-medium transition-colors duration-200 
            ${activeTab === 'experience' ? 'text-emerald-500' : 'text-gray-400 hover:text-white'}`}
        >
          Experience
          {/* Active Tab Indicator */}
          <span 
            className={`absolute bottom-0 left-0 w-full h-0.5 bg-emerald-500 transform transition-transform duration-200 
            ${activeTab === 'experience' ? 'scale-x-100' : 'scale-x-0'}`}
          />
        </button>
        <button
          onClick={() => setActiveTab('education')}
          className={`pb-4 relative text-lg font-medium transition-colors duration-200 
            ${activeTab === 'education' ? 'text-emerald-500' : 'text-gray-400 hover:text-white'}`}
        >
          Education
          <span 
            className={`absolute bottom-0 left-0 w-full h-0.5 bg-emerald-500 transform transition-transform duration-200 
            ${activeTab === 'education' ? 'scale-x-100' : 'scale-x-0'}`}
          />
        </button>
        <button
          onClick={() => setActiveTab('certifications')}
          className={`pb-4 relative text-lg font-medium transition-colors duration-200 
            ${activeTab === 'certifications' ? 'text-emerald-500' : 'text-gray-400 hover:text-white'}`}
        >
          Certifications
          <span 
            className={`absolute bottom-0 left-0 w-full h-0.5 bg-emerald-500 transform transition-transform duration-200 
            ${activeTab === 'certifications' ? 'scale-x-100' : 'scale-x-0'}`}
          />
        </button>
      </div>

      {/* Tab Content */}
      <div className="min-h-[400px]">
        {/* Experience Tab */}
        <div className={`transition-opacity duration-300 ${activeTab === 'experience' ? 'opacity-100' : 'opacity-0 hidden'}`}>
          <div className="space-y-6">
            <div className="border-l-2 border-emerald-500 pl-4">
              <h4 className="text-white font-medium text-lg">Senior Business Analyst</h4>
              <p className="text-gray-400 mb-2">Jean Edwards Consulting • 2021 - 2023</p>
              <p className="text-gray-500">
                Leading digital transformation initiatives and Agile methodology implementation
                across multiple projects.
              </p>
            </div>
            <div className="border-l-2 border-emerald-500 pl-4">
              <h4 className="text-white font-medium text-lg">Business Analyst</h4>
              <p className="text-gray-400 mb-2">Turnkey Africa • 2015 - 2021</p>
              <p className="text-gray-500">
                Managed requirement gathering and stakeholder communication for
                enterprise-level projects.
              </p>
            </div>
            <div className="border-l-2 border-emerald-500 pl-4">
              <h4 className="text-white font-medium text-lg">Technical Support Analyst</h4>
              <p className="text-gray-400 mb-2">Turnkey Africa • 2015 - 2021</p>
              <p className="text-gray-500">
                Managed requirement gathering and stakeholder communication for
                enterprise-level projects.
              </p>
            </div>
          </div>
        </div>

     {/* Education Tab */}
<div className={`transition-opacity duration-300 ${activeTab === 'education' ? 'opacity-100' : 'opacity-0 hidden'}`}>
  <div className="space-y-8">
    {/* Masters Degree */}
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800 hover:bg-gray-900/70 transition-all duration-300">
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0 w-16 h-16 bg-white rounded-lg p-2 flex items-center justify-center">
          <img 
            src={swansealogo} 
            alt="Swansea University Logo" 
            className="max-w-full max-h-full object-contain"
          />
        </div>
        <div className="flex-grow">
          <div className="flex items-start justify-between">
            <div>
              <h4 className="text-white font-medium text-lg">Master's in Business Analytics</h4>
              <p className="text-emerald-500 font-medium mt-1">Swansea University</p>
            </div>
            <span className="text-gray-400 text-sm">2016 - 2018</span>
          </div>
          <div className="mt-4 space-y-2">
            <p className="text-gray-400">
              Specialized in Business Analytics and Digital Transformation
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                Business Strategy
              </span>
              <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                Data Analytics
              </span>
              <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                Digital Innovation
              </span>
            </div>
          </div>
          <div className="mt-4 border-t border-gray-800 pt-4">
            <div className="flex items-center gap-2 text-gray-400">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                <span className="text-sm">GPA: 3.8/4.0</span>
              </div>
              <span className="text-gray-600">•</span>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                <span className="text-sm">Dean's Honor List</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bachelor's Degree */}
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800 hover:bg-gray-900/70 transition-all duration-300">
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0 w-16 h-16 bg-white rounded-lg p-2 flex items-center justify-center">
          <img 
            src={aunlogo} 
            alt="American University of Nigeria Logo" 
            className="max-w-full max-h-full object-contain"
          />
        </div>
        <div className="flex-grow">
          <div className="flex items-start justify-between">
            <div>
              <h4 className="text-white font-medium text-lg">Bachelor's in Telecommunication and wireless technologies</h4>
              <p className="text-emerald-500 font-medium mt-1">American University of Nigeria</p>
            </div>
            <span className="text-gray-400 text-sm">2012 - 2016</span>
          </div>
          <div className="mt-4 space-y-2">
            <p className="text-gray-400">
              Focus on Business Analysis and System Design
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                Systems Analysis
              </span>
              <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                Database Management
              </span>
              <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                Software Engineering
              </span>
            </div>
          </div>
          <div className="mt-4 border-t border-gray-800 pt-4">
            <div className="flex items-center gap-2 text-gray-400">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                <span className="text-sm">GPA: 3.7/4.0</span>
              </div>
              <span className="text-gray-600">•</span>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                <span className="text-sm">Academic Excellence Award</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        {/* Certifications Tab */}
<div className={`transition-opacity duration-300 ${activeTab === 'certifications' ? 'opacity-100' : 'opacity-0 hidden'}`}>
  <div className="grid grid-cols-1 gap-6">
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800 hover:bg-gray-900/70 transition-colors duration-300">
      <div className="flex items-center gap-6">
        <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden">
          <img 
            src={agileBadge} 
            alt="IIBA Certification Badge" 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="text-white font-medium text-lg">AgileBA® Practitioner</h4>
          <p className="text-gray-400 mt-1">APMG International • 2023</p>
          <p className="text-gray-500 mt-2">
            Certification number: 09892381-01-PSGW
          </p>
        </div>
      </div>
    </div>

    <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800 hover:bg-gray-900/70 transition-colors duration-300">
      <div className="flex items-center gap-6">
        <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden">
          <img 
            src={agilefonBadge} 
            alt="AgileBA Foundation Badge" 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="text-white font-medium text-lg">AgileBA® Foundation </h4>
          <p className="text-gray-400 mt-1">APMG International • 2023</p>
          <p className="text-gray-500 mt-2">
            Certification number: 09887644-01-6L74
          </p>
        </div>
      </div>
    </div>

    <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800 hover:bg-gray-900/70 transition-colors duration-300">
      <div className="flex items-center gap-6">
        <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden">
          <img 
            src={scrumBadge} 
            alt="Scrum.org Certification Badge" 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="text-white font-medium text-lg">Professional Scrum Product Owner™ I (PSPO I)</h4>
          <p className="text-gray-400 mt-1">Scrum.org • 2024</p>
          <p className="text-gray-500 mt-2">
            Certification number: 
          </p>
        </div>
      </div>
    </div>

    <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800 hover:bg-gray-900/70 transition-colors duration-300">
      <div className="flex items-center gap-6">
        <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden">
          <img 
            src={dataBadge} 
            alt="Data Science & Analytics Intro Badge" 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="text-white font-medium text-lg">Data Science & Analytics Intro</h4>
          <p className="text-gray-400 mt-1">IBM • 2018</p>
          <p className="text-gray-500 mt-2">
            Certification number: ITIL-2018-9012
          </p>
        </div>
      </div>
    </div>

    
  </div>
</div>
      </div>
    </div>
  </div>
</section>

      {/* Services Section */}
<section id="services" className="relative bg-black min-h-screen py-20">
  <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />
  
  <div className="relative max-w-6xl mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold text-white mb-4">Services</h2>
      <p className="text-gray-400 max-w-2xl mx-auto">
        Delivering end-to-end solutions with a focus on value and innovation
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Business Analysis */}
      <div className="group relative overflow-hidden">
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 h-full 
          transition-all duration-300 hover:bg-gray-900/70 hover:scale-[1.02]">
          <div className="mb-4 p-3 bg-indigo-500/10 w-fit rounded-lg">
            <FileText className="w-6 h-6 text-indigo-400" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-3">Business Analysis</h3>
          <p className="text-gray-400 mb-4">
            Bridging business needs with technical solutions through thorough analysis and strategic planning.
          </p>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
              Requirements Engineering
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
              Process Optimization
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
              Stakeholder Management
            </li>
          </ul>
        </div>
      </div>

      {/* IT Consultation */}
      <div className="group relative overflow-hidden">
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 h-full 
          transition-all duration-300 hover:bg-gray-900/70 hover:scale-[1.02]">
          <div className="mb-4 p-3 bg-purple-500/10 w-fit rounded-lg">
            <Settings className="w-6 h-6 text-purple-400" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-3">IT Consultation</h3>
          <p className="text-gray-400 mb-4">
            Strategic technology advisory focusing on digital transformation and system optimization.
          </p>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
              Digital Strategy
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
              System Architecture
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
              Technology Assessment
            </li>
          </ul>
        </div>
      </div>

      {/* Data Analysis */}
      <div className="group relative overflow-hidden">
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 h-full 
          transition-all duration-300 hover:bg-gray-900/70 hover:scale-[1.02]">
          <div className="mb-4 p-3 bg-emerald-500/10 w-fit rounded-lg">
            <BarChart className="w-6 h-6 text-emerald-400" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-3">Data Analysis</h3>
          <p className="text-gray-400 mb-4">
            Transforming data into actionable insights through advanced analytics and visualization.
          </p>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
              Business Intelligence
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
              Data Visualization
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
              Performance Analytics
            </li>
          </ul>
        </div>
      </div>

      {/* Technical Support */}
      <div className="group relative overflow-hidden lg:col-span-3">
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 
          transition-all duration-300 hover:bg-gray-900/70">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="mb-4 p-3 bg-blue-500/10 w-fit rounded-lg">
                <Network className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Technical & Customer Support</h3>
              <p className="text-gray-400 mb-4">
                Comprehensive technical and customer support solutions focusing on user satisfaction and system reliability.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-white font-medium mb-2">Technical Support</h4>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    System Maintenance
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    Troubleshooting
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    Performance Monitoring
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-medium mb-2">Customer Support</h4>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    User Training
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    Documentation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    Support Management
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    {/* Projects Section */}
<section id="projects" className="bg-black/95">
  <div className="max-w-6xl mx-auto px-4 py-20">
    <h2 className="text-3xl font-bold text-white mb-8">Key Projects & Achievements</h2>
    
    {/* Project Type Tabs */}
    <div className="flex space-x-8 border-b border-gray-800 mb-8">
      <button
        onClick={() => setActiveProjectType('consulting')}
        className={`pb-4 relative text-lg font-medium transition-colors duration-200 
          ${activeProjectType === 'consulting' ? 'text-emerald-500' : 'text-gray-400 hover:text-white'}`}
      >
        Consulting
        <span 
          className={`absolute bottom-0 left-0 w-full h-0.5 bg-emerald-500 transform transition-transform duration-200 
          ${activeProjectType === 'consulting' ? 'scale-x-100' : 'scale-x-0'}`}
        />
      </button>
      <button
        onClick={() => setActiveProjectType('data')}
        className={`pb-4 relative text-lg font-medium transition-colors duration-200 
          ${activeProjectType === 'data' ? 'text-emerald-500' : 'text-gray-400 hover:text-white'}`}
      >
        Data
        <span 
          className={`absolute bottom-0 left-0 w-full h-0.5 bg-emerald-500 transform transition-transform duration-200 
          ${activeProjectType === 'data' ? 'scale-x-100' : 'scale-x-0'}`}
        />
      </button>
    </div>

    <div className="space-y-6">
      {/* Consulting Projects */}
      <div className={`transition-all duration-300 ${activeProjectType === 'consulting' ? 'block' : 'hidden'}`}>
        {projects.map((project) => (
          <div 
            key={project.id}
            className="bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800 overflow-hidden"
          >
            <button
              onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-900/70 transition-colors duration-300"
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white text-left mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-left">{project.summary}</p>
              </div>
              <div className="ml-4 text-gray-400">
                {expandedProject === project.id ? (
                  <ChevronUp className="w-6 h-6" />
                ) : (
                  <ChevronDown className="w-6 h-6" />
                )}
              </div>
            </button>

            {expandedProject === project.id && (
              <div className="px-6 pb-6 border-t border-gray-800">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <div className="mb-4">
                      <h4 className="text-emerald-500 font-medium mb-2">Company</h4>
                      <p className="text-gray-300">{project.company}</p>
                    </div>
                    <div>
                      <h4 className="text-emerald-500 font-medium mb-2">Client</h4>
                      <p className="text-gray-300">{project.client}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-emerald-500 font-medium mb-2">Areas</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-emerald-900/50 text-emerald-200 px-3 py-1 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="text-emerald-500 font-medium mb-2">Project Description</h4>
                  <p className="text-gray-300 whitespace-pre-line">{project.description}</p>
                </div>

                <div className="mt-6">
                  <h4 className="text-emerald-500 font-medium mb-2">Technology Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technology.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="text-emerald-500 font-medium mb-2">Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Data Projects */}
      <div className={`transition-all duration-300 ${activeProjectType === 'data' ? 'block' : 'hidden'}`}>
        {dataProjects.map((project) => (
          <div 
            key={project.id}
            className="bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800 overflow-hidden"
          >
            {/* Same structure as consulting projects */}
            <button
              onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-900/70 transition-colors duration-300"
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white text-left mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-left">{project.summary}</p>
              </div>
              <div className="ml-4 text-gray-400">
                {expandedProject === project.id ? (
                  <ChevronUp className="w-6 h-6" />
                ) : (
                  <ChevronDown className="w-6 h-6" />
                )}
              </div>
            </button>

            {expandedProject === project.id && (
              <div className="px-6 pb-6 border-t border-gray-800">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <div className="mb-4">
                      <h4 className="text-emerald-500 font-medium mb-2">Company</h4>
                      <p className="text-gray-300">{project.company}</p>
                    </div>
                    <div>
                      <h4 className="text-emerald-500 font-medium mb-2">Client</h4>
                      <p className="text-gray-300">{project.client}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-emerald-500 font-medium mb-2">Areas</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-emerald-900/50 text-emerald-200 px-3 py-1 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="text-emerald-500 font-medium mb-2">Project Description</h4>
                  <p className="text-gray-300 whitespace-pre-line">{project.description}</p>
                </div>

                {project.dashboard && (
                  <div className="mt-6">
                    <h4 className="text-emerald-500 font-medium mb-2">Dashboard Preview</h4>
                    <img 
                      src={project.dashboard} 
                      alt="Dashboard Preview" 
                      className="rounded-lg border border-gray-800 w-full"
                    />
                  </div>
                )}

                <div className="mt-6">
                  <h4 className="text-emerald-500 font-medium mb-2">Technology Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technology.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="text-emerald-500 font-medium mb-2">Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {project.githubLink && (
                  <div className="mt-6">
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-emerald-500 hover:text-emerald-400 transition-colors duration-200"
                    >
                      View Source Code <ExternalLink size={16} className="ml-2" />
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Contact Section */}
      <section id="contact" className="bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-gray-400 mb-8">
              Looking to collaborate on business analysis projects or discuss opportunities?
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="mailto:defeduma@gmail.com"
                className="inline-flex items-center bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Email Me <Mail size={20} className="ml-2" />
              </a>
              <a
                href="https://www.linkedin.com/in/oghenemarho-efeduma"
                className="inline-flex items-center border border-indigo-500 text-indigo-500 px-6 py-3 rounded-lg hover:bg-indigo-500 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Connect on LinkedIn <Linkedin size={20} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center text-gray-400">
            <p>© {new Date().getFullYear()} Marho Efeduma. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;