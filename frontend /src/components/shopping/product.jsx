import axios from "axios"
import { useEffect, useState } from "react"

const Product = () => {
    const [product, setProducts] = useState([]);
    const MAX_WORDS_TO_DISPLAY = 15;
    useEffect(() => {
        setProduct()
    }, [])

    const setProduct = async () => {
        const res = await axios.get("http://127.0.0.1:5050/user/getProduct");
        setProducts(res.data)
    }

    const truncateDescription = (text) => {
        const words = text.split(' ');
        if (words.length <= MAX_WORDS_TO_DISPLAY) {
            return text;
        }
        return `${words.slice(0, MAX_WORDS_TO_DISPLAY).join(' ')}...`;
    };
    return (
        <>
            <div className="container-sm p-3">
                <div className="row ">
                    {product && product.map((value, index) => (
                        <div className="col-4 py-2 product" key={index}>
                            <div className="card px-5 pb-2 pt-5 d-felx  text-center" style={{ height: 500 }}>
                                <h4>{value.title}  </h4>
                                <p className="text-secondary">{truncateDescription(value.description)}</p>
                                <div className="text-center d-flex align-items-center justify-content-center" style={{ height: 320 }}>
                                    <img src={value.image} alt="" className=" "
                                        loading="lazy" />
                                </div>

                                <div className="row-sm d-flex py-2">
                                    <div className="col-6 px-2 text-start">
                                        <button className="btn">
                                            <i className="pi pi-indian-rupee text-primary">
                                                {value.price}</i> </button>
                                    </div>
                                    <div className="col-6 px-2 text-end">
                                        <button className="btn border rounded-5 border-2 border-black hoverbtn">
                                            Add to cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}
export default Product 