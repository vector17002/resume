import React , {useState , useEffect}from 'react'
import {styles} from '../styles'
import { motion } from 'framer-motion'
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { textVariant , fadeIn } from '../utils/motion';
import { SimpleImageSlider } from 'react-simple-image-slider';
import { github ,live } from '../assets';
import Tilt from 'react-tilt'
const ProjectCard =({idx , name , description , tags , image , source_code_link , link})=>{
   return(
    <Tilt>
    <motion.div variants={fadeIn("up","spring",idx*0.5,1)}>
      <div className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'>
         <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl'
          />
          <div className='absolute inset-0 flex justify-between m-3 card-img_hover'>
          <div onClick={()=>{
              window.open(source_code_link,"_blank")
            }} className='green-pink-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
            <img
              src={live}
              alt='github'
              className='w-[95%] h-full object-contain'
            />
            </div>
          <div onClick={()=>{
              window.open(link,"_blank")
            }} className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
             <img
              src={github}
              alt='github'
              className='w-1/2 h-1/2 object-contain'
            />
            </div>
            
          </div>
         </div>
         <div className='mt-5 text-white-100'>
          <h3 className='font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[16px]'>{description}</p>
         </div>
         <div className='mt-4 flex flex-wrap gap-2'>
           {tags.map((tag)=>(
            <p key={tag.name}
            className={`text-[14px] ${tag.color}`}>
             {tag.name}
            </p>
           ))}
         </div>
      </div>
    </motion.div>
    </Tilt>
   )
}

const Works = () => {
  return (
    <>
<motion.div 
variants={textVariant()}>
   <p className={styles.sectionSubText}>My work</p>
   <h2 className={styles.sectionHeadText}>Projects.</h2>
</motion.div>
<div className='w-full flex flex-col justify-center items-center'>
<motion.p
variants={fadeIn(" "," ",0.1,1)}
className='mt-3 text-secondary text-[20px] max-w-3xl leading-[30px]'>
 Following are some of my projects that I have created with my skills and help from Youtube tutorials. Each project is having a description along with its live demo and github repository.
</motion.p>
</div>
<div className='mt-20 flex flex-wrap gap-7'>
   {projects.map((project , idx)=>
    <ProjectCard 
    key={`project-${idx}`}
    {...project}
    />
    )}
</div>
  </>
  )
}

export default SectionWrapper(Works,'projects');