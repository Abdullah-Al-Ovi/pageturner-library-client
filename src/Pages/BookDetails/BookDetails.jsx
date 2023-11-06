import { Rating } from "@smastrom/react-rating";
import { useLoaderData } from "react-router-dom";
import '@smastrom/react-rating/style.css'


const BookDetails = () => {
    const loadedBookDetail = useLoaderData()
    const {image,name,author_name,quantity,rating,category,short_description,content}= loadedBookDetail

    return (
        <div className=" overflow-hidden w-[80%] mx-auto bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <div className="px-4 py-2 text-center">
            <h1 className="text-lg lg:text-2xl font-semibold text-gray-800  dark:text-white">Title: {name}</h1>
            <p className="mt-1 text-gray-600 dark:text-gray-400 "><span className="text-lg font-medium">Author: </span>{author_name}</p>

</div>

<img className="object-cover w-[60%] mx-auto mt-2 rounded" src={image}  />

<div className="flex items-center w-[60%] mx-auto justify-between px-4 py-2 bg-gray-900">

<button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Borrow</button>
<button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Read</button>
</div>
<div className="text-center space-y-2 my-3">
<p className="mt-1 text-gray-600 dark:text-gray-400"><span className="text-lg font-medium">Description: </span>{short_description}</p>
<p className="mt-1 text-gray-600 dark:text-gray-400 "><span className="text-lg font-medium">Category: </span>{category}</p>
<p className="mt-1 text-gray-600 dark:text-gray-400 "><span className="text-lg font-medium">Quantity: </span>{quantity}</p>
<p className="text-sm flex  justify-center items-center "><span className="font-medium">Rating: </span>
<Rating style={{ maxWidth: 150 }}  readOnly size={30} value={rating}  />
</p>

</div>
</div>
    );
};

export default BookDetails;