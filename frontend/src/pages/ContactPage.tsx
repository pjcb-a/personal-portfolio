import Cta from "../components/common/Cta";
import PageTitle from "../components/layout/PageTitle";
import { SocialIcons } from "../data/socials";

import "../styles/contact/contact.css"

import React, { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import Button from "../components/common/Button";

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

// type NotificationType = "success" | "error" | null;

const socialActions = SocialIcons.filter((item) =>
    ["LinkedIn", "Github", "View Resume"].includes(item.id),
);


const contactInfo = [
    {
        id: "Email",
        data: "jacob.johnpaul15@gmail.com"
    },
    {
        id: "Location",
        data: "Naga City, Camarines Sur, Philippines"
    },
    {
        id: "Response Time",
        data: "Usually within 1-2 days"
    }
]

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

        const recipient = "jacob.johnpaul15@gmail.com";

        const subject = `${formData.purpose} Inquiry from ${formData.name}`;


        const body = `
        Name: ${formData.name}
        Email: ${formData.email}
        Purpose: ${formData.purpose}
        Message: 
        ${formData.message}`.trim();


        const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
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

            <section className="contact-content">
                <section className="contact-form">
                    
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
                                    <div className="container-icon">
                                        <ArrowUpRight/>
                                    </div>
                                    </button>
                         </form>
                     </section>

                <section className="contact-form">
                    <div className="contact-form-header">
                        <div className="contact-box-design"/>

                        <span>contact_info.txt</span>
                    </div>

                    <div className="contact-info">

                        <div className="avail">
                            <div className="avail-box"/>
                            <span>Currently Available</span>
                        </div>

                                {contactInfo.map((contact) => (
                                    <div className="contact-info-section" key={contact.id}>
            
                                        <div className="info-section-title">
                                            <h3>{contact.id}</h3>
                                        </div>

                                        <div className="info-section-text">
                                            <p> {contact.data} </p>
                                        </div>
                                    </div>
                                ))}    

                                <div className="info-section-line"/>            

                    </div>

                    <div className="info-section-actions">
                            {socialActions.map((item) => {
                                return (
                                    <div className="actions">
                                    <Button
                                        label={item.label}
                                        href={item.href}
                                        variant="outline"
                                        icon= {<ArrowUpRight/>}
                                        external={false}
                                        />
                                    </div>
                                );
                            })}
                        </div>

                </section>

            </section>
            <Cta/>
        </div>
    );
}

