export default function WhyChooseProActive() {
    return (
        <section className="py-16 bg-white dark:bg-surface-dark">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12 max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-text-light dark:text-white sm:text-4xl mb-4">Why Choose ProActive?</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">We don't just treat symptoms; we treat the person. Our holistic approach ensures long-term results.</p>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {/* Feature 1 */}
                    <div className="group relative rounded-2xl border border-gray-100 dark:border-gray-800 bg-background-light dark:bg-background-dark p-8 transition-all hover:border-primary/50 hover:shadow-lg">
                        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 text-text-light dark:text-white">
                            <span className="material-symbols-outlined">supervisor_account</span>
                        </div>
                        <h3 className="text-xl font-bold text-text-light dark:text-white mb-2">1-on-1 Sessions</h3>
                        <p className="text-gray-600 dark:text-gray-400">Dedicated time with your therapist without double-booking. You get our full attention every visit.</p>
                    </div>
                    {/* Feature 2 */}
                    <div className="group relative rounded-2xl border border-gray-100 dark:border-gray-800 bg-background-light dark:bg-background-dark p-8 transition-all hover:border-primary/50 hover:shadow-lg">
                        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 text-text-light dark:text-white">
                            <span className="material-symbols-outlined">verified</span>
                        </div>
                        <h3 className="text-xl font-bold text-text-light dark:text-white mb-2">Licensed Experts</h3>
                        <p className="text-gray-600 dark:text-gray-400">Our team consists of highly qualified professionals with specializations in sports and post-op care.</p>
                    </div>
                    {/* Feature 3 */}
                    <div className="group relative rounded-2xl border border-gray-100 dark:border-gray-800 bg-background-light dark:bg-background-dark p-8 transition-all hover:border-primary/50 hover:shadow-lg">
                        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 text-text-light dark:text-white">
                            <span className="material-symbols-outlined">credit_card</span>
                        </div>
                        <h3 className="text-xl font-bold text-text-light dark:text-white mb-2">Direct Billing</h3>
                        <p className="text-gray-600 dark:text-gray-400">We handle the insurance paperwork for you with most major providers, making your visit stress-free.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
