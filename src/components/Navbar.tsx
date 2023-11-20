import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { Icons } from './Icons'
import { buttonVariants } from './ui/Button'
import { UserAccountNav } from './UserAccountNav'
import SearchBar from './SearchBar'

const Navbar = async () => {
  const session = await getServerSession(authOptions)
  return (
    <div className='fixed top-0 inset-x-0 h-fit bg-zinc-100 border-b border-zinc-300 z-[10] py-2'>
      <div className='container max-w-7xl h-full mx-auto flex items-center justify-between gap-2'>
        {/* logo */}
        <Link href='/' className='flex gap-2 items-center'>
         <img
             src="https://media.discordapp.net/attachments/1175489244165312593/1175812393763356806/gggghgjh.png?ex=656c97a0&is=655a22a0&hm=e9990498057ffa88dc57c69e22e27e2d9e3e5f0cb17e245ac091cf82e8b54396&="
             alt="Descrição da Imagem"
             style={{ width: '80px', height: '80px' }}
         />

          <p className='hidden text-zinc-700 text-sm font-medium md:block'>NuKe</p>
        </Link>

        {/* search bar */}
        <SearchBar />

        {/* actions */}
        {session?.user ? (
          <UserAccountNav user={session.user} />
        ) : (
          <Link href='/sign-in' className={buttonVariants()}>
            Login
          </Link>
        )}
      </div>
    </div>
  )
}

export default Navbar
