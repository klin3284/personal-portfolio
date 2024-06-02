"use client"

import React, { useState } from 'react'
import Section from '../index'
import Icon from '../../icons/index'

const Contact = () => {
    return (
        <Section id="contact" title="Contact Me">
            <ContactText />
        </Section>
    )
}

const ContactText = () => {
    const email = process.env.NEXT_PUBLIC_PERSONAL_EMAIL_ADDRESS;
    const [sender, setSender] = useState("");
    const [message, setMessage] = useState("");

    const copyToClipboard = () => {
        if (!email) {
            alert("No email set yet");
        }
        else {
            navigator.clipboard.writeText(email);
            alert("Email copied to clipboard!");
        }
    };

    //TODO: send email using Resend API

    return (
        <div className="flex flex-col items-center">
            <h2 className="font-bold text-xl mb-4">Get in touch with me!</h2>
            <div className="flex justify-between w-full md:w-3/4 lg:w-1/2 xl:w-3/4">
                <div className="w-full flex-col items-center">
                    <textarea className="w-full h-12 border-2 border-gray-300 rounded-lg resize-none bg-gray-700 p-2 mb-4"
                        placeholder="From"
                        value={sender}
                        onChange={e => setSender(e.target.value)}
                    />
                    <textarea className="w-full h-32 border-2 border-gray-300 rounded-lg resize-none bg-gray-700 p-2 mb-4"
                        placeholder="Enter your message here"
                        value={message}
                        onChange={e => setMessage(e.target.value)} />
                </div>
                <div className="flex flex-col items-center ml-4">
                    <b className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4" onClick={copyToClipboard}>
                        <Icon name="Clipboard" size={20} />
                    </b>
                    <b className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Send
                    </b>
                </div>
            </div>
        </div>
    );
}

export default Contact