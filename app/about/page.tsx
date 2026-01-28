import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
    return (
        <main>
            {/* Hero Section */}
            <section className="relative w-full overflow-hidden bg-background-light dark:bg-background-dark">
                <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
                    <div className="relative rounded-2xl overflow-hidden min-h-[480px] flex flex-col items-center justify-center text-center p-8 gap-6 bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.6) 0%, rgba(15, 23, 42, 0.7) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAhyNyoLVgVAWVHbpg9Bn9c8-dFwzseZgzH67I1htedcu54_LG2yDF9RydraOzMVzM_HETQLbP2HZIKZDLLrrt1B_CZ18_LGf1u4QdTaVZGq1V5LHkrcX-IocDxLq705XO2ZBHp4TrJe6_xgYFpqhDL-Fxf7NEqznQsnB-Zbp62CP2XdSEgwhMGwWiOoYPMXpBO-j-DWWlyBI7HeJgaBpEKG2zVEZpx2J144L7T2MnQ48HpJpdMkWwXS5ksQuutMxEDgS7M4GuijHp0")' }}>
                        <div className="max-w-3xl flex flex-col gap-4">
                            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em]">
                                Restoring Movement,<br /> Empowering Life
                            </h1>
                            <p className="text-gray-200 text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
                                Welcome to ProActive Physiotherapy. We go beyond quick fixes to get you back to the life you love through personalized, evidence-based care and long-term wellness strategies.
                            </p>
                        </div>
                        <div className="flex gap-4 mt-2">
                            <Link href="#team">
                                <button className="flex h-12 px-6 items-center justify-center rounded-lg bg-primary hover:bg-primary-dark transition-colors text-white text-base font-bold tracking-[0.015em]">
                                    Meet Our Team
                                </button>
                            </Link>
                            <Link href="/services">
                                <button className="flex h-12 px-6 items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors text-white border border-white/20 text-base font-bold tracking-[0.015em]">
                                    View Services
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Values Section */}
            <section className="py-16 bg-background-light dark:bg-background-dark">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col gap-12">
                        <div className="flex flex-col gap-4 text-center md:text-left">
                            <h2 className="text-primary text-[22px] font-bold uppercase tracking-wider">Our Values</h2>
                            <h3 className="text-text-light dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-tight max-w-[720px]">
                                Why We Are Different
                            </h3>
                            <p className="text-text-light/80 dark:text-gray-300 text-lg font-normal leading-relaxed max-w-[720px]">
                                We focus on proactive recovery and long-term wellness, ensuring you don't just feel better today, but stay healthy for years to come.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Value Card 1 */}
                            <div className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white dark:bg-surface-dark dark:border-gray-800 p-6 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex size-12 items-center justify-center rounded-full bg-primary/20 text-text-light dark:text-primary">
                                    <span className="material-symbols-outlined text-3xl">favorite</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h4 className="text-text-light dark:text-white text-xl font-bold">Patient-Centered</h4>
                                    <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                                        Your goals are our goals. We tailor every treatment plan to your specific lifestyle needs, ensuring care that fits you perfectly.
                                    </p>
                                </div>
                            </div>
                            {/* Value Card 2 */}
                            <div className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white dark:bg-surface-dark dark:border-gray-800 p-6 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex size-12 items-center justify-center rounded-full bg-primary/20 text-text-light dark:text-primary">
                                    <span className="material-symbols-outlined text-3xl">menu_book</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h4 className="text-text-light dark:text-white text-xl font-bold">Evidence-Based</h4>
                                    <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                                        We utilize the latest research and proven clinical techniques to ensure effective, predictable, and safe recovery outcomes.
                                    </p>
                                </div>
                            </div>
                            {/* Value Card 3 */}
                            <div className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white dark:bg-surface-dark dark:border-gray-800 p-6 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex size-12 items-center justify-center rounded-full bg-primary/20 text-text-light dark:text-primary">
                                    <span className="material-symbols-outlined text-3xl">volunteer_activism</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h4 className="text-text-light dark:text-white text-xl font-bold">Compassionate Care</h4>
                                    <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                                        A warm, supportive environment where you feel heard. We believe healing starts with a relationship built on trust and empathy.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Facility Highlight (Split Section) */}
            <section className="py-12 bg-white dark:bg-surface-dark border-y border-gray-200 dark:border-gray-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1 rounded-2xl overflow-hidden h-[400px] shadow-lg relative">
                            <div className="w-full h-full relative hover:scale-105 transition-transform duration-500">
                                <Image
                                    fill
                                    style={{ objectFit: "cover" }}
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTRI2gWDIwlyi7bNpYKkt30yKdLErEal2iRo8lZQCJtGQCqZlZ61AjPmvtAaaD7C2WMzJ2VVdKA8cb6gsF2OdocWrr5hnE6e-9USsc397CL4vuJ9yv3URLfFs_6ir5pJemJncfJo3V98bwneyYF8TwDKgE2FHe4HNJNaFsjipdJZTK7jd1p3BsiGk3YKyH4Y8d-BsRh6PBIHAFU5gDwc6IGb4Q6gn0NBdeXlLOiOyA81GJdsaaUdusRL4xtF718ynWXhkRl3bbUhgd"
                                    alt="Modern gym equipment in a bright physiotherapy facility"
                                />
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 flex flex-col gap-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-white">World-Class Facilities for Optimal Recovery</h2>
                            <p className="text-lg text-text-light/80 dark:text-gray-300 leading-relaxed">
                                Our clinic is designed to facilitate every stage of your recovery journey. From private treatment rooms for initial assessments and manual therapy to a fully equipped rehabilitation gym for functional strengthening.
                            </p>
                            <ul className="flex flex-col gap-3">
                                <li className="flex items-center gap-3 text-text-light dark:text-gray-200">
                                    <span className="material-symbols-outlined text-primary">check_circle</span>
                                    <span>Private consultation suites</span>
                                </li>
                                <li className="flex items-center gap-3 text-text-light dark:text-gray-200">
                                    <span className="material-symbols-outlined text-primary">check_circle</span>
                                    <span>Advanced rehabilitation equipment</span>
                                </li>
                                <li className="flex items-center gap-3 text-text-light dark:text-gray-200">
                                    <span className="material-symbols-outlined text-primary">check_circle</span>
                                    <span>Accessible ground-floor location</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section id="team" className="py-16 bg-background-light dark:bg-background-dark">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-text-light dark:text-white text-3xl md:text-4xl font-black tracking-tight">Meet Our Specialist</h2>
                            <p className="text-text-light/70 dark:text-gray-400 text-lg max-w-2xl">
                                Our team of certified professionals is dedicated to your health and recovery.
                            </p>
                        </div>
                        <div className="flex justify-center">
                            {/* Team Member 1 */}
                            <div className="group flex flex-col md:flex-row rounded-xl overflow-hidden bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-800 hover:border-primary/50 transition-colors max-w-4xl w-full">
                                <div className="md:w-80 lg:w-96 flex-shrink-0 relative">
                                    <Image
                                        width={400}
                                        height={400}
                                        style={{ width: "100%", height: "auto", objectFit: "contain" }}
                                        src="/dr-sarah-jenkins.jpg"
                                        alt="Professional headshot of Dr. Pronita Singh smiling in a white coat"
                                    />
                                </div>
                                <div className="p-6 flex flex-col gap-3 flex-1">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-xl font-bold text-text-light dark:text-white">Dr. Pronita Singh</h3>
                                            <p className="text-primary font-semibold text-sm uppercase tracking-wide">Senior Physiotherapist</p>
                                        </div>
                                        <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors">verified</span>
                                    </div>
                                    <p className="text-text-light/80 dark:text-gray-300 text-sm leading-relaxed">
                                        Specializing in sports injuries and post-operative rehabilitation, Dr. Pronita has over 15 years of experience helping athletes safely return to peak performance. She works with athletes at all levels, creating personalized, evidence-based rehabilitation programs tailored to each individual's needs and sport.
                                    </p>
                                    <p className="text-text-light/80 dark:text-gray-300 text-sm leading-relaxed mt-2">
                                        Her approach focuses on restoring strength, mobility, and confidence while emphasizing injury prevention and long-term performance through precise assessment and compassionate care.
                                    </p>
                                    <div className="mt-2 flex gap-2 flex-wrap">
                                        <span className="px-2 py-1 bg-background-light dark:bg-background-dark text-xs font-medium rounded text-text-light dark:text-gray-300 border border-gray-200 dark:border-gray-700">Sports Rehab</span>
                                        <span className="px-2 py-1 bg-background-light dark:bg-background-dark text-xs font-medium rounded text-text-light dark:text-gray-300 border border-gray-200 dark:border-gray-700">Dry Needling</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Banner */}
            <section className="w-full bg-text-light dark:bg-black py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-white text-3xl md:text-4xl font-bold mb-6">Ready to start your recovery journey?</h2>
                    <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                        Book your initial assessment today and take the first step towards a pain-free life with ProActive Physiotherapy.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/book-appointment">
                            <button className="bg-primary hover:bg-primary-dark text-white text-lg font-bold py-3 px-8 rounded-lg transition-colors">
                                Book Appointment Online
                            </button>
                        </Link>
                        <Link href="/contact">
                            <button className="bg-transparent border border-white text-white hover:bg-white/10 text-lg font-bold py-3 px-8 rounded-lg transition-colors">
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
