import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import useAxios from "../../Components/Hooks/useAxios";
import swal from "sweetalert";


const UpdateBook = () => {
    const loadedBook = useLoaderData()
    const axiosBasic = useAxios()
    const [finalName,setFinalName]=useState(loadedBook.name)
    const [finalAuthor,setFinalAuthor]=useState(loadedBook.author_name)
    const [finalimage,setFinalImage]=useState(loadedBook.image)
    const [finalRating,setFinalrating]=useState(loadedBook.rating)
    const [finalCategory,setFinalCategory] = useState(loadedBook.category)

    const handleUpdate=(e)=>{
        e.preventDefault()
        const updatedBook = {
            name: finalName,
            author_name: finalAuthor,
            category: finalCategory,
            image: finalimage,
            rating: finalRating
        }
        console.log(updatedBook);

        axiosBasic.put(`/update/${loadedBook._id}`,updatedBook)
        .then(res=>{
            if(res.data.modifiedCount){
                swal("Congratulations!", "Book Updated successfully!", "success");
            }
        })

    }
    return (
        <div>
        <div className="text-center mt-3">
            <h1 className="text-lg font-medium md:text-2xl md:font-semibold ">Update Book</h1>
        </div>
        <div className="w-[95%] md:w-[80%] mx-auto my-7">

        <form onSubmit={handleUpdate} className="bg-slate-200 p-5 rounded">
           <div className="w-[85%] mx-auto space-y-2">
           <div className="flex  ">
                <div className="w-[100%]">
                <h1 className="">Name:</h1>
                <input value={finalName} onChange={(e)=>setFinalName(e.target.value)} type="text" name="name" className="rounded p-1 w-[65%]" />
                </div>

                <div className="w-[100%] ">
                <h1>Author:</h1>
                <input value={finalAuthor} onChange={(e)=>setFinalAuthor(e.target.value)} type="text" name="finalAuthor" className="rounded p-1 w-[65%]" />
                </div>
            </div>
           <div className="flex">
                <div className="w-[100%]">
                <h1 className="">Category:</h1>
                <select value={finalCategory} onChange={(e)=>setFinalCategory(e.target.value)}>
                    <option value="Novel">Novel</option>
                    <option value="Thriller">Thriller</option>
                    <option value="History">History</option>
                    <option value="Sci-Fi">Sci-Fi</option>
                </select>
                </div>

                <div className="w-[100%] ">
                <h1>Image:</h1>
                <input value={finalimage} onChange={(e)=>setFinalImage(e.target.value)} type="text" name="image" className=" rounded p-1 w-[65%]" />
                </div>
            </div>
           <div className="flex ">
                

                <div className="w-[100%] ">
                <h1>Rating:</h1>
                <input value={finalRating} onChange={(e)=>setFinalrating(e.target.value)} type="text" name="rating" className="rounded p-1 w-[65%] " />
                </div>
            </div>
           
           </div>
           
           <div className="text-center ">
                <input type="submit" className="border-[2px] bg-green-400 px-2 w-[50%] my-3 mx-auto " value="Submit" />
           </div>

        </form>
        </div>
    </div>
    );
};

export default UpdateBook;