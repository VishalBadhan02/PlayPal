const Filter = () => {
    return (<>
        <div className="container">
            <div className="row-1 py-2 bg-light mt-2 rounded-2 px-2">
                <div className=" d-flex justify-content-evenly gap-2 ">
                    <button className="btn border bg-white">
                        <i className="pi pi-filter "></i>
                        Filter</button>
                    <button className="btn border bg-white">
                        <i className="pi pi-category "></i>
                        Category</button>
                    <select name="" className="from-control border-0 px-2" id="">
                        <option value="">All</option>
                    </select>

                    <input type="Search" className="form-control w-75" placeholder="Search Product" name="" id="" />

                    <label htmlFor="">Points: </label>
                </div>

            </div>
        </div>

    </>
    )
}

export default Filter
