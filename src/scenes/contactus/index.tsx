import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import ContactUsGraphic from "@/assets/ContactUsPageGraphic.png"
import HText from "@/shared/HText"

type Props = {
  setSelectedPage: (value: string) => void
}

const ContactUs = ({setSelectedPage}: Props) => {

  const {
    register,
    trigger,
    formState: {errors}
  } = useForm()

  const onSubmit =async ( e :any) => {
    const isValid = await trigger();

    if (!isValid) {
      e.preventDefault()
    }
  }

  const inputStyle = "mt-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white";

  return (
    <section id="contactus" className="mx-auto w-5/6 py-24">
      <motion.div onViewportEnter={ () => setSelectedPage("contactus") }>
        <motion.div className="md:w-3/5"
          initial="hidden" 
          whileInView="visible"
          viewport={{once: true, amount: 0.5}}
          transition={{duration: 0.7}}
          variants={{
            hidden: {opacity: 0, x: -50},
            visible: {opacity: 1, x: 0},
        }}
        >
          <HText>
            <span className="text-primary-500">JOIN NOW </span>
            TO GET IN SHAPE
          </HText>
          <p className="my-5">
            Seize the opportunity to get in shape – join now! Unleash your potential and embark on a transformative fitness journey with us. Your path to a healthier, fitter you starts today. Join us and let's make every workout count!
          </p>
        </motion.div>
      <div className="mt-10 justify-between gap-8 md:flex">
        <motion.div className="mt-10 basis-3/5 md:mt-0"
          initial="hidden" 
          whileInView="visible"
          viewport={{once: true, amount: 0.5}}
          transition={{duration: 0.7}}
          variants={{
            hidden: {opacity: 0, y: 50},
            visible: {opacity: 1, y: 0},
        }}
        >
          <form 
            target="blank" 
            onSubmit={onSubmit} 
            method="POST" 
            action="https://formsubmit.co/4b8328e41e8cf96dc70624e2b8022ce7"
          >
            <input 
              className={inputStyle} 
              type="text"
              placeholder="Name"
              {...register("name", {
                required: true,
                maxLength: 100
              })}
            />
            {errors.name &&(
              <p className="mt-1 text-primary-500">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Maximum character limit exceeded. Please shorten your input to 100 characters or less."}
              </p>
            )}

            <input 
              className={inputStyle} 
              type="text"
              placeholder="Email"
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i
              })}
            />
            {errors.email &&(
              <p className="mt-1 text-primary-500">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Please enter a valid email address."}
              </p>
            )}

            <textarea 
              className={`${inputStyle} resize-none`} 
              rows={4}
              cols={50}
              placeholder="Message"
              {...register("message", {
                required: true,
                maxLength: 2000
              })}
            />
            {errors.message &&(
              <p className="mt-1 text-primary-500">
                {errors.message.type === "required" && "This field is required."}
                {errors.message.type === "maxLength" && "Maximum character limit exceeded. Please shorten your input to 2000 characters or less."}
              </p>
            )}

          <button type="submit" className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white hover:bg-primary-500">
          SUBMIT
          </button>
          </form>
        </motion.div>
        <motion.div className="relative mt-16 basis-2/5 md:mt-0"
          initial="hidden" 
          whileInView="visible"
          viewport={{once: true, amount: 0.5}}
          transition={{delay: 0.2, duration: 0.7}}
          variants={{
            hidden: {opacity: 0, y: 50},
            visible: {opacity: 1, y: 0},
        }}
        >
          <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-20]">
            <img className="w-full" alt="Contact Us Page Graph" src={ContactUsGraphic}/>
          </div>
        </motion.div>

      </div>

      </motion.div>
    </section>
  )
}

export default ContactUs