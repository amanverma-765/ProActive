import Image from "next/image";

export default function Testimonials() {
    return (
        <section className="bg-sky-50 dark:bg-surface-dark/50 py-20 px-4 md:px-10">
            <div className="max-w-4xl mx-auto text-center">
                <div className="mb-8 flex justify-center">
                    <div className="w-16 h-16 bg-white dark:bg-surface-dark rounded-full flex items-center justify-center shadow-sm text-primary">
                        <span className="material-symbols-outlined text-4xl">
                            format_quote
                        </span>
                    </div>
                </div>
                <p className="text-xl md:text-3xl font-medium text-text-main-light dark:text-white leading-relaxed mb-10">
                    "The team at ProActive didn't just fix my knee; they gave me the
                    confidence to run my first marathon. Dr. Jenkins and her team were
                    incredibly supportive every step of the way."
                </p>
                <div className="flex items-center justify-center gap-4">
                    <div className="relative w-14 h-14 rounded-full border-2 border-white dark:border-gray-600 shadow-md overflow-hidden">
                        <Image
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpxT5k4WO5GJ6vEBi0x64VE0oa9XFsTrWygiigweQO4kGqiz2DxKyviVWFOyoQrxJqQpUnD2RCtTPms5xty8mdcia6z42eOArHITx0iUB3_KF3no4yzR6sk78ASCwVsNRfcm6L8VhnirAZXolG3TiFCyBiak0TeEyxCgvvOSBFF1X3QEZRy6WjjkyzLaTvvIcMnfbDWARgak3JxCMo2IiTjMuYrljgjkuvVltQiCpNBCMLQ_K1bmbX-IrTm51_XCNLHvmNzr1u6eVs"
                            alt="Rebecca S."
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="text-left">
                        <p className="text-base font-bold text-text-main-light dark:text-white">
                            Rebecca S.
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Marathon Runner & Patient
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
