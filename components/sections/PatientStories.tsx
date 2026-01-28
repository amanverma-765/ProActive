import Image from "next/image";

export default function PatientStories() {
    return (
        <section className="py-16 bg-white dark:bg-surface-dark relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight text-center text-text-light dark:text-white sm:text-4xl mb-12">Patient Stories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Testimonial 1 */}
                    <div className="p-8 rounded-2xl bg-background-light dark:bg-background-dark border border-gray-100 dark:border-gray-800">
                        <div className="flex text-primary mb-4">
                            <span className="material-symbols-outlined text-lg">star</span>
                            <span className="material-symbols-outlined text-lg">star</span>
                            <span className="material-symbols-outlined text-lg">star</span>
                            <span className="material-symbols-outlined text-lg">star</span>
                            <span className="material-symbols-outlined text-lg">star</span>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 mb-6 italic">"ProActive got me back on the field in weeks. The team was incredibly supportive and the facility is top-notch. Highly recommend!"</p>
                        <div className="flex items-center gap-4">
                            <Image width={48} height={48} alt="Sarah J" className="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYQ9gMQFI0WVDKOC7QQScsRTVi8FEeo0XXqCUwCF7TOAEyjCPzpb4m2AB8VLzrnPBI49hw5Hcv_UA7-1ROfqCxUSqkThJ-XnysKVm2hO9BnxCrmhOl5i8e-Akw0-tLZ4p1Q2jRsTm5N5WoJqIl2i-dKRTo4HuDU3qMPjIG7XExj6qylGnPtUAOYvdu5B46NRt_8_JTgJGLuaVaAxUUbdXR5_pcA-UdPJ-pbOJvrGRabHWZDvxos6_4-KcBo5iwr3OBqvLAoRiaIGu1" />
                            <div>
                                <p className="font-bold text-text-light dark:text-white text-sm">Sarah Jenkins</p>
                                <p className="text-xs text-gray-500">Marathon Runner</p>
                            </div>
                        </div>
                    </div>
                    {/* Testimonial 2 */}
                    <div className="p-8 rounded-2xl bg-background-light dark:bg-background-dark border border-gray-100 dark:border-gray-800">
                        <div className="flex text-primary mb-4">
                            <span className="material-symbols-outlined text-lg">star</span>
                            <span className="material-symbols-outlined text-lg">star</span>
                            <span className="material-symbols-outlined text-lg">star</span>
                            <span className="material-symbols-outlined text-lg">star</span>
                            <span className="material-symbols-outlined text-lg">star</span>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 mb-6 italic">"I've struggled with back pain for years. After just a few sessions here, I'm feeling relief I haven't felt in a decade. Truly life changing."</p>
                        <div className="flex items-center gap-4">
                            <Image width={48} height={48} alt="Michael C" className="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDb2gDgeUcM6MtNpZBVGMUgjpBlrRJg5SEmBx8iGghobInnD4lWDcydY-Kj2qKVgwFj5K1wXVm46VruUY5BY1v80DhmGxc4Is8lREcfsirMYvO7-UjbCoo7gLKs0k2CENSb-VL_dzAOOHxu7Z7g134h3QyvTkNGom2rqJcHsqVsCcmfwmKDv3bR09iyUNze-3IHIGsmAMyjFSmtMIuVXI4xx1EzCSlyqcZevTUctD9hMoKKB0AywpLBggWGW37hApeMNREuePUGd_zE" />
                            <div>
                                <p className="font-bold text-text-light dark:text-white text-sm">Michael Chen</p>
                                <p className="text-xs text-gray-500">Software Engineer</p>
                            </div>
                        </div>
                    </div>
                    {/* Testimonial 3 */}
                    <div className="p-8 rounded-2xl bg-background-light dark:bg-background-dark border border-gray-100 dark:border-gray-800">
                        <div className="flex text-primary mb-4">
                            <span className="material-symbols-outlined text-lg">star</span>
                            <span className="material-symbols-outlined text-lg">star</span>
                            <span className="material-symbols-outlined text-lg">star</span>
                            <span className="material-symbols-outlined text-lg">star</span>
                            <span className="material-symbols-outlined text-lg">star</span>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 mb-6 italic">"Professional, clean, and friendly. The direct billing made everything so easy. My knee surgery recovery is ahead of schedule."</p>
                        <div className="flex items-center gap-4">
                            <Image width={48} height={48} alt="Elena R" className="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCggNJoNEMpL3BukGVM1CQJHndRrZcYJW-twb3OCuu-7AfC6QTe5HKai7DM_YDGY3fZARXkN9P7BeWwELeQNCT-guVJX-6T9rJUS9DAR2gSLp94DCYWS4rCU2DBk1g0gyckFyuBr0zrLhcFvtB7Ly0yvMXAJM1OY5Jf4YVz2NbUvjQ2XEuYie_rRw5MjHl_OdxfT9tuwgt-vOCspSPmrCerX2Bobleqis-cy4tYNsSUG91HFC9EHeFhG9odfeKCX4AllmkAdMLyTt6o" />
                            <div>
                                <p className="font-bold text-text-light dark:text-white text-sm">Elena Rodriguez</p>
                                <p className="text-xs text-gray-500">Teacher</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
