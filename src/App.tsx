import { useState } from 'react'
import { Sidebar } from './components/layout/Sidebar'
import { Header } from './components/layout/Header'
import { Dashboard } from './components/pages/Dashboard'
import { Conversations } from './components/pages/Conversations'
import { ConversationDetail } from './components/pages/ConversationDetail'
import { Analytics } from './components/pages/Analytics'
import { Settings } from './components/pages/Settings'

type Page = 'dashboard' | 'conversations' | 'conversation-detail' | 'analytics' | 'settings'

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('dashboard')
  const [selectedConversationId, setSelectedConversationId] = useState<string | null>(null)
  const [selectedClient, setSelectedClient] = useState('all')

  const handleConversationSelect = (conversationId: string) => {
    setSelectedConversationId(conversationId)
    setCurrentPage('conversation-detail')
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard selectedClient={selectedClient} />
      case 'conversations':
        return <Conversations onConversationSelect={handleConversationSelect} selectedClient={selectedClient} />
      case 'conversation-detail':
        return <ConversationDetail conversationId={selectedConversationId} onBack={() => setCurrentPage('conversations')} />
      case 'analytics':
        return <Analytics selectedClient={selectedClient} />
      case 'settings':
        return <Settings />
      default:
        return <Dashboard selectedClient={selectedClient} />
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="flex">
        <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />
        <div className="flex-1 flex flex-col">
          <Header selectedClient={selectedClient} onClientChange={setSelectedClient} />
          <main className="flex-1 p-8 bg-gray-50">
            {renderPage()}
          </main>
        </div>
      </div>
    </div>
  )
}

export default App