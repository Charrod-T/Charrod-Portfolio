import { color } from "framer-motion";
import {
	Terminal,
	GraduationCap,
	Briefcase,
	Award,
	Rocket,
	Heart,
	Coffee,
	BookOpen,
	Zap,
	Database,
	Server,
	Cloud,
	Mail,
	MapPin,
	Phone,
} from "lucide-react";

import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
//import create projects thumbnails for all as preview png images

export const SKILLS_CATEGORY = [
	{
		title: "Frontend",
		icon: Terminal,
		description: "Crafting beautiful and elegant responsive user interfaces",
		skills: [
			{ name: "React", level: 10, color: "bg-green-500" },
			{ name: "TypeScript", level: 10, color: "bg-blue-600" },
			{ name: "Next.js", level: 10, color: "bg-gray-800" },
			{ name: "Tailwind CSS", level: 10, color: "bg-cyan-500" },
			{ name: "Framer Motion", level: 10, color: "bg-pink-500" },
		],
	},
	{
		title: "Backend",
		icon: Server,
		description: "Building robust server-side solutions",
		skills: [
			{ name: "React", level: 0, color: "bg-green-500" },
			{ name: "Express.js", level: 0, color: "bg-gray-700" },
			{ name: "Python", level: 0, color: "bg-yellow-500" },
			{ name: "GraphQL", level: 0, color: "bg-pink-600" },
			{ name: "Rest APIs", level: 0, color: "bg-orange-500" },
		],
	},
	{
		title: "Database",
		icon: Database,
		description: "Managing and optimizing data storage",
		skills: [
			{ name: "MongoDB", level: 0, color: "bg-green-600" },
			{ name: "Redis", level: 0, color: "bg-green-700" },
			{ name: "Prisma", level: 0, color: "bg-green-600" },
			{ name: "Firebase", level: 0, color: "bg-green-600" },
		],
	},
	{
		title: "DevOps",
		icon: Cloud,
		description: "Deploying and scaling applications",
		skills: [
			{ name: "Docker", level: 0, color: "bg-blue-600" },
			{ name: "AWS", level: 0, color: "bg-orange-600" },
			{ name: "Vercel", level: 0, color: "bg-gray-900" },
			{ name: "Git", level: 0, color: "bg-orange-700" },
			{ name: "CI/CD", level: 0, color: "bg-purple-600" },
		],
	},
];

export const TECH_STACK = [
	"JavaScript",
	"Html5",
	"CSS3",
	"Sass",
	"Webpack",
	"Vite",
	"Jest",
	"Cypress",
	"Figma",
	"Adobe XD",
	"Notion",
	"Slack",
];

export const STATS = [
	{ number: "7", label: "Projects Completed" },
	{ number: "0", label: "Years Experience" },
	{ number: "15+", label: "Technologies" },
	{ number: "0", label: "Client Satisfaction" },
];

export const PROJECTS = [
	{
		id: 1,
		//Fat Full catering web app
		title: "",
		description: "A responsive web app for catering business",
		image: "#",
		tags: ["React", "Tailwind", "Framer motion"],
		liveUrl: "#",
		githubUrl: "#",
		featured: false,
		category: "Web App",
	},

	//{
	//id: 2,
	//title: "E-Commerce platform",
	//description:
	//"A full-stack e-commerce solution with advanced filtering, payment intergration and real-time inventory",
	//image: "#",
	//tags: ["React", "Tailwind", "Framer motion"],
	//liveUrl: "#",
	//githubUrl: "#",
	//featured: false,
	//category: "Full Stack",
	//},
	//{
	//id: 3,
	//title: "Blog App with AI post Generator",
	//description: "A full-stack blog app using the MERN stack - with full Markdown support, tag filtering, and an intergrated AI",
	//image:"#",
	//tags: ["React", "Node.js", "MongoDB", "Tailwind"],
	//liveUrl:"#",
	//githubUrl: "#",
	//featured: false,
	//category: "Full Stack",
	//},
	//{
	//id: 4,
	//title: "Task Management App",
	//description: "Collabrative project managment tool with real-time updates, team chat, and advanced analytics dashboard",
	//image:"#",
	//tags: ["Next.js", "Typscript", "Node.js", "MongoDB"],
	//liveUrl:"#",
	//githubUrl: "#",
	//featured: false,
	//category: "Web App",
	//},
	//{
	//id: 5,
	//title: "Ai powered Interviw Prep App",
	//description: "A smart Ai-powered Interview Preparation App using the MERN stack - along with the Gemini API for intergration",
	//image:"#",
	//tags: ["Next.js", "TypeScript", "MongoDB", "Node.js"],
	//liveUrl:"#",
	//githubUrl: "#",
	//featured: false,
	//category: "Web App",
	//},
	//{
	//id: 6,
	//title: "Resume Builder App",
	//description: "A fully functional Resume Builder App using the MERN stack along with Tailwind CSS fro a clean, modern style",
	//image:"#",
	//tags: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
	//liveUrl:"#",
	//githubUrl: "#",
	//featured: false,
	//category: "Web APp",
	//},
	//{
	//id: 7,
	//title: "Expense Tracker App",
	//description: "This app includes user authentication with JWT, income and expense tracking, interactive charts and...",
	//image:"#",
	//tags: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
	//liveUrl:"#",
	//githubUrl: "#",
	//featured: true,
	//category: "Web App",
	//},
];

export const JOURNEY_STEPS = [
	{
		year: "2010",
		title: "Building Tech Skills from the Ground up",
		company: "Self-Taught",
		description:
			"Begin self-taught journey into software, hardware, coding, apps and web-development building skills step by step.",
		icon: Terminal,
		color: "bg-blue-500",
	},
	{
		year: "2025",
		title: "Software Engineering Certification",
		company: "Ed2Go/Quickstart",
		description:
			"Enrolled in an intensive 6-month Software Engineering boot camp, earning my certification of completion in 3 months. Gaining hands-on experience in coding, application development, and web technologies, while building real-world projects that prepare me for a career as a software engineer.",
		icon: GraduationCap,
		color: "bg-purple-500",
	},
];
export const PASSIONS = [
	{
		icon: Heart,
		title: "User Experience",
		description: "Crafting intuitive interfaces that users love",
	},
	{
		icon: Coffee,
		title: "Problem Solving",
		description: "Turning complex challenges into elegant solutions",
	},
	{
		icon: BookOpen,
		title: "Continuous Learning",
		description: "Always exploring new technologies and best practices",
	},
];

export const SOCIAL_LINKS = [
	{
		name: "GitHub",
		icon: FiGithub,
		url: "https://github.com/Charrod-T/",
		color: "hover:text-gray-400",
		bgColor: "hover:bg-gray-800",
	},
	{
		name: "Email",
		icon: Mail,
		url: "Mailto:charrodterrell@yahoo.com",
		color: "hover:text-green-400",
		bgColor: "hover:bg-green-500/10",
	},
	{
		name: "Linkedin",
		icon: FiLinkedin,
		url: "https://www.linkedin.com/in/charrod-terrell-23115737a/",
		color: "hover:text-blue-400",
		bgColor: "hover:bg-blue-500/10",
	},
];

export const CONTACT_INFO = [
	{
		icon: MapPin,
		label: "Location",
		value: "Houston, TX",
	},
	{
		icon: Mail,
		label: "Email",
		value: "charrodterrell@yahoo.com",
	},
	{
		icon: Phone,
		label: "Phone",
		value: "+1 (832) 770-0445",
	},
];
