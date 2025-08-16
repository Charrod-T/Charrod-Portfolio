import { useState, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Send } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { CONTACT_INFO, SOCIAL_LINKS } from "../../utils/data";
import { containerVariants, itemVariants } from "../../utils/helper";
import TextInput from "../Inputs/TextInput";

const ContactSection = () => {
	const { isDarkMode } = useTheme();
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start end", "end start"],
	});

	const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

	const handleInputChange = (key, value) => {
		setFormData({
			...formData,
			[key]: value,
		});
	};

	return (
		<section
			id="Contact"
			ref={sectionRef}
			className={`py-24 px-6 ${
				isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
			} relative overflow-hidden`}
		>
			{/* Background Elements */}
			<motion.div style={{ y }} className="absolute inset-0 overflow-hidden">
				<div
					className={`absolute top-20 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-5 ${
						isDarkMode ? "bg-blue-500" : "bg-blue-400"
					}`}
				/>
				<div
					className={`absolute bottom-40 right1-4 w-80 h-80 rounded-full blur-3xl opacity-5 ${
						isDarkMode ? "bg-purple-500" : "bg-purple-400"
					}`}
				/>
			</motion.div>

			<div className="max-w-6xl mx-auto relative z-10">
				{/* Section Header */}
				<motion.div
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					variants={containerVariants}
					className="text-center mb-20"
				>
					<motion.div
						variants={itemVariants}
						className={`text-sm uppercase tracking-widest ${
							isDarkMode ? "text-gray-500" : "text-gray-600"
						} mb-4`}
					>
						Let's Connect
					</motion.div>

					<motion.h2
						variants={itemVariants}
						className="text-3xl md:text-5xl5xl font-light m-6"
					>
						Get In
						<span className="text-blue-500 font-medium">Touch</span>
					</motion.h2>

					<motion.p
						variants={itemVariants}
						className={`text-xl max-w-2xl mx-auto ${
							isDarkMode ? "text-gray-400" : "text-gray-600"
						}`}
					>
						Ready to start your next project? Let's discuss how we can bring
						your ideas to life.
					</motion.p>
				</motion.div>

				<div className="grid lg:grid-cols-2 gap-16 items-center">
					{/* Contact Info & Social Links*/}
					<motion.div
						initial="hidden"
						animate={isInView ? "visible" : "hidden"}
						variants={containerVariants}
						className="space-y-8"
					>
						{/*Contact Information*/}
						<motion.div variants={itemVariants}>
							<h3 className="text-2xl font-medium m-6">Contact Information</h3>
							<div className="space-y-4">
								{CONTACT_INFO.map((info, index) => (
									<motion.div
										key={info.label}
										variants={itemVariants}
										whileHover={{ x: 4 }}
										className={`flex items-center space-x-4 p-4 rounded-xl ${
											isDarkMode
												? "bg-gray-800/30 hover:bg-gray-800/50"
												: "bg-gray-50/50 hover:bg-gray-100/50"
										} transition-all duration-300`}
									>
										<div
											className={`p-3 rounded-lg ${
												isDarkMode ? "bg-gray-700" : "bg-white"
											}`}
										>
											<info.icon size={20} className="text-blue-500" />
										</div>
										<div>
											<div
												className={`text-sm ${
													isDarkMode ? "text-gray-500" : "text-gray-600"
												}`}
											>
												{info.label}
											</div>
											<div className="font-medium">{info.value}</div>
										</div>
									</motion.div>
								))}
							</div>
						</motion.div>

						{/* Social Links */}
						<motion.div variants={itemVariants}>
							<h3 className="text-xl font-medium mb-6">Follow Me</h3>
							<div className="grid grid-cols-2 gap-4">
								{SOCIAL_LINKS.map((social) => (
									<motion.a
										key={social.name}
										href={social.url}
										target="_blank"
										rel="noopener noreferrer"
										whileHover={{ scale: 1.05, y: -2 }}
										whileTap={{ scale: 0.95 }}
										className={`flex items-center space-x-3 p-4 rounded-xl border transition-all duration-300 ${
											isDarkMode
												? "bg-gray-800/50 border-gray-700 hover:border-gray-600"
												: "bg-white/80 border-gray-200 hover:border-gray-300"
										} ${social.bgColor} ${social.color}`}
									>
										<social.icon size={20} />
										<span className="font-medium">{social.name}</span>
									</motion.a>
								))}
							</div>
						</motion.div>
					</motion.div>
					{/* Availability Status */}
					<motion.div
						variants={itemVariants}
						className={`p-6 rounded-xl border ${
							isDarkMode
								? "bg-green-500/10 border-green-500/20"
								: "bg-green-50 border-green-200"
						}`}
					>
						<div className="flex items-center space-x-3 mb-2">
							<div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
							<span className="font-medium text-green-500">
								Available for work
							</span>
						</div>
						<p
							className={`text-sm ${
								isDarkMode ? "text-gray-400" : "text-gray-600"
							}`}
						>
							I'm currently available for freelance projects and full-time
							opportunities.
						</p>
					</motion.div>
				</div>

				{/* Bottom CTA */}
				<motion.div
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					variants={containerVariants}
					className="text-center mt-20"
				>
					<motion.div
						variants={itemVariants}
						className={`max-w-2xl mx-auto p-8 rounded-2xl border ${
							isDarkMode
								? "bg-gray-800/30 border-gray-700"
								: "bg-gray-50/50 border-gray-200"
						}`}
					>
						<h3 className="text-xl font-medium mb-4">Prefer a quick call?</h3>
						<p
							className={`${
								isDarkMode ? "text-gray-400" : "text-gray-600"
							} mb-6`}
						>
							Sometimes a conversation is worth a thousand messages, Feel free
							to schedule a call to discuss you project via Email.
						</p>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default ContactSection;
