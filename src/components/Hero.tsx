import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className='w-full px-4 py-20 border-b border-gray-800 md:py-32 bg-linear-to-b from-gray-950 to-gray-900'>
      <div className='container mx-auto text-center'>
        <h1 className='mb-6 text-5xl font-bold md:text-7xl text-balance text-gray-50'>
          <span className='text-lime-500'>Treina pessoas</span> Não folhas de
          Excel
        </h1>
        <p className='max-w-2xl mx-auto mb-12 text-lg text-gray-400 md:text-xl text-balance'>
          Progresso claro para cada cliente. Gestão eficiente para ti.
        </p>
        <div className='flex flex-col justify-center gap-4 sm:flex-row'>
          <Button
            size='lg'
            className='px-8 py-3 font-bold transition-all rounded-full cursor-pointer hover:scale-110'
          >
            Ver planos
          </Button>
          <Button
            size='lg'
            variant='secondary'
            className='px-8 py-3 font-bold rounded-full cursor-pointer'
          >
            Saber mais
          </Button>
        </div>
      </div>
    </section>
  )
}
