interface A4Props {
    multiple?: boolean;
    children: React.ReactNode;
}

function A4({ children, multiple = false }: A4Props) {
    return (
        <div className={`px-8 py-4 w-[210mm] ${multiple ? '' : 'h-[297mm]'} bg-white mx-auto flex flex-col print:w-[210mm] print:h-[297mm] print:mx-0 print:shadow-none shadow-lg`}>
            {children}
        </div>
    );
}

export default A4;