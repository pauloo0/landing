import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function Privacy() {
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

        <h1 className='mb-2 text-4xl font-semibold'>Política de Privacidade</h1>
        <h4 className='mb-10'>Última atualização: 26/11/2025</h4>

        <section className='mt-6'>
          <p>
            A presente Política de Privacidade descreve o tratamento de dados
            pessoais efetuado no âmbito da plataforma TraynLab (“Plataforma”),
            acessível em{' '}
            <a href='https://web.traynlab.pt'>https://web.traynlab.pt</a>,
            operada por um prestador individual estabelecido em Portugal
            (“Responsável pelo Tratamento”). A Política cumpre o Regulamento
            (UE) 2016/679 (RGPD) e legislação nacional aplicável.
          </p>

          <ol className='mt-4 space-y-4 list-decimal list-inside'>
            <li className='mt-10 text-2xl'>
              Identidade e Contactos do Responsável pelo Tratamento
            </li>
            <p>
              Responsável pelo tratamento relativamente aos dados dos Personal
              Trainers (PTs):
            </p>
            <ul className='space-y-2 list-disc list-inside'>
              <li>Prestador individual (trabalhador independente)</li>
              <li>Email de contacto: traynlab@gmail.com</li>
              <p>
                No que respeita aos dados dos clientes dos PTs, cada PT atua
                como responsável independente pelo tratamento, cabendo à
                TraynLab a função de subcontratante (processador), limitada à
                prestação de serviços técnicos de armazenamento, segurança e
                disponibilização da Plataforma.
              </p>
            </ul>
            <li className='mt-10 text-2xl'>Categorias de Dados Tratados</li>
            <ol
              className='space-y-2 list-inside'
              style={{ listStyleType: 'lower-alpha' }}
            >
              <li className='mt-4 text-xl'>
                Dados dos PTs (Responsável: TraynLab)
              </li>
              <ul className='space-y-2 list-disc list-inside'>
                <li>Identificação: nome, email, username</li>
                <li>Credenciais de acesso</li>
                <li>
                  Dados de faturação no Stripe: Customer ID, Subscription ID,
                  Subscription Status e Subscription End Date
                </li>
                <li>
                  Registos técnicos: endereços IP, informações de dispositivo,
                  eventos de autenticação, registos de erro
                </li>
                <li>Dados de notificações (email e web-push)</li>
              </ul>
              <li className='mt-4 text-xl'>
                Dados dos Clientes dos PTs (Responsável: PT; Subcontratante:
                TraynLab)
              </li>
              <ul className='space-y-2 list-disc list-inside'>
                <li>
                  Identificação: nome, idade, género, contacto telefónico, email
                </li>
                <li>
                  Dados de saúde: lesões, patologias, condições relevantes
                </li>
                <li>
                  Avaliações físicas: dados antropométricos, perímetros e
                  medições
                </li>
                <li>
                  Conteúdos submetidos: imagens, PDFs e outros anexos
                  relacionados
                </li>
                <li>Registos de treinos, agendamentos e notas</li>
                <li>Dados para envio de notificações por email</li>
                <p>
                  Os PTs determinam finalidades, meios e bases legais, incluindo
                  a obtenção de consentimento explícito dos respetivos clientes.
                </p>
              </ul>
            </ol>
            <li className='mt-10 text-2xl'>
              Finalidades e Fundamentos Jurídicos
            </li>
            <ol
              className='space-y-2 list-inside'
              style={{ listStyleType: 'lower-alpha' }}
            >
              <li className='mt-4 text-xl'>Dados dos PTs</li>
              <p>
                Fundamentos: execução do contrato, cumprimento de obrigações
                legais, interesse legítimo em assegurar segurança da plataforma.
              </p>
              <p>Finalidades:</p>
              <ul className='space-y-2 list-disc list-inside'>
                <li>Gestão de contas</li>
                <li>Acesso à Plataforma</li>
                <li>Processamento de pagamentos via Stripe</li>
                <li>Segurança, logs e prevenção de abuso</li>
                <li>Envio de comunicações transacionais e web-push</li>
              </ul>
              <li className='mt-4 text-xl'>Dados dos Clientes dos PTs</li>
              <p>Finalidades determinadas pelos PTs.</p>
              <p>A TraynLab atua apenas para:</p>
              <ul className='space-y-2 list-disc list-inside'>
                <li>Armazenamento e disponibilização de dados ao PT</li>
                <li>Execução de operações técnicas</li>
                <li>Envio de notificações solicitado pelo PT</li>
                <li>Garantia de segurança, integridade e backup</li>
              </ul>
            </ol>
            <li className='mt-10 text-2xl'>Prazos de Conservação</li>
            <ol
              className='space-y-2 list-inside'
              style={{ listStyleType: 'lower-alpha' }}
            >
              <li className='mt-4 text-xl'>PTs</li>
              <p>
                Os dados são conservados enquanto a conta estiver ativa. Podem
                ser conservados dados mínimos após eliminação por imposição
                legal ou motivos de segurança.
              </p>
              <li className='mt-4 text-xl'>Clientes dos PTs</li>
              <ul className='space-y-2 list-disc list-inside'>
                <li>Dados ativos enquanto associados ao PT responsável.</li>
                <li>
                  Após a marcação como cliente inativo, os dados de saúde são
                  eliminados após 6 meses.
                </li>
                <li>
                  Os PTs podem eliminar avaliações, anexos e dados clínicos a
                  qualquer momento.
                </li>
                <li>A eliminação é definitiva.</li>
              </ul>
              <li className='mt-4 text-xl'>
                Backups (TraynLab como subcontratante)
              </li>
              <p>
                A infraestrutura da TraynLab mantém backups automáticos Linode,
                localizados em Madrid (UE), consistindo em:
              </p>
              <ul className='space-y-2 list-disc list-inside'>
                <li>Um backup diário mais recente</li>
                <li>Um segundo backup diário</li>
                <li>Um backup semanal</li>
              </ul>
              <p>
                Não é tecnicamente possível eliminar dados individuais dentro
                dos backups.
              </p>
              <p>
                Os dados são eliminados apenas por rotação natural do ciclo de
                backups.
              </p>
            </ol>
            <li className='mt-10 text-2xl'>Destinatários e Transferências</li>
            <ul className='space-y-2 list-disc list-inside'>
              <li>Stripe Payments Europe Ltd. — processamento de pagamentos</li>
              <li>Linode (Akamai) — VPS e Object Storage (Madrid, UE)</li>
            </ul>
            <p>
              Não existem transferências internacionais para fora da União
              Europeia.
            </p>
            <li className='mt-10 text-2xl'>Medidas de Segurança</li>
            <ul className='space-y-2 list-disc list-inside'>
              <li>Transmissão protegida através de HTTPS/TLS</li>
              <li>Acesso restrito e autenticado</li>
              <li>Registos e monitorização de segurança</li>
              <li>Backups automáticos</li>
              <li>
                Nota: a base de dados e o object storage não utilizam
                encriptação nativa “at rest”, residindo todavia em ambiente
                seguro na UE
              </li>
            </ul>
            <li className='mt-10 text-2xl'>Direitos dos Titulares</li>
            <ol
              className='space-y-2 list-inside'
              style={{ listStyleType: 'lower-alpha' }}
            >
              <li className='mt-4 text-xl'>PTs</li>
              <p>
                Podem exercer os direitos de acesso, retificação, apagamento,
                limitação, portabilidade e oposição através de:{' '}
                <a href='mailto:traynlab@gmail.com'>traynlab@gmail.com</a>
              </p>
              <li className='mt-4 text-xl'>Clientes dos PTs</li>
              <p>
                Os direitos devem ser exercidos diretamente junto do PT
                responsável.
              </p>
              <p>A TraynLab atua exclusivamente enquanto subcontratante.</p>
            </ol>
            <li className='mt-10 text-2xl'>
              Cookies e Tecnologias de Monitorização
            </li>
            <p>
              A TraynLab não utiliza cookies de terceiros nem ferramentas de
              analytics.
            </p>
            <li className='mt-10 text-2xl'>Notificações Web-Push</li>
            <p>
              A receção de notificações depende do consentimento explícito no
              navegador.
            </p>
            <p>
              O cancelamento pode ser efetuado diretamente nas definições do
              navegador.
            </p>
            <li className='mt-10 text-2xl'>Alterações à Política</li>
            <p>
              A TraynLab poderá alterar a presente Política. As alterações
              relevantes serão comunicadas na Plataforma.
            </p>
          </ol>
        </section>
      </div>
    </section>
  )
}
