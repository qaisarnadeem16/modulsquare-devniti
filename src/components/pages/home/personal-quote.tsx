import Container from '@/components/common/container'
import SubHeading from '@/components/common/custom-subheading'
import QuotationForm from '@/components/common/quotation-form'
import React from 'react'
import { FaClock, FaEuroSign, FaHandshakeAngle } from 'react-icons/fa6'

const PersonalQuote = () => {
  return (
    <div className='py-10'>
      <Container className='md:!px-0'>
        <div
          className="relative min-h-[80vh] w-full bg-cover bg-center"
          style={{ backgroundImage: `url(/assets/bgimage.jpg)` }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: '#54748e',
              opacity: 0.5,
              transition: 'background 0.3s,  border-radius 0.3s, opacity 0.3s'
            }}
          />

          <div className="grid md:grid-cols-2 relative max-w-7xl mx-auto  gap-10 grid-cols-1">
           <div className="text-white py-10 px-2">
             <h1 className='text-lg font-medium'>Devis</h1>
            <SubHeading className='!text-white py-6'>
                Would you like a personalized quote?
            </SubHeading>
            <div className="grid grid-cols-2 md:grid-cols-3 py-10 gap-10">
                 <div className="flex gap-5 flex-col items-center text-center">
                    <span>
                        <FaClock size={36}/>
                    </span>
                    <SubHeading className='!text-white'>Fast quote</SubHeading>
                    <p className='text-base'>Your quote within 48h max</p>
                </div>
                 <div className="flex gap-5 flex-col items-center text-center">
                    <span>
                        <FaHandshakeAngle  size={36}/>
                    </span>
                   <SubHeading className='!text-white'>Consulting</SubHeading>
                    <p className='text-base'>Support with your project study</p>
                </div>
                <div className="flex gap-5 flex-col items-center text-center">
                    <span>
                     <FaEuroSign  size={36}/>
                    </span>
                   <SubHeading className='!text-white'>Rates</SubHeading>
                    <p className='text-base'>The most competitive prices in Mauritius</p>
                </div>
            </div>
           </div>
           <div className="">
                <QuotationForm/>
           </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default PersonalQuote
