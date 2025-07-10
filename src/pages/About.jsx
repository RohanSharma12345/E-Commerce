import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>

      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
      <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
      <p>Stranger, this path is not for the faint of heart. Beyond those ruins lie secrets long buried by time... and blood.</p>
      <p>Truth is but a mirror reflecting a thousand faces. In the silence of thought, meaning emerges not from words, but from the spaces between them. The illusion of structure gives comfort to the chaos of creation.</p>
      <b className='text-gray-800'>Our Mission</b>
      <p>System initializing... Loading user modules and configurations. Please wait while core dependencies sync. Generating response protocol and allocating dynamic memory. Placeholder text engaged for UI/UX simulation.</p>
      </div>
      </div>
      
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-800'>This innovative, eco-friendly gadget combines modern design with everyday convenience. Ideal for those on the go, it fits seamlessly into your lifestyle while providing lasting comfort and performance.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-800'>Initializing retail protocol... Parsing product metadata... Cross-referencing consumer preferences... Adaptive pricing engine online. Placeholder content activated. Awaiting user engagement.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-800'>Leverage scalable product alignment to maximize customer-centric KPIs across vertical markets. Synergize frontend ecosystems with backend optimization strategies to disrupt the placeholder paradigm.</p>
        </div>
 
      </div>

      <NewsletterBox/>
      
    </div>
  )
}

export default About
