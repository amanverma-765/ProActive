import Link from "next/link";
import Image from "next/image";

export default function Services() {
    const services = [
        {
            title: "Manual Therapy",
            description: "Hands-on treatment to mobilize joints and soft tissues to reduce pain and increase range of motion.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB21vcyVZhCxC3if7lZzpGHWLiN5Qrbpw9OxFPKaLli1VihwCWu88TEfrqGXDSri6oqvEkD8QNu0CKghTwvaX5pnTW51J3VzyhzYKBWWnwAZB3zzfoN-5Axwnv6Wj5nmBFYIe39kmAicy8GeDTMrG90gDQYrqgHrF9bt0Ivg_dRZ9_Z3rM7IlyKhfeUo-6LFb5ku6qzJsFfeCxXsl84ogCgi66eWt76k1XJQjJXAuKFRJIHUPQyjrY3m6vfavdqGCkG6ofx3fTX6XZ4",
            link: "/services/manual-therapy"
        },
        {
            title: "Sports Rehab",
            description: "Specialized programs for athletes returning to sport, focusing on strength, agility, and injury prevention.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDuIGmfmuMhDTj7pUGFS2QE_8Y2BE4V8lZGBJxK20FR39x1tXzgTmiQhm5__cNNaRRE318Z_SMs8EBxAGIcQCiTPLXpqYPUEYqZmcg0jZX2-61aIxim8s5abcM5urY61AB3vnYui0tmZvuRhGmXrxfw3S_W5zrlKaxZ3kNrZUo7YUme_mJGuKK5E4KWNPVAS05oySfweCrROWsZV15hsNRdMbX810ASvCkjgQHZLCtTNw4LXXvEPTKv9OpjT7OF2v8Ai9Bt2lvw-_N_",
            link: "/services/sports-rehab"
        },
        {
            title: "Post-Op Care",
            description: "Comprehensive rehabilitation following surgical procedures to ensure optimal healing and recovery.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0B9YgvjEUb6en2pXlUjRIsBvCkaousNHQzOyEe1K0X1q9uwCDl4uA7kp2AeNl3QKuxzhaf32VAz6B5ZP6BWUcKWeAwmNZKvHlCiGN7qYGXAVJkVcnGMu1IzGPZCVoRzq3LGXc16rbLxN_svYi3Jj_nAvB3GiXfikM9pxS2wfPUG-ZLIEb3EhOCnRldvIm96SCmZjfPKRdjgVZoqO4G_wvUAhwlH2JnX9_IE2-r9VC3vHyBC1EBbHgBd7HkzADelPz5ZL54ads0Vsh",
            link: "/services/post-op"
        }
    ];

    return (
        <section className="py-16 px-6 lg:px-20 bg-background-light dark:bg-background-dark">
            <div className="max-w-[1280px] mx-auto flex flex-col">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
                    <div>
                        <span className="text-primary font-bold text-sm uppercase tracking-wider mb-2 block">
                            Our Services
                        </span>
                        <h2 className="text-3xl font-bold text-text-main-light dark:text-text-main-dark">
                            Our Expertise
                        </h2>
                    </div>
                    <Link
                        href="/services"
                        className="text-primary font-bold flex items-center gap-1 hover:gap-2 transition-all"
                    >
                        View All Services{" "}
                        <span className="material-symbols-outlined text-sm">
                            arrow_forward
                        </span>
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-surface-light dark:bg-surface-dark p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-transparent hover:border-primary/20"
                        >
                            <div className="relative w-full h-48 bg-gray-200 rounded-lg overflow-hidden mb-4">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-text-main-light dark:text-text-main-dark">
                                {service.title}
                            </h3>
                            <p className="text-text-sec-light dark:text-text-sec-dark text-sm mb-4">
                                {service.description}
                            </p>
                            <Link
                                href={service.link}
                                className="text-sm font-bold text-primary hover:underline"
                            >
                                Read more
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
