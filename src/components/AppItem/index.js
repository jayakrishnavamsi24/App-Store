import './index.css'

const AppItem = props => {
  const {eachApp} = props

  return (
    <li className="app-item">
      <li className="app-img-container">
        <img src={eachApp.imageUrl} alt={eachApp.appName} />
      </li>
      <p>{eachApp.appName}</p>
    </li>
  )
}

export default AppItem
