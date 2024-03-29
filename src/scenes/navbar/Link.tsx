import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page: string;
    selectedPage: string;
    setSelectedPage: (value: string) => void
}

const Link = ({page, selectedPage, setSelectedPage}: Props) => {
  console.log(selectedPage, page)
  const lowerCasePage = page.toLowerCase().replace(/ /g, "");
  return (
    <AnchorLink 
      href= {`#${lowerCasePage}`} 
      className={` ${ selectedPage === lowerCasePage ? 'grey-500' : "" }
      transition duration-500 hover:text-black
      `}
      onClick={() => setSelectedPage(lowerCasePage)}
      >
      {page}
    </AnchorLink>
  )
}

export default Link