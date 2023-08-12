import {Component} from 'react'
import BtnCard from './BtnCard'

import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here

class App extends Component {
  state = {
    activeImgUrl: languageGreetingsList[0].imageUrl,
    activeId: languageGreetingsList[0].id,
    activeImgAltText: languageGreetingsList[0].imageAltText,
  }

  onClickButtonElement = (imageUrl, id, imageAltText) => {
    this.setState({
      activeImgUrl: imageUrl,
      activeId: id,
      activeImgAltText: imageAltText,
    })
  }

  render() {
    const {activeImgUrl, activeId, activeImgAltText} = this.state
    return (
      <div className="bg-container">
        <div className="app-container">
          <h1 className="heading">Multilingual Greetings</h1>
          <ul className="tab-container">
            {languageGreetingsList.map(eachItem => (
              <BtnCard
                key={eachItem.buttonText}
                eachDetails={eachItem}
                onClickButtonElement={this.onClickButtonElement}
                isActive={eachItem.id === activeId}
              />
            ))}
          </ul>
          <img src={activeImgUrl} alt={activeImgAltText} className="img" />
        </div>
      </div>
    )
  }
}

export default App
