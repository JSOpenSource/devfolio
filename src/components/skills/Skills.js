import React from 'react';
import {useSelector} from 'react-redux';
import './Skills.scss';


 const Skills = ()=> {
    
     const {frontend,backend,database} = useSelector((state) => state.SkillsReducer)
    return (
        <section>
            <div className="SkillSection">
                <div className="FrontEnd">
                    <span class="ribbon5">
                        <span>Front End</span>
                    </span>
                    {frontend.map((item)=>
                        (
                            <div className="Badge">{item}</div>
                        )
                    )}
                </div>
                <div className="BackEnd">
                    <span class="ribbon5">
                        <span>Back End</span>
                    </span>
                    {backend.map((item)=>
                         (
                            <div className="Badge">{item}</div>
                        )
                    )}
                </div>
                <div className="DataBase">
                    <span class="ribbon5">
                        <span>Data Base</span>
                    </span>
                    {database.map((item,)=>
                        (
                            <div className="Badge">{item}</div>
                        )
                    )}
                </div>

            </div>
        </section>
    );
}

export default Skills ;
