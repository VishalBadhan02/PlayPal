const { default: AppLayout } = require("../../layouts/appLayout")

const Score_card = () => {
    return (

        <div className="conatainer-fluid" >
            <div className="row py-3">
                <div className="col-9 p-4 px-3">
                    <div className="row border mx-1 rounded-2 m-0 bg-primary">
                        <div className="col-4 p-0">
                            <div className="row">
                                <div className="col-10 pe-0">
                                    <div className="bg-info p-2 mb-1">Player A</div>
                                    <div className="bg-info p-2">Player B</div>
                                </div>
                                <div className="col-2 p-0">
                                    <div className="bg-info p-2 mb-1 d-flex rounded-end-4">
                                        50
                                        <div><span style={{ fontSize: 12 }}>(25)</span></div>
                                    </div>
                                    <div className="bg-info p-2 d-flex rounded-end-4">
                                        25
                                        <div><span style={{ fontSize: 12 }}>(10)</span></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-4 text-center align-items-center text-white d-flex justify-content-center position-relative">
                            <div className="col-4">
                                <button className="btn btn-info">Team A</button>
                            </div>
                            <div className="col-4">
                                <div className="fs-2 fw-bold d-flex align-items-center justify-content-center bg-warning rounded-pill position-absolute" style={{ width: 120, height: 120, top: -20, left: 120 }}>

                                    <p className="fw-5 px-1"><span className="fs-5 fw-normal">(20. <span>3)</span> </span></p>
                                </div>
                            </div>
                            <div className="col-4 text-end">
                                <button className="btn btn-danger ">Team B</button>
                            </div>

                        </div>
                        <div className="col-4 p-0 text-white ">
                            <div className="bg-danger p-2 rounded-start-4 mb-1">
                                Bowler
                            </div>
                            <div className=" p-2 rounded-start-4 ">

                            </div>
                        </div>
                    </div>
                    <div className="row-1 px-1 py-5 gap-3 d-flex justify-content-center">
                        <table className="my-3 w-50" >
                            <thead className="border-1 border-body-tertiary ">
                                <tr className="bg-warning ">
                                    <th>Batsman</th>
                                    <th>Run</th>
                                    <th>Ball</th>
                                    <th>6s</th>
                                    <th>4s</th>
                                    <th>Run rate</th>
                                    <th />
                                </tr>
                            </thead>
                            <tbody className="border-1 border-secondary">
                                <tr>
                                    <td>Vishal</td>
                                    <td>
                                        100
                                    </td>
                                    <td>
                                        50
                                    </td>
                                    <td>
                                        5
                                    </td>
                                    <td>
                                        5
                                    </td>
                                    <td>
                                        153.0
                                    </td>
                                </tr>
                                <tr>
                                    <td>Tanvir</td>
                                    <td>
                                        100
                                    </td>
                                    <td>
                                        50
                                    </td>
                                    <td>
                                        5
                                    </td>
                                    <td>
                                        5
                                    </td>
                                    <td>
                                        153.0
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="my-3 w-50" >
                            <thead className="border-1 border-body-tertiary ">
                                <tr className="bg-warning ">
                                    <th>Bowler</th>
                                    <th>Score</th>
                                    <th>Ball</th>

                                    <th>W</th>
                                    <th>ECON</th>
                                    <th />
                                </tr>
                            </thead>
                            <tbody className="border-1 border-secondary">
                                <tr>
                                    <td>Vishal</td>
                                    <td>
                                        100
                                    </td>
                                    <td>
                                        50
                                    </td>
                                    <td>
                                        5
                                    </td>
                                    <td>
                                        5
                                    </td>

                                </tr>
                                <tr>
                                    <td>Tanvir</td>
                                    <td>
                                        100
                                    </td>
                                    <td>
                                        50
                                    </td>
                                    <td>
                                        5
                                    </td>
                                    <td>
                                        5
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                    <div className="row-1 border border-info rounded-3 p-3 ">
                        <div className="border rounded-3 p-2 mb-2">
                            <label htmlFor="" className="fw-bold">Over wise score :</label>
                        </div>
                        <div className="border rounded-3 p-2 d-flex justify-content-evenly">
                            <div className>
                                <input type="radio" name="" id="" className="p-2" />
                                &nbsp;
                                <label htmlFor="">Wide</label>
                            </div>
                            <div className>
                                <input type="radio" name="" id="" className="p-2" />
                                &nbsp;
                                <label htmlFor="">No Ball</label>
                            </div>
                            <div className>
                                <input type="radio" name="" id="" className="p-2" />
                                &nbsp;
                                <label htmlFor="">Byes </label>
                            </div>
                            <div className>
                                <input type="radio" name="" id="" className="p-2" />
                                &nbsp;
                                <label htmlFor="">Leg Byes</label>
                            </div>
                            <div className>
                                <input type="radio" name="" id="" className="p-2" />
                                &nbsp;
                                <label htmlFor="">Wicket</label>
                            </div>
                            <div className>
                                <input type="radio" name="" id="" className="p-2" />
                                &nbsp;
                                <label htmlFor="">Wide</label>
                            </div>
                            <div className="">
                                <button className="btn btn-md btn-info me-2" >Retire</button>
                                <button className="btn btn-md btn-info ">Swap Batsman</button>
                            </div>

                        </div>
                        <div className="row-1 d-flex">
                            <div className="col-3 p-2 text-center">
                                <div className="border rounded-3 p-2">
                                    <button className="btn form-control btn-primary mb-1">Undo</button> <br />
                                    <button className="btn form-control btn-primary mb-1">PartnerShip</button> <br />
                                    <button className="btn form-control btn-primary ">Extras</button>
                                </div>
                            </div>
                            <div className="col-9 p-1 pt-2">
                                <div className="border p-3 rounded-3 d-flex justify-content-evenly">
                                    <button className="btn rounded-pill border me-3">1</button>
                                    <button className="btn rounded-pill border me-3">2</button>
                                    <button className="btn rounded-pill border me-3">3</button>
                                    <button className="btn rounded-pill border me-3">4</button>
                                    <button className="btn rounded-pill border me-3">5</button>
                                    <button className="btn rounded-pill border me-3">6</button>
                                    <button className="btn rounded-pill border me-3"></button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="col-3 py-4 px-1 ">
                    <div className="bg-secondary rounded h-100 bg-opacity-25 py-2">
                    <div className="row-1 d-flex ">
                        <div className="col-5 text-center">
                            <button className="btn btn-info">Team A</button>
                        </div>
                        <div className="col-2 d-flex align-items-center justify-content-center">
                            <button className="btn btn-primary" >vs</button>
                        </div>
                        <div className="col-5 text-center">
                            <button className="btn btn-danger mt-5">Team B</button>
                        </div>
                    </div>
                    </div>
                    

                </div>
            </div>
        </div>

    )
}

export default Score_card;