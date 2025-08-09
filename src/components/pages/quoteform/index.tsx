import Container from '@/components/common/container'
import SubHeading from '@/components/common/custom-subheading'
import QuotationForm from '@/components/common/quotation-form'
import React from 'react'

const QuoteForm = () => {
  return (
    <div className='py-8'>
       <Container>
        <div className="max-w-7xl space-y-5 mx-auto">
            <div className="flex flex-col py-4 items-center justify-center">
            <SubHeading className='!text-black'>
                Get your <span className='text-primary'>free quote</span> in less than 24 hours
            </SubHeading>
            <p className='text-darkGray'>Modular solutions delivered quickly, tailored to your professional or personal needs.</p>
            </div>
         <div className="p-6 bg-white shadow-2xl rounded-2xl border border-gray-200 max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
                <SubHeading>
                Fill out the form below
            </SubHeading>
            <p>We will get back to you within 24 hours — no commitment required</p>
            </div>
            <QuotationForm/>
         </div>
         <div className="py-5 flex items-center justify-center">
            <h1>500+ completed projects Average rating: ★★★★★</h1>
         </div>
        </div>
       </Container>
    </div>
  )
}

export default QuoteForm