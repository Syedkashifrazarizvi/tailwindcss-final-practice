import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
<div className="flex justify-center  bg-gray-300">
<div className='mx-4 order-last'>
<Image src="/image/profilePic.jpeg" width={100} height={100} alt="kashif pic" />
</div>
<div className='mx-4 self-center text-center'>
<h1 className='text-6xl font-bold text-blue-700'>Syed Kashif Raza Rizvi</h1>
<h2 className='text-3xl font-semibold text-blue-900'>Quater 2 Blockchain Online</h2>
<button className='my-4 px-4 py-2 border-2 border-black  rounded-lg
text-white bg-blue-500'>Learn More</button>
</div>
</div>
  )
}
