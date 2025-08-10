import React from 'react'

const Container = ({ children, className, parentStyle }: { className?: string; parentStyle?: string; children: React.ReactNode; }) => {
    return (
        <div className={`w-full flex justify-center ${parentStyle}`}>
            <div className={`max-w-[1780px] w-full  mx-auto px-4 ${className}`}>
                {children}
            </div>
        </div>
    )
}

export default Container
