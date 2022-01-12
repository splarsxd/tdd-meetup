interface Props {
  searcher: string


  setter: (search: string) => void

}


const Header = ({ searcher, setter }: Props) =>{

  return (
    <header className="header comp">

      <h1>Meetup - Online</h1>
      <input
        type="text"

        placeholder="Search meetup.."

        value={searcher}

        onChange={(event) =>setter (event.target.value) }
      />
    </header>

  )}

export default Header

 
