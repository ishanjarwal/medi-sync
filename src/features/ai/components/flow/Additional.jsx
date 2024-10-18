import React from 'react'

const Additional = ({ formData, setFormData }) => {
    return (
        <div>
            <div className='flex flex-col gap-4'>
                <label className='dark:text-white' >Any additional notes</label>
                <textarea
                    value={formData.notes}
                    onChange={(e) => {
                        setFormData(prev => ({ ...prev, notes: e.target.value }))
                    }}
                    className='border border-input rounded-xl focus:ring-2 ring-primary outline-none dark:bg-black resize-none h-32 dark:text-white text-xl p-4'
                />
            </div>
        </div>
    )
}

export default Additional
