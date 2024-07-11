import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Feedback = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form data submitted:', formData);
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <div className="container mt-5 p-3 bg-info bg-opacity-50">
            <header className="text-center">
                <h1>Get In Touch</h1>
            </header>
            <main>
                <section className="feedback-form text-center px-5">
                    <h2>Send Us a Message</h2>
                    <p className='px-5'> Get in touch with us! Whether you have questions, feedback, or just want to say hello, we're here to assist you. Fill out the form below, and our team will respond to you as soon as possible. Your satisfaction is our priority.</p>
                    <form onSubmit={handleSubmit}>
                        <div className='row'>
                            <div className='col-6'>
                                <div className="mb-3">

                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder='Full name '
                                    />
                                </div>
                                <div className="mb-3">

                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder='Email address '
                                    />
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className="mb-3">

                                    <input
                                        type="text"
                                        className="form-control"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        placeholder='Phone number'
                                    />
                                </div>
                                <div className="mb-3">

                                    <input
                                        type="text"
                                        className="form-control"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        placeholder='Subject '
                                    />
                                </div>

                            </div>
                        </div>
                        <div className="mb-3">
                            
                            <textarea
                                className="form-control"
                                id="message"
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder='Message'
                            ></textarea>
                        </div>


                        <button type="submit" className="btn  btn-danger hoverbtn">Submit <i className='pi pi-arrow-right'></i></button>
                    </form>
                </section>
            </main>
        
        </div>
    );
};

export default Feedback;