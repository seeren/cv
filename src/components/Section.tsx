import SectionHeading from "./SectionHeading";

interface SectionProps {
    title: string;
    children: React.ReactNode;
}

function Section({ title, children }: SectionProps) {
    return (
        <section className="grow">
            <SectionHeading title={title} />
            <div className="space-y-1 overflow-hidden">
                {children}
            </div>
        </section>
    );
}

export default Section;