import React, { useState } from 'react'
import styles from './EmailForm.module.scss'
import { sendContactForm } from "../../../helper/contact"

const EmailForm = () => {
    const form: any = React.useRef();

    // const [buttonName, setButtonName] = React.useState("Send message")
    const [isSuccess, setIsSuccess] = useState(false);
    const [isFailure, setIsFailure] = useState(false);

    // sendmail by nodemailer
    const onSubmit = async () => {
       
        let values = {
            name : form.current.from_name.value,
            subject : form.current.subject.value,
            email : form.current.user_email.value,
            message : form.current.message.value,
        }
        
        await sendContactForm(values)
            .then((successData) => {
                // console.log('send mail success - from contact us design -> ',successData)
                if (successData.status) {
                    setIsSuccess(true)
                    setTimeout(() => {
                        setIsSuccess(false);
                    }, 10000); 
                } else {
                    setIsFailure(true)
                    setTimeout(() => {
                        setIsFailure(false);
                    }, 10000);
                }                
            }, (error) => {
                setIsFailure(true)
                setTimeout(() => {
                    setIsFailure(false);
                }, 10000); 
            });
      };

    return (
        <div id="emailForm" className='flex justify-center'>
            <div className='container flex justify-center'>
                <div className={`${styles.mainEmailBox} lg:py-[3rem]`}>
                    <div className={`max-md:flex max-md:justify-center lg:px-28`}>
                        <form ref={form} className='grid'>
                            <div className='contents'>
                                <div className={`${styles.inputBox} flex max-sm:flex-col`}>
                                    <label className=''> Name </label>
                                    <input type="text" name="from_name" placeholder='Enter your name' className='' required />
                                </div>
                                <div className={`${styles.inputBox} flex max-sm:flex-col`}>
                                    <label className=''> Subject </label>
                                    <input type="text" name="subject" placeholder='Enter Subject' className='' required />
                                </div>
                                <div className={`${styles.inputBox} flex max-sm:flex-col`}>
                                    <label className=''> E-mail </label>
                                    <input type="email" name="user_email" placeholder='Add your email' className='' required />
                                </div>
                                <div className={`${styles.inputBox} flex max-sm:flex-col`}>
                                    <label className=''> Message </label>
                                    <textarea name="message" placeholder='Add your message here' className='' required />
                                </div>
                                <div className={` ${styles.emailButton} md:flex md:justify-end`}>
                                    <label className=''> </label>
                                    <div className={` ${styles.emailButtonDiv} py-[1rem] text-center mt-[2rem] flex justify-center`}> {/*w-56*/}
                                        <button className="uppercase flex items-center font-Inter-medium" type='button' onClick={() => onSubmit()}> Send Message
                                        </button>
                                    </div>                                
                                </div>
                                {
                                    isSuccess && 
                                        <div className='bg-green-200 py-4 px-2'> <p className='text-green-600 font-bold text-center'>Mail Sent Successfully!</p> </div> 
                                }

                                {
                                    isFailure &&
                                        <div className='bg-red-200 py-4 px-2'> <p className='text-red-600 font-bold text-center'>Mail is not sent Successfully!</p> </div> 
                                }

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default EmailForm