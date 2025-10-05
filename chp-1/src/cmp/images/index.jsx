import {useDispatch, useSelector} from 'react-redux';
import {removeImage} from '../../redux/slices/images';

const Images = ()=>{
    const dispatch = useDispatch();

    const {images} = useSelector(response=>response);
    return (
        <div className="p-16">
            <div className="grid grid-cols-4 gap-6">
                {
                    images.map((item,index)=>(
                        <img 
                            key={index}
                            src={item}
                            alt={item}
                            onClick={()=>dispatch(removeImage(index))}
                        />
                    ))
                }
            </div>
        </div>
    )
}
export default Images;