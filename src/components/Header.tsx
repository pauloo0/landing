import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className='sticky inset-0 top-0 z-50 w-full border-b border-gray-800 bg-gray-950 bg-opacity-95 backdrop-blur'>
      <div className='container flex items-center justify-between h-16 px-4 mx-auto'>
        <a href='/' className='text-xl font-bold text-lime-500'>
          TraynLab
        </a>
        <nav className='items-center hidden gap-8 text-gray-300 md:flex'>
          <a href='#features' className='transition-colors hover:text-lime-500'>
            Funcionalidades
          </a>
          <a href='#pricing' className='transition-colors hover:text-lime-500'>
            Preços
          </a>
        </nav>
        <a href='#pricing'>
          <Button className='px-6 font-semibold transition-colors rounded-full cursor-pointer'>
            Começar
          </Button>
        </a>
      </div>
    </header>
  )
}
