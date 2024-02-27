import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedbull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";


type Props = {
    setSelectedPage: (value: string) => void
}

const Home = ({setSelectedPage}: Props) => {
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">

        <motion.div 
          className="md:flex  mx-auto w-5/6 items-center justify-center md:h-5/6"
          onViewportEnter={() => setSelectedPage("home")}  
        >
          <div  className="z-10 mt-32 md:basis-3/5 gap-8">
            <motion.div 
              className="md-mt-20" 
              initial="hidden" 
              whileInView="visible"
              viewport={{once: true, amount: 0.5}}
              transition={{duration: 0.7}}
              variants={{
                hidden: {opacity: 0, x: -50},
                visible: {opacity: 1, x: 0},
              }}
            >
              <div className="relative">
                <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                  <img alt='Home Page Text' src={HomePageText} />
                </div>
              </div>
                <p className="mt-8 text-m">
                  Unrivaled gym, unparalleled training, and world-class studios – 
                  shape your dream body with us. Achieve your fitness goals now.
                </p>
              
              <motion.div 
                className="mt-8 flex items-center gap-8"
                initial="hidden" 
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{delay: 0.3 ,duration: 0.7}}
                variants={{
                hidden: {opacity: 0, x: -50},
                visible: {opacity: 1, x: 0},
                }}
              >
                <ActionButton setSelectedPage={setSelectedPage}>Join Now
                </ActionButton>
                <AnchorLink 
                className=" text-sm font-bold underline text-primary-500 hover:text-secondary-500" 
                onClick={() => setSelectedPage('contactus')} 
                href='contactus'>
                  <p>Learn More</p>
                </AnchorLink>
              </motion.div>
            </motion.div>
          </div>

        <div className="flex basis-3/5 justify-center md:z-10
                        md:ml-40 md:mt-16 md:justift-items-end"
        >
          <img alt="Home Page Image" src={HomePageGraphic} />
        </div>
      </motion.div>
      
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-12">
          <div className="mx-auto w-5/6">
            <div className="flex items-center justify-center gap-20">
              <img alt="Forbes Sponsor Logo" src={SponsorForbes}/>
              <img alt="Redbull Sponsor Logo" src={SponsorRedbull} />
              <img alt="Fortune Sponsor Logo" src={SponsorFortune}/>
            </div>
          </div>
        </div> 
      )}

    </section>
  )
}

export default Home