export default function Features() {
    return (
        <section className="py-16 px-6 lg:px-20 bg-surface-light dark:bg-surface-dark border-y border-gray-100 dark:border-gray-800">
            <div className="max-w-[1280px] mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-text-main-light dark:text-text-main-dark mb-4">
                        Why Choose ProActive
                    </h2>
                    <p className="text-text-sec-light dark:text-text-sec-dark">
                        We are committed to providing the highest quality of care in a
                        friendly and professional environment.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-background-light dark:hover:bg-background-dark transition-colors">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                            <span className="material-symbols-outlined text-3xl">group</span>
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-text-main-light dark:text-text-main-dark">
                            Expert Team
                        </h3>
                        <p className="text-sm text-text-sec-light dark:text-text-sec-dark">
                            Our therapists are highly trained and continuously updating their
                            skills.
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-background-light dark:hover:bg-background-dark transition-colors">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                            <span className="material-symbols-outlined text-3xl">
                                favorite
                            </span>
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-text-main-light dark:text-text-main-dark">
                            Patient-Centered
                        </h3>
                        <p className="text-sm text-text-sec-light dark:text-text-sec-dark">
                            Your goals are our goals. We listen and tailor treatments to you.
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-background-light dark:hover:bg-background-dark transition-colors">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                            <span className="material-symbols-outlined text-3xl">
                                home_health
                            </span>
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-text-main-light dark:text-text-main-dark">
                            Modern Facilities
                        </h3>
                        <p className="text-sm text-text-sec-light dark:text-text-sec-dark">
                            Equipped with the latest technology to aid your recovery.
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-background-light dark:hover:bg-background-dark transition-colors">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                            <span className="material-symbols-outlined text-3xl">
                                schedule
                            </span>
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-text-main-light dark:text-text-main-dark">
                            Flexible Hours
                        </h3>
                        <p className="text-sm text-text-sec-light dark:text-text-sec-dark">
                            Early morning and evening appointments available for your
                            convenience.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
