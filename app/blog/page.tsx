import Link from "next/link";
import Image from "next/image";

export default function BlogPage() {
    return (
        <main className="layout-container flex h-full grow flex-col py-8 lg:py-12 bg-background-light dark:bg-background-dark">
            <div className="container mx-auto px-4 lg:px-8 flex flex-1 justify-center">
                <div className="layout-content-container flex flex-col lg:flex-row gap-12 max-w-[1280px] flex-1">
                    {/* Left Column: Blog Content */}
                    <article className="flex-1 max-w-[800px] flex flex-col">
                        {/* Header Image */}
                        <div className="w-full mb-8">
                            <div className="relative w-full overflow-hidden rounded-xl h-[400px] shadow-lg group">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10"></div>
                                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                                    <Image
                                        fill
                                        style={{ objectFit: "cover" }}
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDU8DqNOx5cLkOsMr5fPPgh_AxsNWsyopCxLIHpGSsW_ZIVP_G71lFdjWIbcDOE49hg5pS1FaP_0GyseVzXNSZ9qHZaUG60lR7l25kES9TNFsNtPrJUA8R9bj2TmBP4bxI6Kt5a3JPKAsAzz2wPRlHOlxYiNo9YZLaDTsFn-GhhSAcIbO5bI10HjwfDvbGdL-WcjLOvISbxmUGSIlbO_s4pzhJhJsJUkS7_0fkE2lJYRMELn8SqgH_jFwjZ_bG9ZjWyS4UFUh-uWocY"
                                        alt="Person holding lower back in pain or physiotherapy session"
                                    />
                                </div>
                                <div className="absolute bottom-0 left-0 p-8 z-20">
                                    <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-white uppercase bg-primary rounded-full">Pain Management</span>
                                    <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight drop-shadow-md">5 Tips for Lower Back Pain Relief</h1>
                                </div>
                            </div>
                        </div>

                        {/* Meta Data */}
                        <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-6 mb-8">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-200 relative">
                                    <Image
                                        fill
                                        style={{ objectFit: "cover" }}
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxThwqppfk6rBQuPA3k0ZJR7v5IdotZVplCPi6QYvmY6MTrIhdbFRgQlcU4Nm9FI-cQIZDL4tKijYojUPmQyPlve7RJlbGk7sSfUM9jhMditWFUaC_nvRP2n_1_k5G5gM_eqPHUIuN-xidMPiUGoq6ajhqfEG87_NiIOpH0J9HqTUkj8Er6UGb1T2GY9odGak_1c67Q7lETYgFj2weSck8Hg8o080qtN1MYHvJRXhnRiKP8ihzRE6d8bDU1YX_wRq2x4RTV1idsHG2"
                                        alt="Dr. Sarah Jenkins"
                                    />
                                </div>
                                <div>
                                    <p className="text-text-light dark:text-white text-base font-bold leading-tight">Dr. Sarah Jenkins</p>
                                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mt-1">
                                        <span>Senior Physiotherapist</span>
                                        <span>•</span>
                                        <span>Oct 24, 2023</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                                <span className="material-symbols-outlined text-lg">schedule</span>
                                <span>5 min read</span>
                            </div>
                        </div>

                        {/* Article Body */}
                        <div className="prose prose-lg prose-blue max-w-none text-text-light dark:text-gray-300">
                            <p className="text-xl text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-8">
                                Lower back pain is one of the most common reasons people visit a physiotherapist. While professional treatment is often necessary, there are several things you can do at home to manage pain and improve mobility. Here are our top recommended strategies to get you back on your feet.
                            </p>

                            <h2 className="text-2xl font-bold text-text-light dark:text-white mt-10 mb-4 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary-dark text-sm font-bold">1</span>
                                Keep Moving
                            </h2>
                            <p className="mb-6 leading-relaxed">
                                Contrary to popular belief, total bed rest is rarely the best answer for back pain. In fact, it can make stiffness worse. Gentle movement helps keep blood flowing to the area, which aids in healing. Try to continue with your daily activities as much as pain allows, but avoid heavy lifting or high-impact activities.
                            </p>

                            <h2 className="text-2xl font-bold text-text-light dark:text-white mt-10 mb-4 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary-dark text-sm font-bold">2</span>
                                Posture Check
                            </h2>
                            <p className="mb-4 leading-relaxed">
                                Poor posture, especially while sitting at a desk, is a major contributor to lower back strain. Ensure your workstation is ergonomically set up:
                            </p>
                            <ul className="space-y-3 mb-6 list-none pl-2">
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                    <span>Keep your feet flat on the floor.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                    <span>Ensure your knees are slightly lower than your hips.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                    <span>Adjust your monitor so the top is at eye level.</span>
                                </li>
                            </ul>

                            <blockquote className="p-6 my-8 border-l-4 border-primary bg-primary/5 dark:bg-primary/10 rounded-r-lg italic text-lg text-gray-700 dark:text-gray-300">
                                "Micro-breaks are essential. Stand up, stretch, or walk around for at least 2 minutes every hour to reset your spine's position."
                            </blockquote>

                            <div className="my-10 rounded-xl overflow-hidden shadow-sm aspect-video relative">
                                <Image
                                    fill
                                    style={{ objectFit: "cover" }}
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCM294ioZ9qZiLAM18pPIbnZDOMq2k0RLYEKx5Ar0i8EbWCAETJ7Dyxcqamo6wFlQNXDnHfSoqSOC57vXTxUruoeihY9k1iM3UcxQSuTtc0dkBQ8sMgpolkr80HvKRbfAAhY_jyc3aOy0H7tblwyVUki_aRG7u6zTGocdO8xE6nUw_m5XP8oYAm1tIDGtndnZEyyZpynJYjElDaRLHE-Z8N2Z7X1zl9JbCqBX9lHUEil8LUoD12VU_pFGSIfRJRL6sqwoIQmpSCe04q"
                                    alt="Illustration of proper sitting posture vs improper posture"
                                />
                                <div className="absolute bottom-0 w-full bg-background-light/90 dark:bg-surface-dark/90 p-3 text-sm text-center text-gray-500 dark:text-gray-400 italic backdrop-blur-sm">
                                    Ergonomic setups can reduce strain by up to 40%.
                                </div>
                            </div>

                            {/* ... more content placeholder ... */}
                            <h2 className="text-2xl font-bold text-text-light dark:text-white mt-10 mb-4 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary-dark text-sm font-bold">3</span>
                                Heat & Ice Therapy
                            </h2>
                            <p className="mb-6 leading-relaxed">
                                Knowing when to use heat or ice can be confusing. Generally, <strong>ice</strong> is best for the first 48 hours after a sudden injury to reduce inflammation. <strong>Heat</strong> is better for chronic aches or stiffness because it relaxes tight muscles.
                            </p>
                        </div>

                        {/* Author Bio Box */}
                        <div className="mt-12 p-8 bg-white dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left shadow-sm">
                            <div className="w-20 h-20 shrink-0 rounded-full overflow-hidden relative">
                                <Image
                                    fill
                                    style={{ objectFit: "cover" }}
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDoQ7pjhdkfPoHcI-WDb20Rl6b0MIftldZw6vzW-zFFt4LHe2poCQdIkkcvFglrCDk7xCYo6LSWAwuzfTOEIMnJTeWfV8CuuPq8Lu2c2lAB2ArdDHR4YTirjnTwqjHiKnVQFfphg1t-_tC1C9UKRC8ze3LSzusR7-Il6z3y1O2lrPg-lpQsZvtw6gJGxXnKChcrEMv5bP7SkCz2iYHOKGQBl9E1ODuV_mS1en5ymAfkS7KYNwFGvnUCGK2R38f16BS-ZzDeuoPhfdk"
                                    alt="Dr Sarah Jenkins"
                                />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-text-light dark:text-white mb-2">About Dr. Sarah Jenkins</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                                    Sarah is a senior physiotherapist with over 12 years of experience specializing in spinal rehabilitation and sports injuries. She is passionate about empowering patients through education and active recovery.
                                </p>
                                <a className="text-primary hover:underline text-sm font-semibold inline-flex items-center gap-1" href="#">
                                    View full profile <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </a>
                            </div>
                        </div>
                    </article>

                    {/* Right Column: Sidebar */}
                    <aside className="w-full lg:w-[360px] flex flex-col gap-8 shrink-0">
                        {/* Search Widget */}
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 material-symbols-outlined">search</span>
                            <input className="w-full h-12 pl-10 pr-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-surface-dark text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" placeholder="Search articles..." type="text" />
                        </div>

                        {/* Newsletter Card */}
                        <div className="bg-background-dark rounded-xl p-8 text-white relative overflow-hidden group">
                            {/* Decorative background circle */}
                            <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/30 transition-all duration-500"></div>
                            <h3 className="text-xl font-bold mb-2 relative z-10">Join our Healthy Spine Newsletter</h3>
                            <p className="text-gray-300 text-sm mb-6 relative z-10">Get expert tips, exercises, and clinic updates delivered to your inbox weekly.</p>
                            <div className="flex flex-col gap-3 relative z-10">
                                <input className="w-full h-10 px-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-400 text-sm focus:outline-none focus:bg-white/20 transition-all" placeholder="Your email address" type="email" />
                                <button className="w-full h-10 rounded-lg bg-primary text-white text-sm font-bold hover:bg-primary-dark transition-colors flex items-center justify-center gap-2">
                                    Subscribe <span className="material-symbols-outlined text-sm">mail</span>
                                </button>
                            </div>
                            <p className="text-xs text-gray-500 mt-4 text-center">No spam, unsubscribe anytime.</p>
                        </div>

                        {/* Recent Posts Widget */}
                        <div className="bg-white dark:bg-surface-dark rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                            <h3 className="text-lg font-bold text-text-light dark:text-white mb-6 flex items-center gap-2">
                                <span className="w-1 h-6 bg-primary rounded-full"></span>
                                Recent Posts
                            </h3>
                            <div className="flex flex-col gap-6">
                                {/* Post 1 */}
                                <Link className="group flex gap-4 items-start" href="#">
                                    <div className="relative w-20 h-20 shrink-0 rounded-lg overflow-hidden bg-gray-100">
                                        <Image fill style={{ objectFit: "cover" }} src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqMoe0zUM_6rHjZBNW5_vqib-NRAYS9l42V_9fIkl6RmuBSZDYBEsofNA-md4Mqrhqdr_p0rlpEOifVpm4KyBVhZo6YdRBSfglaDUskL71P_qOpsXDNpE6CYeVOVK2aXj-x8_Vm1uckCjESEi3bFSVJNWq8iWmg6AJOs7Xr8_-IxshqejaKIIgZdvA0tsJFqio4_q5vDXiZ0ErJnyuswfe87LzQxvd4_4zd5rfzu7hqhgtzIumEurb6oBxWp2YcKv-Nh28y5UOKjhT" alt="Thumb" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-text-light dark:text-white leading-tight mb-2 group-hover:text-primary transition-colors">Understanding Rotator Cuff Injuries</h4>
                                        <span className="text-xs text-gray-500">Oct 18, 2023</span>
                                    </div>
                                </Link>
                                {/* Post 2 */}
                                <Link className="group flex gap-4 items-start" href="#">
                                    <div className="relative w-20 h-20 shrink-0 rounded-lg overflow-hidden bg-gray-100">
                                        <Image fill style={{ objectFit: "cover" }} src="https://lh3.googleusercontent.com/aida-public/AB6AXuB93Xe8RND5Ng0NZ1BLK5iemQh0BG8fwyDw1TaIkCwt3WJ3P8RIrYfP58GVfu50epuS9Mfsp7g1T5osR9S3hPCCCzsRc5S8ILzykNQ9MUfPbMp04b4zTHOn6AbElDazsgGy7-wNHih-SaL-6rY-rZscI-SaGJharQIp0yV2SIcE_RaAr-d1d7a8HiadghDTgmt2NRW8yrPL3VzmWumWCt4PBcWIUuMgvwxTh0Bw6JWKrM5jZ8zfKxvVi6V1gyYnXhF0FUCQnfpTUrjg" alt="Thumb" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-text-light dark:text-white leading-tight mb-2 group-hover:text-primary transition-colors">The Surprising Benefits of Hydrotherapy</h4>
                                        <span className="text-xs text-gray-500">Sep 29, 2023</span>
                                    </div>
                                </Link>
                                {/* Post 3 */}
                                <Link className="group flex gap-4 items-start" href="#">
                                    <div className="relative w-20 h-20 shrink-0 rounded-lg overflow-hidden bg-gray-100">
                                        <Image fill style={{ objectFit: "cover" }} src="https://lh3.googleusercontent.com/aida-public/AB6AXuDem-iVKg4mTyHipCA35XHXQTesw-ljPvFXMVktBC8C8HzhBppspHaRJIenjKr4jh-zDe6Q81Rl9i0PNL7EPI2KpDIfYUUwf1B1Sg0Aiy1T76ultexY7p0-L6SksWSJWqUc034uMEt11wkV-ivVmukDXKCC9rSJkxDh1v3iheGPVGLP_-nc9AcNarHLQuNH5mLJqG2Z6LDqIwbUErJPJCZV7IlDjCZOoWv9aRNz7u0_1DFIc81BV1zKxbOoPF4US6xdb02guZJ1bWOG" alt="Thumb" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-text-light dark:text-white leading-tight mb-2 group-hover:text-primary transition-colors">Runner's Knee: Prevention Tips</h4>
                                        <span className="text-xs text-gray-500">Sep 15, 2023</span>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        {/* Sticky CTA */}
                        <div className="sticky top-24 bg-white dark:bg-surface-dark rounded-xl p-6 border border-primary/30 shadow-md text-center">
                            <div className="w-12 h-12 bg-primary/20 text-primary-dark rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="material-symbols-outlined text-2xl text-primary">calendar_month</span>
                            </div>
                            <h3 className="text-lg font-bold text-text-light dark:text-white mb-2">Need Professional Help?</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">Our team is ready to help you recover faster. Book your initial assessment today.</p>
                            <Link href="/book-appointment">
                                <button className="w-full py-3 rounded-lg bg-primary text-white text-sm font-bold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20">
                                    Book an Appointment
                                </button>
                            </Link>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
}
