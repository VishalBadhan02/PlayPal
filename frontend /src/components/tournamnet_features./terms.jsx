import axios from "axios";
import { useEffect, useState } from "react"


const Terms = () => {
    const [data, setData] = useState([])
    const id = localStorage.getItem("tournament_id")


    useEffect(() => {
        setTerms();
    }, [])

    const setTerms = async () => {
        console.log(id)
        const res = await axios.get("http://127.0.0.1:5050/user/getInfo/" + id)
        setData(res.data.eligibility)
    }

    return (
        <>
            <div className="terms-container p-3">
                <h1>Terms and Conditions</h1>
                <p>These terms and conditions govern your participation in the 20-Over Cricket Tournament 2024. By registering for the tournament, you agree to be bound by these terms.</p>

                <h2>1. Eligibility</h2>

                {data && data.map((value, index) => (
                    <div key={index}>
                        <div className="d-flex px-4">
                            <label htmlFor="">Age:</label>
                            <p className="px-1 fw-semibold">{value.age}</p>

                        </div>
                        <div className="d-flex px-4">
                            <label htmlFor="">Proof:</label>
                            <p className="px-1 fw-semibold">{value.proof}</p>

                        </div>

                        <h2>2. Team Composition</h2>
                        <ul>
                            <li>Maximum  players per team.</li>
                            <li>Minimum [[**Number**]] players on the field during a match.</li>
                            <li>All participating players must be registered.</li>
                        </ul>

                        <h2>3. Match Format</h2>
                        <p>[[**Specify format**]] tournament with 20-over matches.</p>
                        <ul>
                            <li>Toss to decide who bats first.</li>
                            <li>Playing conditions follow [[**Specify ruleset**]].</li>
                            <li>Tie-breaking method: [[**Specify method**]].</li>
                        </ul>

                        <h2>4. Conduct and Sportsmanship</h2>
                        <p>Maintain high standards of sportsmanship. Verbal abuse, aggressive behavior, or violence will not be tolerated. Umpires' decisions are final. Breaches of these terms may result in disqualification.</p>

                        <p>**Please note:** This is a sample template and you may need to modify it to fit your specific tournament requirements. It's recommended to consult with a legal professional for any legal implications.</p>
                    </div>

                ))}


            </div>
        </>
    )
}

export default Terms