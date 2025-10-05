import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {addImage, removeImage, resetImage} from '../../redux/slices/images';

const Home = ()=>{
    const dispatch = useDispatch();
    const {images} = useSelector(response=>response);

    const onSubmit = (e)=>{
        e.preventDefault();
        const url = e.target[0].value;
        dispatch(addImage(url));
    }

    return (
        <div className="bg-amber-50 min-h-screen flex items-center justify-center">
            <div className="flex flex-col gap-y-6 w-6/12">
                <h1 className="text-6xl font-bold text-violet-600">Redux App</h1>
                <div>
                    <form className="flex flex-col gap-y-4" onSubmit={onSubmit}>
                        <input 
                            type="url" 
                            required 
                            className="border border-violet-600 rounded-lg w-full p-3" 
                            placeholder="Enter url here"
                        />
                        <div className="flex items-center gap-x-3">
                            <button className="bg-violet-600 text-white rounded px-6 py-2.5">SUBMIT</button>
                            <Link to="images" className="text-gray-500 font-semibold">View</Link>
                            <button type="button" className="bg-violet-600 text-white rounded px-6 py-2.5" onClick={()=>dispatch(resetImage())}>RESET</button>
                        </div>
                        {
                            images.map((item,index)=>(
                                <img src={item} key={index} width="400" alt={item} onClick={()=>dispatch(removeImage(index))} /> 
                            ))
                        }
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Home;