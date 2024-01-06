import Logo from "@/assets/Logo.png"
import Link from "../navbar/Link"
import { motion } from "framer-motion";

type Props = {
  selectedPage: string;
  setSelectedPage: (value: string) => void;
}
const Footer = ({selectedPage, setSelectedPage}: Props) => {
  return (
    <section id="footer" className="bg-primary-100 py-10">
      <motion.div className="flex justify-between mx-auto w-5/6 gap-16" onViewportEnter={() => setSelectedPage('footer')}>
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="Logo" src={Logo} className="w-32 h-auto"/>
          <p className="my-5">
            © EvoGYM 2024.
          </p>
          <p>
            All rights reserved.
          </p>
        </div>
        <div className="flex flex-col mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold mb-1">Links</h4>
          <Link 
            page="Home" 
            selectedPage={selectedPage} 
            setSelectedPage={setSelectedPage} />
          <Link 
            page="Benefits" 
            selectedPage={selectedPage} 
            setSelectedPage={setSelectedPage} />
          <Link 
            page="Our Classes" 
            selectedPage={selectedPage} 
            setSelectedPage={setSelectedPage} />
          <Link 
            page="Contact Us" 
            selectedPage={selectedPage} 
            setSelectedPage={setSelectedPage} />
        </div>
      </motion.div>
    </section>
  )
}

export default Footer