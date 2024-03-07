import Project from '../components/Project'
import projects from '../utils/portfolioItems'


export default function PortfolioPage() {
    return (
      <div className="p-container">
        <h1 className="title2">Web Portfolio</h1>

        <Project project={projects} />
      </div>
    );
  }

  