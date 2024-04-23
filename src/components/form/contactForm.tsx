'use client';
//This form is a client component because it uses the useState hook
import React, { useState } from 'react';
import { Input, Textarea } from '@nextui-org/input';
import Button from '../ui/button';

const ContactForm: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // Function to handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Prevent the default form submission

        // I will need to add a function to send email or message to the admin using Supabase

        // Reset form fields after submission
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='relative flex flex-col w-[563px] gap-4 bg-custom-gray rounded-r-2xl rounded-bl-2xl items-center pb-20 pt-6'>
                <div className='flex flex-col gap-2 '>
                    <label htmlFor='name' className="text-muted-foreground text-lg">Name</label>
                    <Input
                        type="text"
                        id="name"
                        placeholder='Enter your name'
                        isRequired
                        className="flex flex-col justify-center h-14 w-[437px] rounded-2xl border border-custom-input-border bg-[#FFFFFF] px-1 pt-3 text-md ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="email" className="text-muted-foreground text-lg">Email</label>
                    <Input
                        type="email"
                        id="email"
                        placeholder='Enter your email address'
                        isRequired
                        className="flex justify-center h-14 w-[437px] rounded-2xl border border-custom-input-border bg-[#FFFFFF] px-1 pt-3 text-md ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="message" className="text-muted-foreground text-lg">Message</label>
                    <Textarea
                        type='text'
                        placeholder='Enter your message here'
                        id="message"
                        isRequired
                        className="flex h-[228px] w-[437px] rounded-2xl border border-custom-input-border bg-[#FFFFFF] px-1 py-3 text-md text-wrap ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
                <Button text='Send' type="submit" className="absolute bottom-6 left-16"/>
            </div>
            
        </form>
    );
};

export default ContactForm;