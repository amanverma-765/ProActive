export default function FAQPage() {
    return (
        <main className="flex-grow flex flex-col items-center w-full">
            <div className="w-full max-w-[960px] px-4 sm:px-6 lg:px-8 py-10 sm:py-16 flex flex-col gap-10">
                {/* Hero Section */}
                <section className="flex flex-col gap-4 text-center items-center">
                    <h1 className="text-4xl sm:text-5xl font-black leading-tight tracking-[-0.033em] text-text-light dark:text-white">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 text-lg font-normal max-w-2xl leading-relaxed">
                        Everything you need to know about your recovery journey with ProActive. Find answers about insurance, first visits, and more.
                    </p>
                </section>

                {/* Search and Filter Section */}
                <section className="w-full flex flex-col items-center gap-6">
                    {/* Search Bar */}
                    <div className="w-full max-w-2xl relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <span className="material-symbols-outlined text-gray-400">search</span>
                        </div>
                        <input className="block w-full h-14 pl-12 pr-4 rounded-xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 text-text-light dark:text-white placeholder-gray-400 transition-all shadow-sm text-base" placeholder="Search for a topic (e.g., insurance, first visit)..." type="text" />
                    </div>
                    {/* Chips */}
                    <div className="flex flex-wrap justify-center gap-3">
                        <button className="flex h-9 items-center justify-center px-4 rounded-full bg-primary text-white text-sm font-bold shadow-sm ring-2 ring-primary ring-offset-2 ring-offset-background-light dark:ring-offset-background-dark transition-all">
                            All
                        </button>
                        <button className="flex h-9 items-center justify-center px-4 rounded-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 hover:border-primary text-text-light dark:text-white hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors shadow-sm">
                            New Patients
                        </button>
                        <button className="flex h-9 items-center justify-center px-4 rounded-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 hover:border-primary text-text-light dark:text-white hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors shadow-sm">
                            Treatments
                        </button>
                        <button className="flex h-9 items-center justify-center px-4 rounded-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 hover:border-primary text-text-light dark:text-white hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors shadow-sm">
                            Billing & Insurance
                        </button>
                    </div>
                </section>

                {/* Accordion List */}
                <section className="w-full flex flex-col gap-4 mt-4">
                    {/* Item 1 */}
                    <details className="group rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-surface-dark overflow-hidden transition-all duration-300 hover:shadow-md" open>
                        <summary className="flex cursor-pointer items-center justify-between gap-6 p-6 select-none bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                            <h3 className="text-base sm:text-lg font-bold text-text-light dark:text-white">What should I expect on my first visit?</h3>
                            <div className="flex items-center justify-center size-8 rounded-full bg-primary/10 text-primary group-open:bg-primary group-open:text-white transition-all duration-300 group-open:rotate-180">
                                <span className="material-symbols-outlined">expand_more</span>
                            </div>
                        </summary>
                        <div className="px-6 pb-6 pt-0">
                            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
                                Your first visit is all about understanding you. It will involve a comprehensive assessment of your condition, a detailed discussion about your personal recovery goals, and the creation of a personalized treatment plan. Please bring any relevant medical reports and wear comfortable clothing that allows for easy movement.
                            </p>
                        </div>
                    </details>
                    {/* Item 2 */}
                    <details className="group rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-surface-dark overflow-hidden transition-all duration-300 hover:shadow-md">
                        <summary className="flex cursor-pointer items-center justify-between gap-6 p-6 select-none bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                            <h3 className="text-base sm:text-lg font-bold text-text-light dark:text-white">Do I need a doctor's referral?</h3>
                            <div className="flex items-center justify-center size-8 rounded-full bg-primary/10 text-primary group-open:bg-primary group-open:text-white transition-all duration-300 group-open:rotate-180">
                                <span className="material-symbols-outlined">expand_more</span>
                            </div>
                        </summary>
                        <div className="px-6 pb-6 pt-0">
                            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
                                In many cases, you do not need a referral to begin physiotherapy, thanks to "Direct Access" laws. However, some insurance plans may require one for reimbursement. We recommend checking with your provider or giving our front desk a call at +917518840048 so we can verify your benefits for you.
                            </p>
                        </div>
                    </details>
                    {/* Item 3 */}
                    <details className="group rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-surface-dark overflow-hidden transition-all duration-300 hover:shadow-md">
                        <summary className="flex cursor-pointer items-center justify-between gap-6 p-6 select-none bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                            <h3 className="text-base sm:text-lg font-bold text-text-light dark:text-white">Do you accept my insurance?</h3>
                            <div className="flex items-center justify-center size-8 rounded-full bg-primary/10 text-primary group-open:bg-primary group-open:text-white transition-all duration-300 group-open:rotate-180">
                                <span className="material-symbols-outlined">expand_more</span>
                            </div>
                        </summary>
                        <div className="px-6 pb-6 pt-0">
                            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
                                We accept most major insurance plans, including Blue Cross, Aetna, Cigna, and Medicare. Since plans vary significantly, please contact our billing department before your visit so we can give you a clear estimate of any co-pays or deductibles.
                            </p>
                        </div>
                    </details>
                    {/* Item 4 */}
                    <details className="group rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-surface-dark overflow-hidden transition-all duration-300 hover:shadow-md">
                        <summary className="flex cursor-pointer items-center justify-between gap-6 p-6 select-none bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                            <h3 className="text-base sm:text-lg font-bold text-text-light dark:text-white">How long is a typical session?</h3>
                            <div className="flex items-center justify-center size-8 rounded-full bg-primary/10 text-primary group-open:bg-primary group-open:text-white transition-all duration-300 group-open:rotate-180">
                                <span className="material-symbols-outlined">expand_more</span>
                            </div>
                        </summary>
                        <div className="px-6 pb-6 pt-0">
                            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
                                Initial evaluations typically last about 60 minutes. Follow-up treatment sessions usually range from 30 to 45 minutes, depending on the complexity of your condition and the specific therapies being performed.
                            </p>
                        </div>
                    </details>
                    {/* Item 5 */}
                    <details className="group rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-surface-dark overflow-hidden transition-all duration-300 hover:shadow-md">
                        <summary className="flex cursor-pointer items-center justify-between gap-6 p-6 select-none bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                            <h3 className="text-base sm:text-lg font-bold text-text-light dark:text-white">Is there parking available?</h3>
                            <div className="flex items-center justify-center size-8 rounded-full bg-primary/10 text-primary group-open:bg-primary group-open:text-white transition-all duration-300 group-open:rotate-180">
                                <span className="material-symbols-outlined">expand_more</span>
                            </div>
                        </summary>
                        <div className="px-6 pb-6 pt-0">
                            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
                                Yes, we have a dedicated patient parking lot directly behind the building. It is free of charge for all ProActive patients during their appointment times. Wheelchair accessible spots are located near the ramp entrance.
                            </p>
                        </div>
                    </details>
                    {/* Item 6 */}
                    <details className="group rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-surface-dark overflow-hidden transition-all duration-300 hover:shadow-md">
                        <summary className="flex cursor-pointer items-center justify-between gap-6 p-6 select-none bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                            <h3 className="text-base sm:text-lg font-bold text-text-light dark:text-white">What if I need to cancel my appointment?</h3>
                            <div className="flex items-center justify-center size-8 rounded-full bg-primary/10 text-primary group-open:bg-primary group-open:text-white transition-all duration-300 group-open:rotate-180">
                                <span className="material-symbols-outlined">expand_more</span>
                            </div>
                        </summary>
                        <div className="px-6 pb-6 pt-0">
                            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
                                We understand that life happens. We ask for at least 24 hours' notice for cancellations so we can offer that time slot to another patient who may need care. Cancellations made with less than 24 hours' notice may be subject to a fee.
                            </p>
                        </div>
                    </details>
                </section>

                {/* Still Have Questions CTA */}
                <section className="w-full mt-8">
                    <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
                        {/* Decor element */}
                        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
                        <div className="flex flex-col gap-3 relative z-10 text-center md:text-left">
                            <h2 className="text-2xl font-bold text-text-light dark:text-white">Can't find what you're looking for?</h2>
                            <p className="text-gray-600 dark:text-gray-400">Our friendly team is here to help with any specific questions.</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full md:w-auto">
                            <a className="flex items-center justify-center gap-2 h-12 px-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent hover:bg-background-light dark:hover:bg-background-dark text-text-light dark:text-white font-bold transition-colors w-full sm:w-auto" href="#">
                                <span className="material-symbols-outlined text-xl">call</span>
                                <span>+917518840048</span>
                            </a>
                            <a className="flex items-center justify-center h-12 px-6 rounded-lg bg-primary hover:bg-primary-dark text-white font-bold transition-colors w-full sm:w-auto shadow-lg shadow-primary/20" href="/contact">
                                Contact Our Team
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
