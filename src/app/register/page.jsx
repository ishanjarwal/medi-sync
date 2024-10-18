import Header from '@/components/Header'
import Logo from '@/components/Logo'
import ThemeToggleButton from '@/components/ThemeToggleButton'
import { Switch } from '@/components/ui/switch'
import FeatureSlider from '@/features/auth/components/FeatureSlider'
import RegisterForm from '@/features/auth/components/RegisterForm'
import Image from 'next/image'

const page = () => {
    return (
        <div className='relative h-screen flex w-full'>
            <Image src="/login_image.jpg" fill className="object-center object-cover h-full w-full" />
            <div className='relative flex-1 h-full overflow-y-auto  backdrop-blur-md bg-primary-foreground/90 dark:bg-black/90 scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-primary dark:scrollbar-track-black primary-foreground scrollbar-track-white'>
                <div className='lg:py-16 py-8 xl:px-32 md:px-16 px-8'>
                    <div>
                        <Header />
                    </div>
                    <div className='mt-8'>
                        <h1 className='text-3xl font-bold dark:text-white'>Welcome</h1>
                        <p className='mt-2 text-black/50 dark:text-white'>Create a new Account</p>
                    </div>
                    <div className='mt-8 w-full'>
                        <RegisterForm />
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
