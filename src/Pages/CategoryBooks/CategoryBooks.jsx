import { useLoaderData } from "react-router-dom";
import CategoryBook from "./CategoryBook/CategoryBook";


const CategoryBooks = () => {
    const loadedBooks = useLoaderData()
    console.log(loadedBooks);

    return (
        <div>
            <div className="grid grid-cols-2 gap-3 w-[90%] lg:w-[85%] mx-auto my-11">
            {
                loadedBooks?.length > 0 && loadedBooks?.map(books=><CategoryBook key={books._id} books={books}></CategoryBook>)
            }
             </div>
            {
                loadedBooks?.length === 0 &&  <div className=" h-[50vh] flex justify-center items-center text-center  mx-auto "><h1 className="mx-auto text-xl text-red-500 font-semibold ">There is no Book available for this category right now.Stay Connected to know further.</h1>
             </div>
        }
        </div>

    );
};

export default CategoryBooks;