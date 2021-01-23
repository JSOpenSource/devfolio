import React from 'react';
// import {useSelector} from 'react-redux';
import './Skills.scss';


 const Skills = ()=> {
    
    //  const {frontend,backend,database} = useSelector((state) => state.SkillsReducer)
    return (
       
            <div className="SkillSection">
                <div className="FrontEnd">
                    <span class="ribbon5">
                        <span>Front End</span>
                    </span>
                    {/* {frontend.map((item)=>
                        (
                            <div className="Badge">{item}</div>
                        )
                    )} */}
                    <div className='BadgeWrapper'>
                    <div className="Badge">HTML</div>
                    <div className="Badge">CSS</div>
                    <div className="Badge">JAVASCRIPT</div>
                    </div>
                </div>
                <div className="BackEnd">
                    <span class="ribbon5">
                        <span>Back End</span>
                    </span>
                    {/* {backend.map((item)=>
                         (
                            <div className="Badge">{item}</div>
                        )
                    )} */}
                    <div className='BadgeWrapper'>
                    <div className="Badge">NodeJS</div>
                    <div className="Badge">Express JS</div>
                    <div className="Badge">PHP</div>
                    </div>
                </div>
                <div className="DataBase">
                    <span class="ribbon5">
                        <span>Data Base</span>
                    </span>
                    {/* {database.map((item,)=>
                        (
                            <div className="Badge">{item}</div>
                        )
                    )} */}
                    <div className='BadgeWrapper'>
                    <div className="Badge">MySQL</div>
                    <div className="Badge">MongoDB</div>
                    <div className="Badge">PostgreSQL</div>
                    </div>
                </div>

            </div>
        
    );
}

export default Skills ;
