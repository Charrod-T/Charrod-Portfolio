import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";

import PROFILE_PIC from "../../assets/images/profile-img.jpg";
import { containerVariants, itemVariants } from "../../utils/helper";

const HeroSection = () => {
	const { isDarkMode } = useTheme();

	const { scrollY } = useScroll();
	const heroY = useTransform(scrollY, [0, 500], [0, -100]);

	const scrollToSection = (sectionId) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	const textVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: { duration: 0.6, ease: "easeOut" },
		},
	};

	const imageVariants = {
		hidden: { x: 50, opacity: 0 },
		visible: {
			x: 0,
			opacity: 1,
			transition: { duration: 1, ease: "easeOut", delay: 0.5 },
		},
	};
	return (
		<div
			className={`min-h-screen transition-all duration-500 ${
				isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
			}`}
		>
			{/*Hero Section*/}
			<motion.section
				id="home"
				style={{ y: heroY }}
				className="min-h-screen flex items-center justify-center relative px-6 pt-10"
			>
				<div className="absolute inset-0 overflow-hidden">
					<motion.div
						animate={{
							scale: [1, 1.1, 1],
							rotate: [0, 180, 360],
						}}
						transition={{
							duration: 20,
							repeat: Infinity,
							ease: "linear",
						}}
						className={`absolute top-20 right-20 w-64 h-64 rounded-full blur-3xl opacity-10 ${
							isDarkMode ? "bg-blue-500" : "bg-blue-400"
						}`}
					/>
					<motion.div
						animate={{
							scale: [1.1, 1, 1.1],
							rotate: [360, 180, 0],
						}}
						transition={{
							duration: 25,
							repeat: Infinity,
							ease: "linear",
						}}
						className={`absolute bottom-20 left-20 w-48 h-48 rounded-full blur-3xl opacity-10 ${
							isDarkMode ? "bg-purple-500" : "bg-purple-400"
						}`}
					/>
				</div>

				<div className="max-w-7xl mx-auto w-full z-10 mt-20">
					{/*Mobile Layout - Centered*/}
					<div className="block lg:hidden">
						<motion.div
							initial="hidden"
							animate="visible"
							variants={containerVariants}
							className="text-center"
						>
							{/*Profile Image - Mobile*/}
							<motion.div variants={imageVariants} className="mb-8">
								<div className="w-32 h-32 mx-auto relative">
									<motion.div
										whileHover={{ scale: 1.05 }}
										className={`w-full h-32 rounded-2xl overflow-hidden border-4 ${
											isDarkMode ? "border-gray-800" : "border-gray-300"
										} shadow-2xl`}
									>
										<img
											src={PROFILE_PIC}
											alt="Profile"
											className="w-full h-full object-cover"
										/>
									</motion.div>

									{/*Decorative ring*/}
									<motion.div
										animate={{ rotate: 360 }}
										transition={{
											duration: 20,
											repeat: Infinity,
											ease: "linear",
										}}
										className="absolute -inset-2 rounded-2xl border border-blue-500/20"
									/>
								</div>
							</motion.div>

							{/*Content - Mobile*/}
							<motion.div
								variants={textVariants}
								className={`text-sm uppercase tracking-widest ${
									isDarkMode ? "text-gray-500" : "text-gray-600"
								} mb-4`}
							>
								Full Stack Developer
							</motion.div>

							<motion.h1
								variants={itemVariants}
								className="text-3xl md:text-5xl font-light mb-6 leading-tight"
							>
								<span
									className={`${isDarkMode ? "text-white" : "text-gray-900"}`}
								>
									Building Digital
								</span>
								<span className="text-blue-500 font-medium ml-2">
									experiences
								</span>
								<br />
								<span className={isDarkMode ? "text-white" : "text-gray-900"}>
									that matter
								</span>
							</motion.h1>

							<motion.p
								variants={itemVariants}
								className={`text-base md:text-lg ${
									isDarkMode ? "text-gray-400" : "text-gray-600"
								} mb-8 max-w-xl mx-auto font-light leading-relaxed`}
							>
								I create beautiful, functional web applications with modern
								technologies and thoughtful user experiences.
							</motion.p>

							{/* CTA Buttons - Mobile*/}
							<motion.div
								variants={itemVariants}
								className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
							>
								<motion.button
									whileHover={{ y: -2 }}
									whileTap={{ scale: 0.98 }}
									onClick={() => scrollToSection("work")}
									className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300"
								>
									View Work
								</motion.button>

								<motion.button
									whileHover={{ y: -2 }}
									whileTap={{ scale: 0.98 }}
									onClick={() => scrollToSection("contact")}
									className={`border ${
										isDarkMode
											? "border-gray-700 hover:border-gray-600 text-gray-300"
											: "border-gray-300 hover:border-gray-400 text-gray-700"
									} px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300`}
								>
									Get in Touch
								</motion.button>
							</motion.div>

							{/*Social Links - Mobile*/}
							<motion.div
								variants={itemVariants}
								className="flex justify-center space-x-6 mb-8"
							>
								{[
									{ icon: FiGithub, href: "https://github.com/Charrod-T" },
									{
										icon: FiLinkedin,
										href: "https://www.linkedin.com/in/charrod-terrell-23115737a/",
									},
									{ icon: Mail, href: "Mailto:charrodterrell@yahoo.com" },
								].map((social, index) => (
									<motion.a
										key={index}
										href={social.href}
										whileHover={{ y: -3, scale: 1.1 }}
										className={`p-3 rounded-full transition-colors ${
											isDarkMode
												? "text-gray-400 hover:text-white hover:bg-gray-800"
												: "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
										}`}
									>
										<social.icon size={20} />
									</motion.a>
								))}
							</motion.div>

							{/*Tech Stack - Mobile*/}
							<motion.div
								variants={itemVariants}
								className="flex justify-center items-center space-x-6 text-xs uppercase tracking-widest flex-wrap"
							>
								<span
									className={isDarkMode ? "text-gray-600" : "text-gray-500"}
								>
									React
								</span>
								<span
									className={isDarkMode ? "text-gray-700" : "text-gray-400"}
								>
									.
								</span>
								<span
									className={isDarkMode ? "text-gray-600" : "text-gray-500"}
								>
									Node.js
								</span>
								<span
									className={isDarkMode ? "text-gray-700" : "text-gray-400"}
								>
									.
								</span>
								<span
									className={isDarkMode ? "text-gray-600" : "text-gray-500"}
								>
									TypeScript
								</span>
								<span
									className={isDarkMode ? "text-gray-700" : "text-gray-400"}
								>
									.
								</span>
								<span
									className={isDarkMode ? "text-gray-600" : "text-gray-500"}
								>
									MongoDB
								</span>
							</motion.div>
						</motion.div>
					</div>
					{/*Desktop Layout- Split*/}
					<div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
						{/*Left Column - Content*/}
						<motion.div
							initial="hidden"
							animate="visible"
							variants={containerVariants}
							className="text-left"
						>
							<motion.div
								variants={textVariants}
								className={`text-sm uppercase tracking-widest ${
									isDarkMode ? "text-gray-500" : "text-gray-600"
								} mb-6`}
							>
								Full Stack Developer
							</motion.div>

							<motion.h1
								variants={itemVariants}
								className="text-5xl xl:text-7xl font-light mb-8 leading-tight"
							>
								<span
									className={`${isDarkMode ? "text-white" : "text-gray-900"}`}
								>
									Building Digital
								</span>
								<br />
								<span className="text-blue-500 font-medium">experiences</span>
								<br />
								<span className={isDarkMode ? "text-white" : "text-gray-900"}>
									that matter
								</span>
							</motion.h1>

							<motion.p
								variants={itemVariants}
								className={`text-xl ${
									isDarkMode ? "text-gray-400" : "text-gray-600"
								} mb-12 font-light leading-relaxed max-w-lg`}
							>
								I create beautiful, functional web applications with modern
								technologies and thoughtful user experiences.
							</motion.p>

							{/*CTA Buttons - Desktop*/}
							<motion.div variants={itemVariants} className="flex gap-6 mb-8">
								<motion.button
									whileHover={{ y: -2 }}
									whileTap={{ scale: 0.98 }}
									onClick={() => scrollToSection("work")}
									className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300"
								>
									View Work
								</motion.button>

								<motion.button
									whileHover={{ y: -2 }}
									whileTap={{ scale: 0.98 }}
									onClick={() => scrollToSection("contact")}
									className={`border ${
										isDarkMode
											? "border-gray-700 hover:border-gray-600 text-gray-300"
											: "border-gray-300 hover:border-gray-400 text-gray-700"
									} px-8 py-4 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300`}
								>
									Get in Touch
								</motion.button>
							</motion.div>

							{/*Social Links - Desktop*/}
							<motion.div
								variants={itemVariants}
								className="flex space-x-6 mb-12"
							>
								{[
									{ icon: FiGithub, href: "https://github.com/Charrod-T/" },
									{
										icon: FiLinkedin,
										href: "https://www.linkedin.com/in/charrod-terrell-23115737a/",
									},
									{ icon: Mail, href: "Mailto:charrodterrell@yahoo.com" },
								].map((social, index) => (
									<motion.a
										key={index}
										href={social.href}
										whileHover={{ y: -3, scale: 1.1 }}
										className={`p-3 rounded-full transition-colors ${
											isDarkMode
												? "text-gray-400 hover:text-white hover:bg-gray-800"
												: "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
										}`}
									>
										<social.icon size={20} />
									</motion.a>
								))}
							</motion.div>
						</motion.div>

						{/*Right Column Profile Image*/}
						<motion.div
							initial="hidden"
							animate="visible"
							variants={imageVariants}
							className="flex justify-center lg:justify-end"
						>
							<div className="relative">
								{/*Tech Stack - Desktop*/}
								<motion.div
									variants={itemVariants}
									className="flex items-center space-x-8 text-xs uppercase tracking-widest absolute -top-16 -left-28"
								>
									<span
										className={isDarkMode ? "text-gray-600" : "text-gray-500"}
									>
										React
									</span>
									<span
										className={isDarkMode ? "text-gray-700" : "text-gray-400"}
									>
										.
									</span>
									<span
										className={isDarkMode ? "text-gray-600" : "text-gray-500"}
									>
										Node.js
									</span>
									<span
										className={isDarkMode ? "text-gray-700" : "text-gray-400"}
									>
										.
									</span>
									<span
										className={isDarkMode ? "text-gray-600" : "text-gray-500"}
									>
										TypeScript
									</span>
									<span
										className={isDarkMode ? "text-gray-700" : "text-gray-400"}
									>
										.
									</span>
									<span
										className={isDarkMode ? "text-gray-600" : "text-gray-500"}
									>
										MongoDB
									</span>
								</motion.div>
								<motion.div
									whileHover={{ scale: 1.02 }}
									className={`w-80 h-96 rounded-3xl overflow-hidden border-4 ${
										isDarkMode ? "border-gray-800" : "border-gray-300"
									} shadow-2xl`}
								>
									<img
										src={PROFILE_PIC}
										alt="Profile"
										className="w-full h-full object-cover"
									/>
								</motion.div>
								{/*Decorative elements*/}
								<motion.div
									animate={{ rotate: 360 }}
									transition={{
										duration: 20,
										repeat: Infinity,
										ease: "linear",
									}}
									className="absolute -inset-4 rounded-3xl border border-blue-500/20"
								/>
								<motion.div
									animate={{ rotate: -360 }}
									transition={{
										duration: 30,
										repeat: Infinity,
										ease: "linear",
									}}
									className="absolute -inset-8 rounded-3xl border border-purple-500/10"
								/>
							</div>
						</motion.div>
					</div>
				</div>

				{/*Scroll Indicator*/}
				<motion.div
					animate={{ y: [0, 8, 0] }}
					transition={{ duration: 2, repeat: Infinity }}
					className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
				>
					<ArrowDown
						size={20}
						className={isDarkMode ? "text-gray-600" : "text-gray-400"}
					/>
				</motion.div>
			</motion.section>
		</div>
	);
};

export default HeroSection;
