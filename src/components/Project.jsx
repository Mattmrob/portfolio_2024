function Project(props) {
    return (
      <ul className="p-project">
        {props.project.map((project) => {
            return(
          <div class="img-container" key={project.id}>


            <img
            alt={project.title}
            className="p-img"
            src={project.url}
            />

            <div className="p-t-container">

                <h3>{project.title}</h3>
                <p>{project.text}</p>


              {project.github ? 
                <p className="projectlink"><a target="_blank" href={project.github}>Github</a>
                <a target="_blank" href={project.deployment}>Deployment</a></p>
                :
                <p className="projectlink">
                <a target="_blank" href={project.deployment}>Deployment</a></p>
              }

            </div>
          </div>
          );
        })}
      </ul>

    );
  }


  export default Project;