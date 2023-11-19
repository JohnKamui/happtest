import { Icons } from '@/components/Icons'
import UserAuthForm from '@/components/UserAuthForm'
import Link from 'next/link'

const SignIn = () => {
  return (
    <div className='container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]'>
      <div className='flex flex-col space-y-2 text-center'>
        <Icons.logo className='mx-auto h-6 w-6' />
        <h1 className='text-2xl font-semibold tracking-tight'>Bem-Vindo Novamente</h1>
        <p className='text-sm max-w-xs mx-auto'>
          Continuando, Você Está prestes a configurar uma Conta No Happ
          e Aceitar Nossos Termos De Condição.
        </p>
      </div>
      <UserAuthForm />
      <p className='px-8 text-center text-sm text-muted-foreground'>
        Novo No Happ?{' '}
        <Link
          href='/sign-up'
          className='hover:text-brand text-sm underline underline-offset-4'>
          Registrar
        </Link>
      </p>
    </div>
  )
}

export default SignIn
