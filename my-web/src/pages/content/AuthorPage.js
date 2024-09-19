import Style from './AuthorPage.module.css';

const AuthorPage = () => {
    return (
        <div>
            <div className={Style.AuthorPageBackground}></div>

            {/* Content here */}
            <div className={Style.AuthorPage}>
                <div className={Style.AuthorPageContent}>
                    <img src="images/author/Ca.png" alt="Ca, the father of Alcarodia" />
                </div>
            </div>
        </div>
    );
};

export default AuthorPage;