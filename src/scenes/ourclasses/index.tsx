import image1 from "@/assets/image1.png"
import image2 from "@/assets/image2.png"
import image3 from "@/assets/image3.png"
import image4 from "@/assets/image4.png"
import image5 from "@/assets/image5.png"
import image6 from "@/assets/image6.png"
import HText from "@/shared/HText"
import { motion } from "framer-motion"
import  Class from "./Class"


type ClassType = {
  name: string,
  description: string,
  image: string
}

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description: "Unleash your strength potential in our empowering weight training classes. Guided by expert instructors, these sessions are crafted to sculpt, tone, and strengthen your body.",
    image: image1
  },
  {
    name: "Yoga Classes",
    description: "Embark on a journey of balance and tranquility with our rejuvenating yoga classes. Led by seasoned instructors, our sessions blend mindfulness and movement to enhance flexibility, strength, and inner peace.",
    image: image2
  },
  {
    name: "Ab Core Classes",
    description: "Define your core strength with our targeted Ab Core classes. Led by expert instructors, these sessions are tailored to sculpt and tone your abdominal muscles.",
    image: image3
  },
  {
    name: "Adventure Classes",
    description: "Experience fitness with a thrill in our Adventure Classes. Guided by seasoned instructors, these sessions blend adrenaline and exercise, offering a dynamic and exciting way to stay active.",
    image: image4
  },
  {
    name: "Fitness Classes",
    description: "Elevate your fitness journey with our diverse Fitness Classes. From heart-pumping cardio to strength-building sessions, our expert-led classes cater to all levels and goals.",
    image: image5
  },
  {
    name: "Training Classes",
    description: "Unleash your strength potential in our empowering weight training classes. Guided by expert instructors, these sessions are crafted to sculpt, tone, and strengthen your body.",
    image: image6
  }
]

type Props = {
    setSelectedPage: (value: string) => void
}

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="ourclasses" 
      className="w-full bg-primary-100 py-40 mt-10"
    >
      <motion.div onViewportEnter={() => setSelectedPage("ourclasses")}>
        <motion.div
          className="w-5/6 mx-auto"
          initial="hidden" 
          whileInView="visible"
          viewport={{once: true, amount: 0.5}}
          transition={{duration: 0.7}}
          variants={{
            hidden: {opacity: 0, x: -50},
            visible: {opacity: 1, x: 0},
          }}
        >
          <div>
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Elevate your fitness experience with our dynamic classes designed for all levels. From heart-pounding cardio to soothing yoga, our diverse offerings cater to your every fitness aspiration.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item, index) =>(
              <Class
              key={index}
              name={item.name}
              description={item.description}
              image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  )
}

export default OurClasses