import { set } from "animejs";
import Cta from "../components/common/Cta";
import PageTitle from "../components/layout/PageTitle";

import "../styles/contact/contact.css"

import React, {useEffect, useState, type FormEvent} from "react";

type Purpose = 
    "Internship" |
    "Freelance Project" |
    "Collaboration" |
    "Other" |
    "";

interface FormData {
    name: string;
    email: string;
    purpose: Purpose;
    message: string;
}

type NotificationType = "success" | "error" | null;

export default function ContactPage() {
   const [formData, setFormData] = useState<FormData> ({
        name: "",
        email: "",
        purpose: "",
        message: "",
   });

   const [error, setError] = useState("");

   const handleChange = (
    e: React.ChangeEvent<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
   ) => {
    const {name, value} = e.target;

    setFormData((prev) => ({
        ...prev,
        [name]: value,
    }));

    setError("");
   };


   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

        if (!formData.name.trim()) {
            setError("Please enter your name.");
            return;
        }

        if(!formData.email.trim()) {
            setError("Please enter your email address.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!emailRegex.test(formData.email)) {
            setError("Please enter a valid email address.");
            return;
        }

        if(!formData.purpose) {
            setError("Please select option.");
            return;
        }

        if(!formData.message.trim()) {
            setError("Please enter your message.");
            return;
        }

        const reciepient = "jacob.johnpaul15@gmail.com";

        const subject = `${formData.purpose} Inquiry from ${formData.name}`;


        const body = `
        Name: ${formData.name}
        Email: ${formData.email}
        Purpose: ${formData.purpose}
        Message: 
        ${formData.message}`.trim();


        const mailtoLink = `mailto:${reciepient}?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;
   };

    return(
        <div className="contact-container">
        <PageTitle pageIndex={3}/>


        {error && (
            <div className="contact-error" role="alert">
                <div className="contact-error-icon">!</div>
                <p>{error}</p>

                <button
                    type="button"
                    className="contact-error-close"
                    onClick={() => setError("")}
                    >
                        x
                    </button>
            </div>
        )}


            <div className="contact-content">
                <div className="contact-form">
                    
                    <div className="contact-form-header">
                        <div className="contact-box-design"/>

                        <span>form.txt</span>
                    </div>

                    <form
                        className="contact-forms"
                        onSubmit={handleSubmit}
                        noValidate
                        >

                            <div className="form-info">
                                <div className=" form-group">
                                <label htmlFor="name">Name</label>

                                    <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter Name"/>
                                </div>
                            
                                <div className="form-group">
                                <label htmlFor="email">Email</label>
                                
                                <input 
                                type="email" 
                                id="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="you@email.com"/>
                                </div>
                            </div>

                            <div className="form-group purpose">
                                <label htmlFor="purpose">What's this about?</label>

                                    <select 
                                    id="purpose" 
                                    name="purpose" 
                                    value={formData.purpose}
                                    onChange={handleChange}
                                    >
                                       <option value="" disabled>
                                        Select type
                                       </option>

                                       <option value="Internship">
                                        Internship
                                       </option>

                                       <option value="Freelance Project">
                                        Freelance Project
                                       </option>

                                        <option value="Collaboration">
                                        Collaboration
                                        </option>

                                        <option value="Others">
                                            Others
                                        </option>
                                    </select>
                            </div>

                            <div className="form-group message">
                                <label htmlFor="message">Message</label>

                                <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell me about your idea..."
                                rows={6}
                                />
                            </div>

                            <button
                            type="submit"
                            className="contact-submit"
                            >
                                Send Message
                            </button>

                    </form>
                </div>
            </div>
        <Cta/>
        </div>
    );
}

