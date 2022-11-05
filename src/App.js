import { useState } from 'react'
import './App.css'

import { AppProvider } from './store/store'
import { Header } from './components/header'
import { MainSection } from './components/main-section'
import { Footer } from './components/footer'

function App() {
  const [visibilityFilter, setVisibilityFilter] = useState('All')

  return (
    <div className="App">
      <AppProvider>
        <Header />
        <MainSection visibilityFilter={visibilityFilter} />
        <Footer
          visibilityFilter={visibilityFilter}
          onFilterChange={setVisibilityFilter}
        />
      </AppProvider>
    </div>
  )
}

export default App
