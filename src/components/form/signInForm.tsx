//the sign in form is not ready
import { Form, useForm } from 'react-hook-form';
import { Input } from '@nextui-org/input';
import Button from '../ui/button';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const FormSchema = z.object({
    email: z.string().min(1, "Email is required").email("Invalid email"),
    password: z.string().min(1, "Password is required").min(8, "Password must have at least 8 characters"),
});

const SignInForm = () => {
    const router = useRouter();
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof FormSchema>) => {
        const signInData = await signIn("credentials", {
            email: values.email,
            password: values.password,
            redirect: false,
        });
        if (signInData && !signInData.error) {
            router.push("/dashboard");
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='w-full'>

            </form>
        </Form>
    );
};

export default SignInForm;