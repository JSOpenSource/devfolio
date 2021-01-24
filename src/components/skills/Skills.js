import React from 'react';
// import {useSelector} from 'react-redux';
import './Skills.scss';


 const Skills = ()=> {

    let skillData = [
        {
            name: "Frontend",
            list: ["Html", "Css", "Scss", "JavaScript", "React", "Angular", "Webpack"]
        },
        {
            name: "Backend",
            list: ["NodeJs", "ExpressJs", "Flask"]
        },
        {
            name: "Database",
            list: ["Postgress", "SQL", "Mongodb"]
        },
    ]
    
    //  const {frontend,backend,database} = useSelector((state) => state.SkillsReducer)
    return (
            <section className="skill">
                <div className="skill__container">
                    <div className="skill__row">
                        {
                            skillData.map(data => (
                                <div className="skill__card">
                                    <div className="skill__card-header">
                                        <h3 className="skill__primary-heading">{data.name}</h3>
                                    </div>
                                    <div className="skill__card-body">
                                        <ul className="skill__list">
                                            {
                                                data.list.map(skill => (
                                                    <li className="skill__item"><p className="skill__text">{skill}</p></li>
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

export default Skills ;
