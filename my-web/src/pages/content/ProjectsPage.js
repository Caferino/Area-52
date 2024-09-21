import Style from './ProjectsPage.module.css';

const ProjectsPage = () => {
    return (
        <div>
            <div className={Style.ProjectsPageBackground}></div>

            {/* Content here */}
            <div className={Style.ProjectsPage}>
                <h2> Content </h2>
            </div>
        </div>
    );
};

export default ProjectsPage;