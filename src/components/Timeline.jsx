import { VerticalTimeline , VerticalTimelineElement } from "react-vertical-timeline-component"
import {color, motion} from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css'
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { experiences } from "../constants";
const ExperienceCard =({experience})=>{
 return (<VerticalTimelineElement
    contentStyle={{background: '#1d1836',  color:'#fff'}}
    contentArrowStyle={{borderRight:'7px solid #232631'}}
    date={experience.date}
    iconStyle={{background : experience.iconBg}}
    icon = {
        <div className="flex justify-center items-center w-full h-full">
            <img src={experience.icon} className='w-[60%] h-[60%] object-contain'/>
        </div>
    }
 >
 <div>
    <h3 className="text-white font-bold text-[24px]">{experience.title}</h3>
 </div>
 <ul className="mt-5 list-disc ml-5 space-y-2">
       {experience.points.map((point,index)=>(
        <li key={`experience-point-${index}`} className='text-white-100 text-[14px] pl-1 tracking-wider'>{point}</li>
        ))}
    </ul>
 </VerticalTimelineElement>
 )
}
const Timeline = () => {
  return (
   <>
<motion.div 
variants={textVariant()}>
   <p className={styles.sectionSubText}>My learning</p>
   <h2 className={styles.sectionHeadText}>Timeline.</h2>
</motion.div>
<div className="mt-20 flex flex-col">
  <VerticalTimeline>
    {experiences.map((experience , index)=>(
        <ExperienceCard key={index} experience={experience}/>
    ))}
  </VerticalTimeline>
</div>
   </>
  )
}
export default SectionWrapper(Timeline,"timeline")