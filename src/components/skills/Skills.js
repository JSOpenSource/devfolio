import React from 'react';
// import {useSelector} from 'react-redux';
import './Skills.scss';


const Skills = () => {

    const onMouseHoverHandler = (event) => {
        event.target.nextSibling ? event.target.nextSibling.scroll({ left: 0, top: 500, behavior: 'smooth' }) : null;
    }

    let skillData = [
        {
            name: "Frontend",
            list: ["Html", "Css", "Scss", "JavaScript", "vue js", "React", "Angular", "Webpack"]
        },
        {
            name: "Backend",
            list: ["NodeJs", "ExpressJs", "Flask"]
        },
        {
            name: "Database",
            list: ["Postgress", "SQL", "Mongodb", "MySQL", "Graphql"]
        },
    ]

    //  const {frontend,backend,database} = useSelector((state) => state.SkillsReducer)
    return (
        <section className="skill">
            <div className="skill__container">
                <div className="skill__row">
                    {
                        skillData.map((data, index) => (
                            <div className="skill__card">
                                <div className="skill__card-header" onMouseOver={onMouseHoverHandler}>
                                    <h3 className="skill__primary-heading" >{data.name}</h3>
                                </div>
                                <div className="skill__card-body" >
                                    <ul className="skill__list" id={"list__id" + index} >
                                        {
                                            data.list.map((skill, skillIndex) => (
                                                <li className="skill__item" id={"item" + skillIndex}><p className="skill__text">{skill}</p></li>
                                            ))
                                        }
                                    </ul>

                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default Skills;
