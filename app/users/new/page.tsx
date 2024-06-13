'use client'

import { useRouter } from 'next/navigation'

const NewUserPage = () => {
    const router = useRouter();
  return (
    <div 
        className='btn btn-primary'
        onClick={() => {router.push("/users")}}
    >
        Create
    </div>
  )
}

export default NewUserPage
