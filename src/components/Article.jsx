function Article(props) {
    const {title, more, classesMain, titleClasses} = props;
    return <div className={classesMain}>
        <svg xmlns="http://www.w3.org/2000/svg" width="71" height="7"><g fill="none" fill-rule="evenodd"><path fill="#9E7F66" d="M15 3h56v1H15z"/><circle cx="3.5" cy="3.5" r="3" stroke="#9E7F66"/></g></svg>
        
        <div>
            <h2 className={`f-title ${titleClasses}`}>{title}</h2>
            <p className={`more ${titleClasses}`}>{more}</p>
        </div>
    </div>
}

export default Article;