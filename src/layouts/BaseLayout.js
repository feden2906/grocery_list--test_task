import './BaseLayout.css'
import {NavLink} from "react-router-dom";

export const BaseLayout = ({children}) => {

  return (
      <div className='mainWrapper'>
        <header className='header'>
          <nav>
            <NavLink to='/grocery-list' exact activeStyle={{
              fontWeight: "bold",
              color: "red"
            }} >
              Grocery List
            </NavLink>

          </nav>
        </header>

        <main>{children}</main>

        <footer>by Feden</footer>
      </div>
  )
}
