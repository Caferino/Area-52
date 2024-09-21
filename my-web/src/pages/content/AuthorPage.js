import Style from './AuthorPage.module.css';

const AuthorPage = () => {
    return (
        <div>
            {/* Content here */}
            <div className={Style.AuthorPage}>
                <div className={Style.AuthorPageContent}>
                    <img className={Style.AuthorImage} src="images/author/Ca.png" alt="Ca, the father of Alcarodia" />
                </div>
            </div>
        </div>
    );
};

export default AuthorPage;