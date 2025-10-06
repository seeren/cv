

function ButtonPrint() {
    return (
        <div className="print:hidden fixed top-4 right-4 z-50">
            <button
                onClick={() => window.print()}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-lg transition-colors"
            >
                🖨️ Imprimer CV
            </button>
        </div>
    );
}

export default ButtonPrint;