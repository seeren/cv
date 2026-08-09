function SectionHeading({ title }: { title: string }) {
    return (
        <h2 className="text-lg font-semibold text-red-dark uppercase tracking-wide ">
            {title}
        </h2>
    );
}

export default SectionHeading;