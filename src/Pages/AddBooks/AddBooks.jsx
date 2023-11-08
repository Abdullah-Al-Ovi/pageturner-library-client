import swal from 'sweetalert';
import useAxios from '../../Components/Hooks/useAxios';

const AddBooks = () => {
    const axiosBasic = useAxios()

    const handleAddBook = e=>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const author_name = form.author.value
        const image = form.image.value
        const category = form.category.value
        const rating = form.rating.value
        const quantity = form.quantity.value
        const short_description = form.description.value
        const content = form.content.value
        const bookInfo = {name,author_name,image,category,rating,quantity,short_description,content}
        
        axiosBasic.post('/addBook',bookInfo)
        .then(res=>{
            const insertedId = res.data.insertedId
            if(insertedId){
                swal("Congratulations!", "Book added successfully!", "success");
                form.reset()
            }
        })
    }
    
    return (
        <div>
        <div className="text-center mt-3">
            <h1 className="text-lg font-medium md:text-2xl md:font-semibold ">Add product</h1>
        </div>
        <div className="w-[95%] md:w-[80%] mx-auto my-7">
        <form onSubmit={handleAddBook} className=" bg-slate-200 p-5 rounded">
           <div className="w-[85%] mx-auto space-y-2">
           <div className="md:flex  ">
                <div className="w-[100%]">
                <h1 className="">Name:</h1>
                <input required type="text" name="name" className="rounded p-1 w-[70%] lg:w-[65%]" />
                </div>

                <div className="w-[100%] ">
                <h1>Author Name:</h1>
                <input required type="text" name="author" className="rounded p-1 w-[70%] lg:w-[65%]" />
                </div>
            </div>
           <div className="md:flex">
                <div className="w-[100%]">
                <h1 className="">Category:</h1>
                <input required placeholder='1st letter must be in uppercase' type="text" name="category" className="rounded p-1 w-[70%] lg:w-[65%]" />
                </div>

                <div className="w-[100%] ">
                <h1>Image:</h1>
                <input required type="text" name="image" className=" rounded p-1 w-[70%] lg:w-[65%]" />
                </div>
            </div>
           <div className="md:flex ">
                <div className="w-[100%]">
                <h1 className="">Quantity:</h1>
                <input required type="text" name="quantity" className="rounded p-1 w-[70%] lg:w-[65%]" />
                </div>

                <div className="w-[100%] ">
                <h1>Rating:</h1>
                <input required type="text" name="rating" className="rounded p-1 w-[70%] lg:w-[65%] " />
                </div>
            </div>
           
           </div>
           <div className=" mt-3 w-[65%] md:w-[55%] lg:w-[68%] md:mx-auto lg:flex block gap-3 ">
                <div>
                <h1 className='text-start'>Description</h1>
                <textarea required name="description"  cols="40" rows="5"></textarea>
                </div>
                <div>
                <h1 className='text-start'>Content</h1>
                <textarea  required name="content" id="" cols="40" rows="5"></textarea>
                </div>
           </div>
           <div className="text-center ">
                <input type="submit" className="border-[2px] text-white font-medium bg-gradient-to-r from-cyan-400 to-blue-500 px-2 w-[50%] my-3 mx-auto " value="Add" />
           </div>

        </form>
        </div>
    </div>
    );
};

export default AddBooks;