import Link from "next/link";
import Image from "next/image";

export default function ServicesPage() {
    return (
        <main className="flex-grow flex flex-col items-center">
            {/* Hero Section */}
            <section className="w-full bg-background-light dark:bg-background-dark py-12 lg:py-20 px-4 md:px-6 lg:px-8">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="flex-1 max-w-2xl">
                        <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-text-light text-xs font-bold tracking-wide mb-4 dark:text-primary">OUR EXPERTISE</span>
                        <h1 className="text-4xl md:text-5xl font-black leading-tight text-text-light dark:text-white mb-6">
                            Restoring Your Movement, <span className="text-primary dark:text-primary">Restoring Your Life</span>
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-lg">
                            We offer a holistic approach to recovery and performance. Our expert care is designed to get you back to your active life safely and effectively.
                        </p>
                    </div>
                    {/* Decorative Abstract Image Placeholder */}
                    <div className="flex-1 w-full max-w-md md:max-w-lg aspect-video md:aspect-square rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900/20 dark:to-gray-900 relative">
                        <Image
                            fill
                            style={{ objectFit: "cover" }}
                            className="mix-blend-multiply opacity-90 dark:opacity-70"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDv4fvRihoMvr-9tVopZMhIPCj-ugjTGBUdKxdO9gRKxG9JnBBDnojKUjJ-WOhLFmlhqbuqHL6fbzh1wWmUMtm9ERR9mUQL88wxLSs-Hg7gIJAJCAxKdLX3YJoOSZtVqBdgDhlPav8EFti5mTQSIibT7dR0jL-IspxwzudP_5SK7V0LBVXXliqPQaYxSb0Rn_Ym9zFJ807uVZl4vrpISM08yzJpsiAiuTzaRTrNDEfNvCevs-NwkrV5ruPY6BkTQrs59uQWEp0ah07h"
                            alt="Physiotherapist assisting a patient with leg exercises in a modern clinic"
                        />
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="w-full bg-white dark:bg-surface-dark py-16 px-4 md:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {/* Service Card 1: Sports Injury Rehab */}
                        <div className="group flex flex-col p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-background-light dark:bg-background-dark hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                            <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center text-text-light dark:text-white mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined text-3xl">fitness_center</span>
                            </div>
                            <h3 className="text-xl font-bold text-text-light dark:text-white mb-3">Sports Injury Rehab</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                Targeted recovery plans for athletes of all levels to return to sport safely. We focus on strength, flexibility, and prevention.
                            </p>
                            <Link href="#" className="inline-flex items-center text-sm font-bold text-text-light dark:text-white group-hover:text-primary transition-colors">
                                Learn More <span className="material-symbols-outlined text-lg ml-1 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </Link>
                        </div>
                        {/* Service Card 2: Post-Op Recovery */}
                        <div className="group flex flex-col p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-background-light dark:bg-background-dark hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                            <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center text-text-light dark:text-white mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined text-3xl">medical_services</span>
                            </div>
                            <h3 className="text-xl font-bold text-text-light dark:text-white mb-3">Post-Op Recovery</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                Safe, guided rehabilitation protocols following surgical procedures to ensure optimal healing and range of motion.
                            </p>
                            <Link href="#" className="inline-flex items-center text-sm font-bold text-text-light dark:text-white group-hover:text-primary transition-colors">
                                Learn More <span className="material-symbols-outlined text-lg ml-1 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </Link>
                        </div>
                        {/* Service Card 3: Manual Therapy */}
                        <div className="group flex flex-col p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-background-light dark:bg-background-dark hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                            <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center text-text-light dark:text-white mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined text-3xl">back_hand</span>
                            </div>
                            <h3 className="text-xl font-bold text-text-light dark:text-white mb-3">Manual Therapy</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                Hands-on techniques including massage and mobilization to loosen tight muscles, mobilize joints and improve movement.
                            </p>
                            <Link href="#" className="inline-flex items-center text-sm font-bold text-text-light dark:text-white group-hover:text-primary transition-colors">
                                Learn More <span className="material-symbols-outlined text-lg ml-1 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </Link>
                        </div>
                        {/* Service Card 4: Chronic Pain Management */}
                        <div className="group flex flex-col p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-background-light dark:bg-background-dark hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                            <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center text-text-light dark:text-white mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined text-3xl">healing</span>
                            </div>
                            <h3 className="text-xl font-bold text-text-light dark:text-white mb-3">Chronic Pain Management</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                Long-term strategies combining education, exercise, and therapy to reduce pain and improve daily function and quality of life.
                            </p>
                            <Link href="#" className="inline-flex items-center text-sm font-bold text-text-light dark:text-white group-hover:text-primary transition-colors">
                                Learn More <span className="material-symbols-outlined text-lg ml-1 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </Link>
                        </div>
                        {/* Service Card 5: Ergonomic Assessments */}
                        <div className="group flex flex-col p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-background-light dark:bg-background-dark hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                            <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center text-text-light dark:text-white mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined text-3xl">chair_alt</span>
                            </div>
                            <h3 className="text-xl font-bold text-text-light dark:text-white mb-3">Ergonomic Assessments</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                Detailed workplace analysis to prevent repetitive strain injuries, improve posture, and set up your environment for health.
                            </p>
                            <Link href="#" className="inline-flex items-center text-sm font-bold text-text-light dark:text-white group-hover:text-primary transition-colors">
                                Learn More <span className="material-symbols-outlined text-lg ml-1 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </Link>
                        </div>
                        {/* Service Card 6: Dry Needling */}
                        <div className="group flex flex-col p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-background-light dark:bg-background-dark hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                            <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center text-text-light dark:text-white mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined text-3xl">acupuncture</span>
                            </div>
                            <h3 className="text-xl font-bold text-text-light dark:text-white mb-3">Dry Needling</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                Minimally invasive therapy for releasing trigger points, muscle knots, and relieving persistent myofascial pain.
                            </p>
                            <Link href="#" className="inline-flex items-center text-sm font-bold text-text-light dark:text-white group-hover:text-primary transition-colors">
                                Learn More <span className="material-symbols-outlined text-lg ml-1 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full bg-background-light dark:bg-background-dark py-20 px-4 md:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center bg-white dark:bg-surface-dark rounded-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-700 shadow-sm relative overflow-hidden">
                    {/* Decorative Background Circle */}
                    <div className="absolute -top-20 -right-20 size-64 bg-primary/5 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-20 -left-20 size-64 bg-primary/5 rounded-full blur-3xl"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-black text-text-light dark:text-white mb-4 tracking-tight">
                            Ready to Move Better?
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 max-w-xl mx-auto">
                            Not sure which service you need? Book an assessment today and let our experts create a personalized plan for you.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="/book-appointment">
                                <button className="bg-primary hover:bg-primary-dark text-white text-base font-bold h-12 px-8 rounded-lg transition-all shadow-md">
                                    Book Consultation
                                </button>
                            </Link>
                            <Link href="/contact">
                                <button className="bg-transparent border border-gray-300 dark:border-white text-text-light dark:text-white hover:bg-black/5 dark:hover:bg-white/10 text-base font-bold h-12 px-8 rounded-lg transition-all">
                                    Contact Us
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
