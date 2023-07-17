import Nav from '@/components/Nav'
import Provider from '@/components/Provider'
import '@/styles/globals.css'

export const metadata = {
  title: 'Promptopia',
  description: 'Discover & Share AI',
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <Provider>
          <div className='main'>
            <Nav />
            <div className='gradient'></div>
          </div>

          <main className='app'>{children}</main>
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout
