import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-around mt-16 mb-6'>
        <div className='grid grid-cols-4 gap-32'>
            <div className='grid grid-rows-4 grid-flow-col gap-4 text-gray-400'>
                <p>Audio and Subtitle</p>
                <p>Media Center</p>
                <p>Security</p>
                <p>Contact Us</p>
            </div>
            <div className='grid grid-rows-4 grid-flow-col gap-4 text-gray-400'>
                <p>Audio Description</p>
                <p>Investor Relations</p>
                <p>Legal Provision</p>
            </div>
            <div className='grid grid-rows-4 grid-flow-col gap-4 text-gray-400'>
                <p>Help Center</p>
                <p>Jobs</p>
                <p>Cookie Preferences</p>
            </div>
            <div className='grid grid-rows-4 grid-flow-col gap-4 text-gray-400'>
                <p>Gift Card</p>
                <p>Terms of Use</p>
                <p>Corporate Information</p>
            </div>
        </div>
    </div>
  )
}

export default Footer