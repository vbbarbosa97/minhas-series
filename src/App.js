import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Link }from 'react-router-dom'


import Home from './components/Home'
import NewSeries from './components/NewSeries'
import Series from './components/Series'
import EditSeries from './components/EditSeries'

const About = () => <section className="intro-section"><h1>Sobre</h1></section>

class App extends Component {

  render(){
    return (
      <Router>
        <div>
    
          <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
            <div className="container">
              <div className="navbar-header page-scroll">
                <a className="navbar-brand page-scroll" href="#page-top">
                    <img src="/images/logo.png" height="30" />
                </a>
              </div>
    
              <div className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav">
                  <li>
                    <Link /*NAVEGA NOS LINKS*/ to='/'>Home</Link>
                  </li>
                  <li>
                      <Link to='/new'>Nova Série</Link>
                  </li>
                  <li>
                    <Link to='/about'>Sobre</Link>
                  </li>
                </ul>
              </div>
    
            </div>
          </nav>
          
          
          <Route exact path='/' component={Home} /*ROTA HOME , RETORNA O COMPONENTE HOME*/ />
          <Route path='/series-edit/:id' component={EditSeries} />
          <Route path='/series/:genre' component={Series} /*FILTRANDO A SERIE PELO GENERO */ />
          <Route exact path='/about' component={About} /* RETORNA O COMPONENTE ABOUT */ />
          <Route exact path='/new' component={NewSeries}/>

        </div> 
      </Router>
    ) 
  }
  
}

export default App
