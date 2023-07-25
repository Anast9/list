// logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import Car from './Car/Car';
class App extends Component {

  state = {
    cars: [
      {name: 'Моя девушка - инопланетянка', year: 2022},
       {name: 'Глоток молодости', year: 2018},
       {name: 'Невеста на замену', year: 2019}

      
    ],

    pageTitle: 'Дорамы смотреть онлайн'
  }

  changeTitleHandler = (newTitle) =>{

    this.setState({
      pageTitle: newTitle
    })
  }

  handleInput = (event) =>{
    this.setState({
      pageTitle: event.target.value
    })
  }
  
  render() {

    console.log('Render')

    const divStyle = {
      textAlign: 'center'
    }

    

    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>

       <input type='text' onChange={this.handleInput}/>


<button onClick={this.changeTitleHandler.bind(this, 'tecm !')}>Поиск  Дорам</button>


{ this.state.cars.map((car, index) =>{

  return (
    < Car
        key={index}
        name={car.name}
         year={car.year} 
         onChageTile={() => this.changeTitleHandler(car.name)}
         />
  )

})}

 


      </div>
    );
  }
}

export default App;
