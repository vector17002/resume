import React, {useState , useEffect } from 'react'
import {Link} from 'react-router-dom';
import {styles} from '../styles'
import {logo , menu , close} from '../assets/index';
const Navbar = () => {
  const[active,setActive] = useState("");
  const[toggle,setToggle] = useState(false);
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 left-0 z-20 bg-primary`}>
    <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
     <Link to='/' className='flex items-center gap-2' onClick={()=>{
      setActive("");
      window.scrollTo(0,0);
     }}>
        <img src={logo} alt='logo' className='w-9 h-9 object-contain'/>
        <p className='text-white text-[18px] font-bold cursor-pointer flex'>
        Ansh &nbsp;
        <span className='sm:block hidden'> |  vector17002</span></p>
     </Link>
     <ul className='list-none hidden sm:flex flex-row gap-10'>
      <li key='#about' className={`${active === 'About' ? 'text-white' : 'text-secondary'} hover:text-white text-[18px] font-medium cursor-pointer`} onClick={()=>setActive('About')}><a href='#about'>About</a></li>
      <li key='#projects' className={`${active === 'Projects' ? 'text-white' : 'text-secondary'} hover:text-white text-[18px] font-medium cursor-pointer`} onClick={()=>
        setActive('Projects')
      }><a href='#projects'>Projects</a></li>
      <li key='#contact' className={`${active === 'Contact' ? 'text-white' : 'text-secondary'} hover:text-white text-[18px] font-medium cursor-pointer`} onClick={()=>
        setActive('Contact')
      }><a href='#contact'>Contact</a></li>
     </ul>
     <div className='sm:hidden flex flex-1 justify-end items-center'>
      <img src={toggle ? close : menu} alt='menu' className='w-28px h-28px object-contain cursor-pointer' onClick={()=>setToggle(!toggle)}/>
      <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
      <ul className='list-none flex justify-end items-start flex-col gap-4'>
      <li key='#about' className={`${active === 'About' ? 'text-white' : 'text-secondary'} font-poppins font-medium text-[16px] `} onClick={()=>{setToggle(!toggle) , setActive('About')}}><a href='#about'>About</a></li>
      <li key='#projects' className={`${active === 'Projects' ? 'text-white' : 'text-secondary'}  font-poppins font-medium text-[16px] `} onClick={()=>{setToggle(!toggle) ,
        setActive('Projects')
      }}><a href='#projects'>Projects</a></li>
      <li key='#contact' className={`${active === 'Contact' ? 'text-white' : 'text-secondary'}  font-poppins font-medium text-[16px] `} onClick={()=>{
        setToggle(!toggle) ,
        setActive('Contact')
      }}><a href='#contact'>Contact</a></li>
     </ul>
      </div>
     </div>
    </div>
    </nav>
  )
}

export default Navbar