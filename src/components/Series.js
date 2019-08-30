import React, { Component } from 'react'
import api from './Api'
import {Link} from 'react-router-dom'

const statuses = {
    'watched' : 'Assistido',
    'watching':'Assistindo',
    'toWatch':'Assistir'
}

class Series extends Component {

    constructor(props){
        super(props)

        //definindo o estado inicial
        this.state = {
            isLoading: false,
            series: [],
        }

        //chama a função para poder usar o this fora do render
        this.renderSeries = this.renderSeries.bind(this)
        this.loadData = this.loadData.bind(this)
    }

    // depois que o componente montou na tela executa
    componentDidMount(){

        //funcao que recarrega 
        this.loadData()
    }

    loadData(){

        this.setState({ isLoading: true })

        api.loadSeriesByGenre(this.props.match.params.genre).then((res)=>{
            this.setState({
                isLoading: false,
                series: res.data
            })
        })

        
    }

    deleteSeries(id){
       api.deleteSeries(id).then((res)=> this.loadData())

       
    }

    renderSeries(series){
        return(
            <div key={series.id} className="item  col-xs-4 col-lg-4">
                <div className="thumbnail">
                    <img className="group list-group-image" src="http://placehold.it/400x250/000/fff" alt="" />
                    <div className="caption">
                        <h4 className="group inner list-group-item-heading"> {series.name} </h4>
                        <div className="row">
                            <div className="col-xs-12 col-md-12">
                                <p className="lead"> {series.genre} / {statuses[series.status]} </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-md-12">
                                <Link className="btn btn-success" to={'/series-edit/'+series.id} >Editar</Link>
                                <a className="btn btn-danger" onClick={ () => this.deleteSeries(series.id)}>Excluir</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
    render(){
        return(
           <section id="intro" className="intro-section">
               <h1>Series de {this.props.match.params.genre}</h1>
               
                {// aparece a mensagem enquanto carrega os dados
                    this.state.isLoading &&
                    <p>Carregando, aguarde...</p>
                }

                {
                    this.state.series.length === 0 &&
                    
                    <div className='alert alert-info'>
                        Nenhuma série cadastrada.
                    </div>
                }


                <div id="series" className="row list-group">
                    { //aparece os dados
                        !this.state.isLoading &&
                        this.state.series.map(this.renderSeries)
                    }
                </div>

           </section>
        )
    }
}
export default Series