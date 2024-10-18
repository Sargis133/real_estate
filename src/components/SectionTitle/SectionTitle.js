import "./sectionTitle.css"

function SectionTitle({title, subtitle}) {
    return(
        <div className="section-title">
            <span className="section-title__subtitle">{subtitle}</span>
            <p className="section-title__title">{title}</p>
        </div>
    )
}

export default SectionTitle