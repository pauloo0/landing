import { footerLinks } from '@/data/footer'

export default function Footer() {
  return (
    <footer className='px-4 py-12 bg-gray-900 border-t border-gray-800'>
      <div className='container mx-auto'>
        <div className='grid gap-8 mb-8 md:grid-cols-3'>
          <div>
            <a href='/' className='text-xl font-bold text-lime-500'>
              TraynLab
            </a>
            <p className='text-sm text-gray-400'>
              Gere os teus clientes e acompanha o progresso de cada um da melhor
              forma.
            </p>
          </div>
          <div>
            <h4 className='mb-4 font-semibold text-gray-50'>Produto</h4>
            <ul>
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className='text-sm text-gray-400 transition-colors hover:text-lime-500'
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className='mb-4 font-semibold text-gray-50'>Legal</h4>
            <ul>
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target='_blank'
                    className='text-sm text-gray-400 transition-colors hover:text-lime-500'
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='pt-8 border-t border-gray-800'>
          <div className='flex items-center justify-between text-sm text-gray-400'>
            <p className='w-full text-center'>
              &copy; 2025 TraynLab. Todos os direitos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
