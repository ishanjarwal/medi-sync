import React from 'react'

const Description = ({ formData, setFormData }) => {
    return (
        <div>
            <div className='flex flex-col gap-4'>
                <label className='dark:text-white' >Describe your problems/symptoms.</label>
                <textarea
                    value={formData.description}
                    onChange={(e) => {
                        setFormData(prev => ({ ...prev, description: e.target.value }))
                    }}
                    className='rounded-xl border border-input focus:ring-2 ring-primary outline-none dark:bg-black resize-none h-32 dark:text-white text-xl p-4'
                />
            </div>
        </div>
    )
}

export default Description
