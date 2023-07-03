"use client"

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Credits from './credits'
import Image from 'next/image'
import errorImage from '../public/icon-error.svg'
import styles from './page.module.scss'

export default function Home() {

            /*---- Input Values ---*/

  const [firstNameValue, setFirstNameValue] = useState('');     // First Name
  const [secondNameValue, setSecondNameValue] = useState('');   // Last Name
  const [emailValue, setEmailValue] = useState('');             // Email
  const [passwordValue, setPasswordValue] = useState('');       // Password

            /*--- Input Validity ---*/

  const [firstNameValid, setFirstNameValid] = useState(true);   // First Name 
  const [secondNameValid, setSecondNameValid] = useState(true); // Last Name
  const [emailValid, setEmailValid] = useState(true);           // Email 
  const [passwordValid, setPasswordValid] = useState(true);     // Password

            /*--- Input Values ---*/

  const firstNameChange = (firstName) => {    // First Name
    setFirstNameValue(firstName.target.value)
  }

  const secondNameChange = (secondName) => {  // Last Name
    setSecondNameValue(secondName.target.value)
  }

  const emailChange = (email) => {            // Email
    setEmailValue(email.target.value)
  }

  const passwordChange = (password) => {      // Password
    setPasswordValue(password.target.value)
  }

            /*--- Email error messages ---*/

  const [emailError, setEmailError] = useState('Look like this is not an email')
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

            /* === |SUBMIT EVENT| === */

  const handleSubmit = (event) => {
    event.preventDefault();

    if (firstNameValue === ''){
      setFirstNameValid(false)
    } else {setFirstNameValid(true)}

    if (secondNameValue === ''){
      setSecondNameValid(false)
    } else {setSecondNameValid(true)}

    if (passwordValue === ''){
      setPasswordValid(false)
    } else {setPasswordValid(true)}

    if(emailValue.match(mailformat)){
        setEmailValid(true)
      } else if (emailValue === '')  {
        setEmailValid(false)
        setEmailError('Email cannot be empty')
      } else {setEmailValid(false)}
      
  }

            /*--- Transition Responsiviness --- */

    const [itemVariants, setItemVariants] =  useState({
      hover: {scale : 1.1},
      tap: {scale : 1},
      })

      useEffect(() => {
        if (window.innerWidth <= 600) {
          setItemVariants(false)
        } else {}
      })


  return (
    <section className={styles.section}>

      <div className={styles.textContent}>
        <h1>Learn to code by watching others</h1>
        <p>See how experienced developers solve problems in real-time. Watching scripted tutorial is great, but understanding how developers think is invaluable</p>
      </div>

      <motion.div
      initial = {{translateX: 1000}}
      animate = {{translateX: 0}}
      transition={{type: "spring", stiffness: 50, duration: 0.5}}
      className={styles.plan}>

        <header className={styles.price}>
          <p><span>Try it free 7 days</span> then $20/mo. thereafter</p>
        </header>

        <main>
          <form onSubmit={handleSubmit}>


            {/*----- FIRST NAME -----*/}
            <input type="text"  id="fn" placeholder='First Name' style={{color: firstNameValid ? 'black' : 'hsl(0, 100%, 74%)', borderColor: firstNameValid ? '' : 'hsl(0, 100%, 74%)'}} onChange={firstNameChange}/>
            <label htmlFor="fn" style={{display: firstNameValid ? 'none' : 'block'}}>First name cannot be empty</label>
            <label htmlFor="fn" style={{display: firstNameValid ? 'none' : 'block'}}>
              <Image
              src={errorImage}
              alt='Error'
              />
            </label>

            {/*----- LAST NAME -----*/}
            <input type="text"  id="sc" placeholder='Last Name' style={{color: secondNameValid ? 'black' : 'hsl(0, 100%, 74%)', borderColor: secondNameValid ? '' : 'hsl(0, 100%, 74%)'}} onChange={secondNameChange}/>
            <label htmlFor="sc"  style={{display: secondNameValid ? 'none' : 'block'}}>Second name cannot be empty</label>
            <label htmlFor="SC"  style={{display: secondNameValid ? 'none' : 'block'}}>
              <Image
              src={errorImage}
              alt='Error'
              />
            </label>

            {/*----- EMAIL -----*/}
            <input type="text"  id="em" placeholder='Email Address' style={{color: emailValid ? 'black' : 'hsl(0, 100%, 74%)', borderColor: emailValid ? '' : 'hsl(0, 100%, 74%)'}} onChange={emailChange}/>
            <label htmlFor="em"  style={{display: emailValid ? 'none' : 'block'}}>{emailError}</label>
            <label htmlFor="em"  style={{display: emailValid ? 'none' : 'block'}}>
              <Image
              src={errorImage}
              alt='Error'
              />
            </label>

            {/*----- PASSWORD -----*/}
            <input type="password"  id="ps" placeholder='Password' style={{color: passwordValid ? 'black' : 'hsl(0, 100%, 74%)', borderColor: passwordValid ? '' : 'hsl(0, 100%, 74%)'}} onChange={passwordChange}/>
            <label htmlFor="ps"  style={{display: passwordValid ? 'none' : 'block'}}>Password cannot be empty</label>
            <label htmlFor="ps"  style={{display: passwordValid ? 'none' : 'block'}}>
              <Image
              src={errorImage}
              alt='Error'
              />
            </label>

            {/*--------- | == | ----------*/}            
            <motion.button 
            variants={itemVariants}
            whileHover='hover'
            whileTap='tap'
            transition={{type: 'spring', stiffness: 300, duration: .5}}
            type="submit">CLAIM YOUR FREE TRIAL</motion.button>
          </form>
          <p>By clicking the button, you are agreeing to our <span>Terms and Services</span></p>
        </main>

      </motion.div>

    <Credits />
    </section>
  )
}
