import Hero from "@/components/sections/Hero";
import WhyChooseProActive from "@/components/sections/WhyChooseProActive";
import OurCoreServices from "@/components/sections/OurCoreServices";
import PatientStories from "@/components/sections/PatientStories";
import ReadyToFeelBetter from "@/components/sections/ReadyToFeelBetter";

export default function Home() {
    return (
        <main>
            <Hero />
            <WhyChooseProActive />
            <OurCoreServices />
            <PatientStories />
            <ReadyToFeelBetter />
        </main>
    );
}
