import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { pricingPlans } from '@/data/pricing'

export default function Pricing() {
  return (
    <section
      id='pricing'
      className='w-full px-4 py-20 border-t border-gray-800 md:py-32 bg-linear-to-b from-gray-950 to-gray-900'
    >
      <div className='container mx-auto'>
        <div className='mb-16 text-center'>
          <h2 className='mb-4 text-4xl font-bold md:text-5xl text-gray-50 text-balance'>
            Os nossos planos
          </h2>
          <p className='max-w-2xl mx-auto text-lg text-gray-400'>
            Escolhe o plano que se adapta melhor às tuas necessidades e começa
            hoje a aumentar a tua produtividade!
          </p>
        </div>
        <div className='grid max-w-6xl gap-8 mx-auto md:grid-cols-2'>
          {pricingPlans.map((plan, index) => (
            <Card key={index}>
              <CardHeader className='mb-6 text-center'>
                <CardTitle className='mb-2 text-2xl font-bold'>
                  {plan.name}
                </CardTitle>
                <CardDescription className='text-lg text-gray-400'>
                  <span className='text-4xl font-bold text-lime-500'>
                    {plan.price}
                  </span>{' '}
                  {plan.interval}
                </CardDescription>
              </CardHeader>
              <CardContent className='flex flex-col items-center'>
                <a href={`https://web.traynlab.pt/register?plan=${plan.id}`}>
                  <Button
                    size='lg'
                    className='w-full mb-8 font-semibold transition-all cursor-pointer'
                  >
                    Começar
                  </Button>
                </a>
                <ul className='space-y-3'>
                  {plan.features.map((feature, index) => (
                    <li
                      key={index}
                      className='flex items-center gap-2 text-gray-300'
                    >
                      <span className='font-bold text-lime-500'>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
