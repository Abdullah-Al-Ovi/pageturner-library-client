import { useLoaderData } from "react-router-dom";
import { usePDF } from 'react-to-pdf';


const Content = () => {
    const loadedBook = useLoaderData()
    const { toPDF, targetRef } = usePDF({filename: `${loadedBook.name}.pdf`});
    const {content,name} = loadedBook
    return (
        <div ref={targetRef} className="my-7">
            <h1 className="text-center my-3 text-gray-400">Some content from  <span className="font-medium underline text-gray-700">{name}</span></h1>
            <div className="w-[80%] md:w-[70%] lg:w-[60%] h-lg:[50vh] text-lg text-left  mx-auto flex justify-center items-center">
            {content}
            </div>
            <div className="text-center">
                <button  onClick={() => toPDF()} className="btn btn-primary">Save as PDF</button>
            </div>
        </div>
    );
};

export default Content;