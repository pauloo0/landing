import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function ToS() {
  const navigate = useNavigate()
  return (
    <section className='py-12 bg-linear-to-b from-gray-950 to-gray-900 text-gray-50'>
      <div className='container mx-auto'>
        <Button
          variant='link'
          className='flex items-center justify-center gap-2 p-0 mb-4 text-lg cursor-pointer text-gray-50'
          onClick={() => navigate('/')}
        >
          <ArrowLeft />
          Voltar
        </Button>

        <h1 className='mb-2 text-4xl font-semibold'>Termos de Serviço</h1>
        <h4 className='mb-10'>Última atualização: 26/11/2025</h4>
        <ol className='mt-6 space-y-4 list-decimal list-inside'>
          <li className='mt-10 text-2xl'>Objeto</li>
          <p>
            Os presentes Termos regulam o uso da Plataforma TraynLab por
            Personal Trainers e pelos seus clientes, definindo regras de
            utilização, responsabilidades e condições contratuais aplicáveis.
          </p>
          <li className='mt-10 text-2xl'>Condições de Acesso e Utilização</li>
          <ul className='space-y-2 list-disc list-inside'>
            <li>O acesso pelos PTs exige criação de conta.</li>
            <li>
              Os clientes dos PTs dispõem apenas de acesso de consulta às
              informações que lhes são disponibilizadas pelo respetivo PT.
            </li>
            <li>
              Não existe funcionalidade de eliminação autónoma de contas por
              parte dos utilizadores.
            </li>
          </ul>
          <li className='mt-10 text-2xl'>Subscrições e Pagamentos</li>
          <ul className='space-y-2 list-disc list-inside'>
            <li>
              Os pagamentos são processados exclusivamente através da Stripe
              Payments Europe Ltd.
            </li>
            <li>A TraynLab não armazena dados de cartão.</li>
            <li>
              A suspensão ou cancelamento pode impedir o acesso à Plataforma.
            </li>
            <li>
              A TraynLab apenas conserva identificadores técnicos da subscrição
              (Customer ID, Subscription ID, Status e End Date).
            </li>
          </ul>
          <li className='mt-10 text-2xl'>
            Responsbilidade dos Personal Trainers
          </li>
          <p>Os PTs assumem integral responsabilidade, incluindo:</p>
          <ul className='space-y-2 list-disc list-inside'>
            <li>
              Recolha e manutenção do consentimento explícito dos clientes para
              o tratamento de dados de saúde.
            </li>
            <li>Determinação das finalidades e bases legais do tratamento.</li>
            <li>Cumprimento integral do RGPD e legislação aplicável.</li>
            <li>
              Garantia de que os dados são utilizados exclusivamente para fins
              profissionais legítimos.
            </li>
            <li>
              Eliminação ou marcação como inativo de clientes que deixem de
              usufruir dos serviços.
            </li>
            <li>Resposta a pedidos de direitos dos seus clientes.</li>
            <li>
              Não utilização de dados fora da Plataforma sem fundamento legal
              adequado.
            </li>
            <li>
              Exclusão de qualquer conteúdo ilegal, ofensivo ou não autorizado.
            </li>
          </ul>
          <li className='mt-10 text-2xl'>Papel da TraynLab</li>
          <p>A TraynLab:</p>
          <ul className='space-y-2 list-disc list-inside'>
            <li>
              Atua como responsável pelo tratamento relativamente aos dados dos
              PTs.
            </li>
            <li>
              Atua como subcontratante relativamente aos dados dos clientes dos
              PTs.
            </li>
            <li>
              Presta serviços técnicos de armazenamento, infraestrutura,
              segurança e disponibilização da Plataforma.
            </li>
            <li>
              Não determina finalidades nem meios do tratamento de dados dos
              clientes dos PTs.
            </li>
            <li>Não é responsável por atos, omissões ou decisões dos PTs.</li>
          </ul>
          <li className='mt-10 text-2xl'>Dados Proibidos</li>
          <p>É proibido:</p>
          <ul className='space-y-2 list-disc list-inside'>
            <li>Dados excessivos ou irrelevantes</li>
            <li>Conteúdos ilícitos ou que violem direitos de terceiros</li>
            <li>
              Dados de saúde não necessários à finalidade profissional declarada
            </li>
          </ul>
          <li className='mt-10 text-2xl'>Limitação de Responsabilidade</li>
          <p>A TraynLab não se responsabiliza por:</p>
          <ul className='space-y-2 list-disc list-inside'>
            <li>
              Erros, omissões ou má utilização da Plataforma por parte dos PTs
            </li>
            <li>
              Decisões profissionais tomadas com base em dados introduzidos
              pelos PTs
            </li>
            <li>
              Perdas de dados resultantes de ação/omissão dos utilizadores
            </li>
            <li>
              Danos indiretos, incidentais, consequenciais ou lucros cessantes
            </li>
            <li>
              Interrupções de serviço causadas por terceiros, falhas de rede ou
              força maior
            </li>
          </ul>
          <p>
            A responsabilidade máxima da TraynLab limita-se ao montante pago nos
            12 meses anteriores ao evento danoso.
          </p>
          <li className='mt-10 text-2xl'>Suspensão e Encerramento</li>
          <p>
            A TraynLab poderá suspender ou encerrar contas em caso de violação
            dos Termos, risco de segurança, comportamento ilícito ou não
            pagamento.
          </p>
          <li className='mt-10 text-2xl'>Propriedade Intelectual</li>
          <p>
            Todo o software, design e infraestrutura da Plataforma constitui
            propriedade exclusiva da TraynLab.
          </p>
          <li className='mt-10 text-2xl'>Lei Aplicável e Foro Competente</li>
          <p>Aplica-se a lei portuguesa.</p>
          <p>
            O foro competente para dirimir litígios é o dos tribunais
            portugueses.
          </p>
        </ol>
      </div>
    </section>
  )
}
