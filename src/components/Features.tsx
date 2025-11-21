import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'

const features = [
  {
    title: 'Clientes',
    description: 'Gere os teus clientes de todos os ginásios onde trabalhas.',
  },
  {
    title: 'Planos de treino',
    description:
      'Cria planos de treino orientados para os objetivos específicos de cada cliente.',
  },
  {
    title: 'Avaliações físicas',
    description:
      'Acompanha o progresso dos teus clientes com avaliações físicas regulares.',
  },
  {
    title: 'Calendário',
    description:
      'Insere no teu calendário os comprimissos e sessões de treino com os teus clientes.',
  },
  {
    title: 'Faturação',
    description: 'Controla os pagamentos dos teus clientes',
  },
]

export default function Features() {
  return (
    <section id='features' className='px-4 py-20 md:py-32 bg-gray-950'>
      <div className='container mx-auto'>
        <div className='mb-16 text-center'>
          <h2 className='mb-4 text-4xl font-bold md:text-5xl text-gray-50 text-balance'>
            O que te damos
          </h2>
          <p className='max-w-2xl mx-auto text-lg text-gray-400'>
            Funcionalidades desenhadas para facilitar a gestão do teu tempo e
            melhorar a experiência dos teus clientes.
          </p>
        </div>
        <div className='grid gap-6 md:grid-cols-3'>
          {features.map((feature, index) => (
            <Card
              key={index}
              className='transition-all border border-gray-800 hover:border-lime-500/50 hover:bg-lime-950/50'
            >
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription></CardDescription>
              </CardHeader>
              <CardContent>{feature.description}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
