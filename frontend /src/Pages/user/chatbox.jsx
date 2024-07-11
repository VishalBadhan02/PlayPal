import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ChatBox = ({ friendId }) => {
    const token = localStorage.getItem("token");
    const [data, setData] = useState({});
    const [messages, setText] = useState("");
    const [userMessages, setUserMessages] = useState([]);
    const [friendMessages, setFriendMessages] = useState([]);
    const [allMessages, setAllMessages] = useState([]);
    const [user, setUser] = useState({});
    const [isRecieved, setIsRecieved] = useState(false)

    useEffect(() => {
        setChatfriend();
        handleShowMessage();
        handleRecievedMessage();
        getUserId();
    }, [friendId]);

    useEffect(() => {
        mergeMessages();
    }, [userMessages, friendMessages]);

    const setChatfriend = async () => {
        try {
            const res = await axios.get("http://127.0.0.1:5050/user/getChatFriend/" + friendId);
            setData(res.data);
        } catch (err) {
            toast.error("Error in chatbox: " + (err.response?.data?.message || err.message));
        }
    };

    const getUserId = async () => {
        try {
            axios.defaults.headers.common["Authorization"] = token;
            const res = await axios.get("http://127.0.0.1:5050/user/getUserId");
            setUser(res.data.data);
        } catch (err) {
            toast.error(err.response.data.message);
        }
    };

    const handleSendMessage = async (event) => {
        event.preventDefault();
        try {
            axios.defaults.headers.common["Authorization"] = token;
            const data = { messages, friendId };
            const res = await axios.post("http://127.0.0.1:5050/user/postMessage", data);
            if (res.data.status === true) {
                setText("");
                handleShowMessage();
                setIsRecieved(!isRecieved)
            }
        } catch (err) {
            toast.error("Error in sending message: " + (err.response?.data?.message || err.message));
        }
    };

    const handleShowMessage = async () => {
        try {
            const res = await axios.get("http://127.0.0.1:5050/user/getChat/" + friendId);
            setUserMessages(res.data);
        } catch (err) {
            toast.error("Error in fetching user messages: " + (err.response?.data?.message || err.message));
        }
    };

    const handleRecievedMessage = async () => {
        try {
            axios.defaults.headers.common["Authorization"] = token;
            const res = await axios.get("http://127.0.0.1:5050/user/getRecievedMessages");
            setFriendMessages(res.data);
        } catch (err) {
            toast.error("Error in fetching friend messages: " + (err.response?.data?.message || err.message));
        }
    };

    const mergeMessages = () => {
        const combinedMessages = [...userMessages, ...friendMessages].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        console.log(combinedMessages)
        setAllMessages(combinedMessages);
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleSendMessage(event);
        }
    };

    return (
        <div className="col-8 border rounded-2 border-warning position-relative bg-secondary bg-opacity-25">
            <div className="row-1 d-flex p-2 bg-warning gap-2 mb-1">
                <div className="col-1">
                    <img
                        src={require("../../assets/1711859084821_kz1JoJrA8g7c.jpg")}
                        style={{ width: 50 }}
                        alt="pi pi-user"
                        className="rounded-circle border border-1 border-secondary"
                    />
                </div>
                <div className="col-3">
                    <p className="m-0 fw-bold">{data.userName}</p>
                    <p className="m-0 px-1" style={{ fontSize: 12 }}>Defenders</p>
                </div>
                <div className="col-8 px-4 d-flex align-items-center justify-content-end">
                    <i className="pi pi-phone px-2 fs-5"></i>
                    <i className="pi pi-times fs-5"></i>
                </div>
            </div>
            <div className="chat-messages" style={{ height: 360, overflow: "scroll" }}>
                {allMessages.map((value, index) => (
                    <div
                        key={index}
                        className={`d-flex   ${value.user_id === data._id ? 'text-black justify-content-start' : 'justify-content-end '}`}
                        style={{ margin: 2 }}
                    >
                        {value.user_id === user && <span className="p-2 bg-warning bg-light rounded-2 message-content ">{value.messages} <div className="text-secondary text-end" style={{ fontSize: 12 }}>{(new Date(value.createdAt).toLocaleString("en-US", { hour: 'numeric', hour12: true, minute: 'numeric' }))}</div> </span>}

                        {value.user_id === data._id && <span className="p-2 bg-light rounded-2 message-content ">{value.messages} <div className="text-secondary text-end" style={{ fontSize: 12 }}>{(new Date(value.createdAt).toLocaleString("en-US", { hour: 'numeric', hour12: true, minute: 'numeric' }))}</div></span>}
                        <br />
                    </div>
                ))}
                {isRecieved && <div className=" px-2 align-items-top d-flex justify-content-end">
                    <span className="text-secondary" id="conformation" style={{ fontSize: 10 }}>Recieved</span>
                </div>}
            </div>
            <div className="row-1 d-flex bg-warning z-1 bottom-0 p-3 px-0 position-absolute">
                <div className="col-1 d-flex align-items-center px-2">
                    <span data-icon="smiley">
                        <svg
                            viewBox="0 0 24 24"
                            height={30}
                            width={30}
                            preserveAspectRatio="xMidYMid meet"
                            className="x23j0i4 xd7y6wv"
                            version="1.1"
                            x="0px"
                            y="0px"
                            enableBackground="new 0 0 24 24"
                        >
                            <title>smiley</title>
                            <path
                                fill="currentColor"
                                d="M9.153,11.603c0.795,0,1.439-0.879,1.439-1.962S9.948,7.679,9.153,7.679 S7.714,8.558,7.714,9.641S8.358,11.603,9.153,11.603z M5.949,12.965c-0.026-0.307-0.131,5.218,6.063,5.551 c6.066-0.25,6.066-5.551,6.066-5.551C12,14.381,5.949,12.965,5.949,12.965z M17.312,14.073c0,0-0.669,1.959-5.051,1.959 c-3.505,0-5.388-1.164-5.607-1.959C6.654,14.073,12.566,15.128,17.312,14.073z M11.804,1.011c-6.195,0-10.826,5.022-10.826,11.217 s4.826,10.761,11.021,10.761S23.02,18.423,23.02,12.228C23.021,6.033,17.999,1.011,11.804,1.011z M12,21.354 c-5.273,0-9.381-3.886-9.381-9.159s3.942-9.548,9.215-9.548s9.548,4.275,9.548,9.548C21.381,17.467,17.273,21.354,12,21.354z  M15.108,11.603c0.795,0,1.439-0.879,1.439-1.962s-0.644-1.962-1.439-1.962s-1.439,0.879-1.439,1.962S14.313,11.603,15.108,11.603z"
                            ></path>
                        </svg>
                    </span>
                </div>
                <div className="col-8">
                    <input
                        type="text"
                        placeholder="Message..."
                        className="form-control"
                        value={messages}
                        onChange={(e) => setText(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                </div>
                <div className="col-2 d-flex align-items-center fs-5">
                    <button className="btn border-0" onClick={handleSendMessage}>
                        <i className="pi pi-send px-3"></i>
                    </button>
                    <button className="btn border-0">
                        <i className="pi pi-microphone"></i>
                    </button>
                    <button className="btn border-0">
                        <i className="pi pi-ellipsis-v px-3"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatBox;
