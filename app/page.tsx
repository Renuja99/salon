import Image from 'next/image'
import { options } from "./api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"

export default function Home() {
  return (
    <div className='pt-24'>Hello from Sapelka Beauty Salon</div>
  )
}
