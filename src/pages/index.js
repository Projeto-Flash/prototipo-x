// Libs
import List from 'components/molecules/list'
import { useState } from 'react'

export default function Home() {
  const [theme, setTheme] = useState('light')
  return (
    <>
      <div
        style={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          gap: '100px',
          background: theme === 'light' ? 'lightGray' : '#2E3844',
          padding: '10px'
        }}
      >
        <List title="Backlog do Projeto" theme={theme}></List>
      </div>
    </>
  )
}
