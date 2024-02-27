import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: string) => void
}

const ActionButton = ({children, setSelectedPage}: Props) => {
  return (
    <AnchorLink
      className="rounded-md bg-primary-300 px-10 py-2 hover:bg-secondary-500 hover:text-white font-medium"
      onClick={() => setSelectedPage('contactus')}
      href='#contact-us'
    > 
      {children} 
    </AnchorLink>
  )
}

export default ActionButton