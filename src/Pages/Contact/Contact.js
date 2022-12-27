import React, { useRef } from 'react';
import { ContactBannerPanel, ContactSection, StyledContactForm } from './ContactStyle';
import emailjs from "@emailjs/browser";
import { contactBanner } from '../../Assets';
import { toast } from 'react-hot-toast';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_4h4ufyi",
                "template_7hk7v4r",
                form.current,
                "HTs7vzUbkC-Gb_rYU"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    console.log("message sent");
                    toast.success('Mail Send Successfully')
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <ContactSection>
            <ContactBannerPanel>
                <img src={contactBanner} alt="" />
            </ContactBannerPanel>
            <StyledContactForm>
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" />
                </form>
            </StyledContactForm>
        </ContactSection>
    );
};

export default Contact;