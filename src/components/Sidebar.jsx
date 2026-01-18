import Avatar from "../img/eu.jpg"
import "../styles/components/sidebar.sass"

import InformationContainer from "./InformationContainer"
import SocialNetworks from "./SocialNetworks"

const Sidebar = () => {

  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Guilherme Antunes" />
      <h2 className="name">Guilherme Antunes</h2>
      <p className="title">Desenvolvedor Front-End</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="https://drive.google.com/file/d/1-5zpcDgKEXLXY2zg0maM21OdmsINK3DJ/view?usp=drive_link" className="btn">
        Download Currículo
      </a>
    </aside>
  )
}

export default Sidebar