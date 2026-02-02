import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, X, Sparkles } from "lucide-react";

const SuccessModel = ({ showSuccess, setShowSuccess, isDarkMode }) => {
	return (
		<AnimatePresence>
			{showSuccess && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
					onClick={() => setShowSuccess(false)}
				>
					<motion.div
						initial={{ scale: 0.8, opacity: 0, y: 20 }}
						animate={{ scale: 1, opacity: 1, y: 0 }}
						exit={{ scale: 0.8, opacity: 0, y: 20 }}
						transition={{ type: "spring", duration: 0.5 }}
						className={`relative p-8 rounded-2xl border max-w-sm w-full text-center ${
							isDarkMode
								? "bg-gray-800 border-gray-700"
								: "bg-white border-gray-200"
						}`}
						onClick={(e) => e.stopPropagation()}
					>
						<button
							onClick={() => setShowSuccess(false)}
							className={`absolute top-4 right-4 p-1 rounded-full transition-colors ${
								isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
							}`}
						>
							<X size={18} />
						</button>

						<motion.div
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{ type: "spring", delay: 0.2 }}
							className="mx-auto w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6"
						>
							<CheckCircle size={32} className="text-white" />
						</motion.div>
						<motion.h3
							initial={{ y: 10, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.3 }}
							className="text-2xl font-medium mb-2"
						>
							Message Sent
						</motion.h3>
						<motion.p
							initial={{ y: 10, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.4 }}
							className={`${
								isDarkMode ? "text-gray-400" : "text-gray-600"
							} mb-6`}
						>
							Thank you for reaching out! I'll get back to you soon.
						</motion.p>
						<motion.div
							initial={{ scale: 0, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							transition={{ delay: 0.5 }}
							className="flex justify-center"
						>
							<Sparkles size={24} className="text-yellow-500" />
						</motion.div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default SuccessModel;
