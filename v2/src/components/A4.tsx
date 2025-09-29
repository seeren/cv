interface A4Props {
    children: React.ReactNode;
}

function A4({ children }: A4Props) {
    return (
        <div className="px-8 py-4 w-[210mm] h-[297mm] bg-white mx-auto flex flex-col print:w-[210mm] print:h-[297mm] print:mx-0 print:shadow-none shadow-lg">
            {children}
        </div>
    );
}

export default A4;