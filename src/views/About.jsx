import GithubLogo from '../assets/GitHub-Mark-64px.png'
import {Link} from 'react-router-dom'
const About = (props) => {
   return (
      <div>
         <h1 className="text-center">About Me</h1>
         <a href="https://github.com/ppwire" className="text-xl ">
            <span className="inline-block h-6 w-6 mr-2 align-middle">
               <img src={GithubLogo} alt="Github" />
            </span>
            GitHub
         </a>
      </div>
   )
}

export default About