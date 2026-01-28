import Link from "next/link";
import Image from "next/image";

export default function OurCoreServices() {
    return (
        <section className="py-16 sm:py-24 bg-background-light dark:bg-background-dark">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-bold tracking-tight text-text-light dark:text-white sm:text-4xl mb-4">Our Core Services</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300">Comprehensive treatments designed to restore movement and improve quality of life.</p>
                    </div>
                    <Link href="/services" className="inline-flex items-center gap-2 text-sm font-bold text-primary-dark dark:text-primary hover:underline decoration-2 underline-offset-4">
                        View All Services
                        <span className="material-symbols-outlined text-lg">arrow_forward</span>
                    </Link>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Service Card 1 */}
                    <div className="group flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-surface-dark shadow-sm transition-all hover:shadow-md border border-gray-100 dark:border-gray-800">
                        <div className="aspect-video w-full overflow-hidden bg-gray-200 relative">
                            <div className="relative h-full w-full transition-transform duration-300 group-hover:scale-105">
                                <Image
                                    fill
                                    style={{ objectFit: "cover" }}
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZJKcuyY0G0L9rzfGHSnh9zNHoGugZ93AaAAdW7XeybXgYoCOlg--vKC7njxhvQWJHydTQZxlHiErm6Pa6n4WHl6pN2RwqcgPVcP-Yxi1bKgDxE8kqIBY-jZ9PWK_TOw_b-f2bc1Nr3rcDJs2oomwJly_xORU1UrgNdgISPxya6dy6ip1r3ay1ecYAWn3srCzvD9u_TTcKosss8KwYfCnzEriC_T8C3RZE0NNfUD59cyA6fbHc7xdU2Lb6eqJlwi1yEox4tjUmHNRh"
                                    alt="Close up of a physiotherapist performing manual therapy on a patient's shoulder"
                                />
                            </div>
                        </div>
                        <div className="flex flex-1 flex-col p-6">
                            <h3 className="text-xl font-bold text-text-light dark:text-white">Manual Therapy</h3>
                            <p className="mt-2 flex-1 text-sm text-gray-600 dark:text-gray-400">Hands-on treatment to mobilize joints and soft tissue, reducing pain and increasing range of motion.</p>
                            <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                                <span className="text-sm font-semibold text-primary-dark dark:text-primary group-hover:underline">Learn more</span>
                            </div>
                        </div>
                    </div>
                    {/* Service Card 2 */}
                    <div className="group flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-surface-dark shadow-sm transition-all hover:shadow-md border border-gray-100 dark:border-gray-800">
                        <div className="aspect-video w-full overflow-hidden bg-gray-200 relative">
                            <div className="relative h-full w-full transition-transform duration-300 group-hover:scale-105">
                                <Image
                                    fill
                                    style={{ objectFit: "cover" }}
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8wktsSAuYlVhQsVHh2SSPogqp69Fp4Ys2VfgPtYdPRMipAH5dROfdwqemYYOXHum4-iD6MSZEVbHSFGQSC_EkqBCmfgtNjc7Iq8OcG9uAG9elrxd29LYMyvaEiX3OubID6hqqRgTI-LIaUoGPCGUGLPpyegiXzi6V-YHrTCGCPTJwBAeYmRhFlbV9mRSx7OXMn0CxP1JXoKNTt79cEY0H0jJM-dgwXBk58Gn6xKQw2zdLs49JOdaSUr8CWdmBPD__TuyOTs-s5NpE"
                                    alt="Athlete running on a treadmill in a sports lab setting"
                                />
                            </div>
                        </div>
                        <div className="flex flex-1 flex-col p-6">
                            <h3 className="text-xl font-bold text-text-light dark:text-white">Sports Injury Rehab</h3>
                            <p className="mt-2 flex-1 text-sm text-gray-600 dark:text-gray-400">Targeted recovery plans to get you back in the game stronger and safer than before.</p>
                            <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                                <span className="text-sm font-semibold text-primary-dark dark:text-primary group-hover:underline">Learn more</span>
                            </div>
                        </div>
                    </div>
                    {/* Service Card 3 */}
                    <div className="group flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-surface-dark shadow-sm transition-all hover:shadow-md border border-gray-100 dark:border-gray-800">
                        <div className="aspect-video w-full overflow-hidden bg-gray-200 relative">
                            <div className="relative h-full w-full transition-transform duration-300 group-hover:scale-105">
                                <Image
                                    fill
                                    style={{ objectFit: "cover" }}
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNlJOfJJ3mCgVuRHmGxzPIm-0cUjejFrsZ2xECwGGKIRKq-rOoDYw2U3EjuryKTQ3PlT2wCFeuZbzTYreSKpOY-vAn41ZIkY1SKvROOdRfz3ZcYw5fMdS12DUpmQ2RNPntM6X1ErwkIFyVhbnynOnef4oEk2g9bpzZxZLOhS5PBmruc2613eAVwbVmDg3kLTXpLgUh-zR1wswMZuYW1MGiwpwHAOdiMUz2RFztz9BlCRg2p85KezXhGT4UUMGfDL4wYkZjh7gPhaMr"
                                    alt="Doctor discussing post-operation x-rays with a patient"
                                />
                            </div>
                        </div>
                        <div className="flex flex-1 flex-col p-6">
                            <h3 className="text-xl font-bold text-text-light dark:text-white">Post-Op Recovery</h3>
                            <p className="mt-2 flex-1 text-sm text-gray-600 dark:text-gray-400">Safe and effective rehabilitation protocols after surgical procedures to accelerate healing.</p>
                            <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                                <span className="text-sm font-semibold text-primary-dark dark:text-primary group-hover:underline">Learn more</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
