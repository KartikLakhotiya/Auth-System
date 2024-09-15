import React, { useState } from 'react'
import { motion } from 'framer-motion';
import Input from '../components/Input';
import { Lock, Mail, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import PasswordStrengthMeter from '../components/PasswordStrengthMeter';
const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = (e) => {
        e.preventDefault();
    }
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='max-w-md w-full bg-gray-900 bg-opacity-5 backdrop-filter backdrop-blur-2xl rounded-2xl shadow-xl'
        >
            <div className='p-8'>
                <h2 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text'>
                    Create Account
                </h2>
                <form onSubmit={handleSignup}>
                    <Input
                        icon={User}
                        type='text'
                        placeholder='Enter Full Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Input
                        icon={Mail}
                        type='email'
                        placeholder='Enter Email Address'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        icon={Lock}
                        type='password'
                        placeholder='Enter Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {/* Password Strength Checker */}
                    <PasswordStrengthMeter password={password} />
                    <motion.button
                        className='mt-5 w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white 
						font-bold rounded-lg shadow-lg hover:from-green-600
						hover:to-emerald-700 focus:outline-none
						 focus:ring-offset-gray-900 transition duration-200'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        type='submit'
                    // disabled={isLoading}
                    >
                        {/* {isLoading ? <Loader className=' animate-spin mx-auto' size={24} /> : "Sign Up"} */}
                        Sign Up
                    </motion.button>
                </form>
            </div>
            <div className='px-8 py-4 bg-gray-900 bg-opacity-50 flex justify-center rounded-lg'>
                <p className='text-sm text-gray-400'>
                    Already have an account?{" "}
                    <Link to={"/login"} className='text-green-400 hover:underline'>
                        Login
                    </Link>
                </p>
            </div>
        </motion.div>
    )
}

export default Signup