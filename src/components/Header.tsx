import { AlignLeft, X } from 'lucide-react'
import { useState } from 'react'
import { ModeToggle } from './ModeToggle'
import Navbar from './Navbar'

const Header = () => {
  const [isClicked, setIsClicked] = useState(false)

  const toggleNavClick = () => {
    setIsClicked(!isClicked)
  }

  return (
    <header className="fixed top-0 z-50 w-full md:px-6">
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a className="text-200 font-800 z-10 inline-block" href="/">
          <span className="text-primary">StayLite</span> Hotel
        </a>

        {/* Navbar */}
        <Navbar isClicked={isClicked} toggleNavClick={toggleNavClick} />

        <div className="flex items-center gap-4 justify-start">
          <button>Login</button>
          {/* Mode toggle */}
          <ModeToggle />

          {/* Menu buttons */}
          <div className="inline-block lg:hidden" onClick={toggleNavClick}>
            {isClicked ? (
              <X
                name="close menu"
                cursor={'pointer'}
                size={26}
                className="translate-y-1 md:translate-y-0"
              />
            ) : (
              <AlignLeft
                name="open menu"
                cursor={'pointer'}
                size={26}
                className="translate-y-1 md:translate-y-0"
              />
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
