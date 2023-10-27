import { Outlet } from 'react-router-dom'
import './App.css'
import { Header, Main } from '../shared/components/layouts'
import { HandlerProducts, ShowCaseContext } from '../shared/contexts';


const AppClass = 'h-screen grid grid-rows-[50px_calc(100%-50px)] lg:grid-rows-[80px_calc(100%-80px)]';

const App = () => {
  return (
    <div
      className={AppClass}>
      <ShowCaseContext>
        <HandlerProducts>
          <Header />
          <Main>
            <Outlet />
          </Main>
        </HandlerProducts>
      </ShowCaseContext>
    </div>
  )
}

export default App
