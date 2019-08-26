import React, { Component} from 'react'

const statuses = {
    'watched' : 'Assistido',
    'watching':'Assistindo',
    'toWatch':'Assistir'
}

class NewSeries extends Component{
    
    render(){
        return(
            <section className="intro-section">
                <h1>Nova Série</h1>

                <form>
                    Nome: <input type="text" className="form-control"/><br />
                    Status: 
                    <select>
                        {Object
                            .keys(statuses)
                            .map( key => <option value={key}>{statuses[key]}</option> )
                        }
                    </select><br />
                    Comentários: <textarea className="form-control"></textarea><br />
                </form>
            </section>
        )
    }
}

export default NewSeries