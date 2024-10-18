import Authenticated from "@/components/Authenticated"
import Header from "@/components/Header"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import ListItem from "@/features/dashboard/components/ListItem"

const page = () => {
    return (
        <Authenticated>
            <div className="min-h-screen bg-card dark:bg-black/90 lg:p-16 md:p-8 p-4" >
                <Header />
                <div className='mt-8'>
                    <div className='p-8 bg-primary-foreground dark:bg-black rounded-xl flex items-center lg:flex-row flex-col lg:gap-8 gap-4'>
                        <div>
                            <Avatar className="h-24 w-24">
                                <AvatarImage src="https://avatars.githubusercontent.com/u/129817762?v=4" />
                                <AvatarFallback>IJ</AvatarFallback>
                            </Avatar>
                        </div>
                        <div>
                            <h1 className='dark:text-white font-bold text-3xl  lg:text-start text-center'>Welcome Ishan Jarwal</h1>
                            <p className='dark:text-white/50 lg:text-start text-center'>Manage your appointments and here</p>
                        </div>
                    </div>
                </div>
                <div className='mt-8'>
                    <div className="grid lg:grid-cols-3 gap-8">
                        {[1].map((item, idx) => (
                            <ListItem />
                        ))}
                    </div>
                </div>
            </div>
        </Authenticated>
    )
}

export default page
