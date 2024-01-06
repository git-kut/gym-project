import HText from "@/shared/HText"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion"
import Benefit from "./Benefit"
import ActionButton from "@/shared/ActionButton"
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"


type BenefitType = {
  icon: JSX.Element,
  title: string,
  description: string
}

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6"></HomeModernIcon>,
    title: "State of the Art Facilities",
    description: "Experience fitness at its finest with our state-of-the-art gym facilities. From cutting-edge equipment to innovative spaces, we provide the ultimate environment for achieving your fitness goals." 
  },
  {
    icon: <UserGroupIcon className="h-6 w-6"></UserGroupIcon>,
    title: "100's of Diverse Classes",
    description: "From heart-pumping cardio sessions to zen-inducing yoga, our lineup offers something for everyone. Dive into a world of fitness diversity with our extensive range of classes." 
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6"></AcademicCapIcon>,
    title: "Expert Trainers",
    description: "Elevate your fitness journey with our expert trainers. From personalized guidance to motivation, our skilled professionals are dedicated to unlocking your full potential." 
  }
]

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2}
  }
}

type Props = {
    setSelectedPage: (value: string) => void
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section 
      id="benefits"
      className="mx-auto min-h-full w-5/6 py-20"
    >
      <motion.div onViewportEnter={() => setSelectedPage('benefits')}>  
        <motion.div 
          className="md:my-5 text-sm"
          initial="hidden" 
          whileInView="visible"
          viewport={{once: true, amount: 0.5}}
          transition={{duration: 0.7}}
          variants={{
            hidden: {opacity: 0, x: -50},
            visible: {opacity: 1, x: 0},
          }}
        >
          <HText>MORE THAN JUST A GYM.</HText>
          <p className="my-4">
            Experience unparalleled fitness at EVOGYM. 
            Our top-tier equipment, expert trainers, and diverse classes ensure 
            your journey to ultimate health is both seamless and transformative.
          </p>
        </motion.div>

        <motion.div 
          className="md:flex items-center justify-between gap-8 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit 
            key={benefit.title}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
            setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        
        <div className="md:flex md:mt-28 mt-16 items-center justify-between">
          <img
            className="mx-auto" 
            alt="Benefits Photo"
            src={BenefitsPageGraphic}
          />

          <div>
            <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
              <motion.div
                initial="hidden" 
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{duration: 0.5}}
                variants={{
                  hidden: {opacity: 0, x: 150},
                  visible: {opacity: 1, x: 0},
                }}
              >
                <HText>MILLIONS OF HAPPY MEMBERS GETTING
                  <span className="text-primary-500"> FIT</span> 
                </HText>
              </motion.div>
            </div>
            
            <motion.div
              initial="hidden" 
              whileInView="visible"
              viewport={{once: true, amount: 0.5}}
              transition={{delay: 0.3, duration: 0.5}}
              variants={{
                hidden: {opacity: 0, x: 150},
                visible: {opacity: 1, x: 0},
              }}
            >
              <p className="my-5">
                Join the thriving community of millions who have found joy in their fitness journey with us. Our commitment to well-being has empowered countless members to achieve their fitness goals and embrace a healthier, happier lifestyle. Experience the transformative impact that millions of happy members attest to – it's time to get fit and stay inspired with us!
              </p>
            </motion.div>
          
            <div className="relative mt-12">
              <div className="before:absolute before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
              </div>
            </div>
          
          </div>

        </div>

      </motion.div>    
    </section>
  )
}

export default Benefits