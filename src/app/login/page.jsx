import Logo from '@/components/Logo'
import ThemeToggleButton from '@/components/ThemeToggleButton'
import { Switch } from '@/components/ui/switch'
import FeatureSlider from '@/features/login/components/FeatureSlider'
import Form from '@/features/login/components/Form'
import Image from 'next/image'

const page = () => {
    return (
        <div className='relative h-screen flex w-full'>
            <Image src="/login_image.jpg" fill className="object-center object-cover h-full w-full" />
            <div className='relative flex-1 h-full overflow-y-auto  backdrop-blur-md bg-primary-foreground/90 dark:bg-black/90'>
                <div className='lg:py-16 py-8 xl:px-32 md:px-16 px-8'>
                    <div className="flex justify-between items-center">
                        <Logo />
                        <div>
                            <ThemeToggleButton />
                        </div>
                    </div>
                    <div className='mt-8'>
                        <h1 className='text-3xl font-bold dark:text-white'>Welcome</h1>
                        <p className='mt-2 text-black/50 dark:text-white'>Login to get started</p>
                    </div>
                    <div className='mt-8 w-full'>
                        <Form />
                    </div>
                </div>
            </div>
            <div className='relative flex-1 h-full lg:block hidden bg-primary-foreground/75 dark:bg-black/75'>
                <div className="relative w-full h-full">
                    <div className="flex justify-center items-center h-full w-full">
                        <FeatureSlider />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
