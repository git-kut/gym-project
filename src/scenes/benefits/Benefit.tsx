import { motion } from "framer-motion"
import AnchorLink from "react-anchor-link-smooth-scroll"


type Props = {
 icon: JSX.Element,
 title: string,
 description: string,
 setSelectedPage: (value: string) => void
}

const childVariant = {
  hidden: { opacity: 0, scale: 0.9},
  visible: { opacity: 1, scale: 1}
}

const Benefit = ({icon, title, description, setSelectedPage}: Props) => {
  return (
    <motion.div 
    variants={childVariant}
    className="md:h-[420px] mt-5 rounded-md border-2 border-gray-100 px-6 py-12 md:py-16 text-center"
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
          {icon}
        </div>
      </div> 
      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{description}</p>
      <AnchorLink 
        className=" text-sm font-bold underline text-primary-500 hover:text-secondary-500" 
        onClick={() => setSelectedPage('contactus')} 
        href='contactus'
      >
        <p>Learn More</p>
      </AnchorLink>
    </motion.div>
  )
}

export default Benefit