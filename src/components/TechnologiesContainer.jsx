import{
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiReact,
  DiPhp,
  DiJqueryLogo,
  DiGit,
  DiSass,
  DiDocker,
} from 'react-icons/di'

import '../styles/components/technologiescontainer.sass'

const technologies = [
  {id: 'html',name:"HTML5", icon: <DiHtml5 />},
  {id: 'css',name:"CSS3", icon: <DiCss3 />},
  {id: 'js',name:"JavaScript", icon: <DiJsBadge />},
  {id: 'node',name:"Node.js", icon: <DiNodejsSmall />},
  {id: 'php',name:"PHP", icon: <DiPhp />},
  {id: 'react',name:"React", icon: <DiReact />},
  {id: 'jquery',name:"Jquery", icon: <DiJqueryLogo />},
  {id: 'git',name:"Git", icon: <DiGit />},
  {id: 'docker',name:"Docker", icon: <DiDocker />},

];


const TechnologiesContainer = () => {
  return ( 
  <section className='technologies-container'>
    <h2>Tecnologias</h2>
    <div className='technologies-grid'>
      {technologies.map((tech)=> (
        <div className='technologies-card' id={tech.id} key={tech.id}>
            {tech.icon}
            <div className='technology-info'>
              <h3>{tech.name}</h3>
            </div>
          </div>
      ))}
    </div>

  </section>
  )
}

export default TechnologiesContainer