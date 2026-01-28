import Link from "next/link";

export default function ReadyToFeelBetter() {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative overflow-hidden rounded-3xl bg-background-dark px-6 py-16 shadow-2xl sm:px-16 md:pt-20 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 items-center">
                    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-900 to-background-dark"></div>
                    <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-24 lg:text-left">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to feel better?<br />Start your recovery today.</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300">Book your initial assessment now and take the first step towards a pain-free life.</p>
                        <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                            <Link href="/book-appointment">
                                <button className="rounded-lg bg-primary px-6 py-3 text-sm font-bold text-background-dark shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                                    Book Appointment
                                </button>
                            </Link>
                            <Link href="/contact" className="text-sm font-semibold leading-6 text-white hover:text-primary transition-colors">
                                Contact Support <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </div>
                    <div className="relative mt-16 h-80 lg:mt-8">
                        <div
                            className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                            style={{
                                backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB_HSZLCtqL7pBFP7gaaLyCGEw5_FSP_JSoGRaTD6olE5yPg31c2gl-rlbGBWrzz6CuWs9a-iTQVQvisZcvklrVWMCbDSqYJzCtQIfinijb7o3pv-1ah0P4WmDWlG_JlQl3vKRdq_BRfbhqc7jegsqLmkK_f99IBp4OuC4TCLhHdkxZJrr2qKH2heHl-FMee6F3P1gF9baKOz5pBV1potHvQW9a0ImRuFY95XivKezWbNl3fPpyrj_HbHOeyGJy1xbGVAtUGbcsKve9')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                height: "100%",
                                borderRadius: "1rem"
                            }}
                        ></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
