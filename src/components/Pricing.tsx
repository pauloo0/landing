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
          <div className='inline-block px-4 py-2 mb-6 bg-gray-900 border rounded-full border-lime-500'>
            <p className='text-sm font-semibold text-lime-500'>
              Apenas 10 vagas disponíveis
            </p>
          </div>
          <p className='max-w-2xl mx-auto text-lg text-gray-400'>
            Escolhe o plano que se adapta melhor às tuas necessidades e começa
            hoje a aumentar a tua produtividade!
          </p>
        </div>
        <div className='grid max-w-6xl gap-8 mx-auto md:grid-cols-2'>
          {pricingPlans.map((plan, index) => (
            <Card key={index}>
              <CardHeader className='mb-4'>
                <CardTitle className='mb-2 text-2xl font-bold text-center'>
                  {plan.name}
                </CardTitle>
                <CardDescription className='space-y-2 text-lg text-gray-400'>
                  {/* Discounted price */}
                  {plan.promo_price && (
                    <p className='line-through'>
                      {plan.price}
                      {plan.interval === 'month' ? ' /mês' : ' /ano'}
                    </p>
                  )}
                  <p>
                    <span className='text-4xl font-semibold text-lime-500'>
                      {plan.promo_price ? plan.promo_price : plan.price}
                    </span>
                    {plan.interval === 'month' ? ' /mês' : ' /ano'}
                  </p>
                  <p className='flex items-center gap-2 text-sm'>
                    {plan.savings ? (
                      <span className='px-2.5 py-1 rounded-full bg-lime-500 text-gray-950'>
                        {plan.savings}
                      </span>
                    ) : (
                      'Cobrado mensalmente. '
                    )}
                    Cancele a qualquer momento
                  </p>
                </CardDescription>
              </CardHeader>
              <CardContent className='flex flex-col'>
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
