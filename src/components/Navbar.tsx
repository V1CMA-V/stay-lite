import { useEffect, useState } from 'react'

const navigation = [
  { name: 'home', href: '/' },
  { name: 'rooms', href: '/rooms' },
  { name: 'about', href: '/about' },
  { name: 'contact', href: '/contact' },
]

interface NavbarProps {
  isClicked: boolean
  toggleNavClick: () => void
}

const Navbar = ({ isClicked, toggleNavClick }: NavbarProps) => {
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    setActive(window.location.pathname)
  }, [])

  const handleNavClick = (href: string) => {
    setActive(href)
    toggleNavClick()
  }

  return (
    <>
      {/* Mobile Navigation */}
      <nav
        className={`${isClicked ? 'translate-x-0' : '-translate-x-761'} fixed top-0 left-0 flex h-screen w-full items-center justify-start transition-all duration-500 lg:hidden`}
      >
        <ul className="border-muted bg-background h-full w-[70%] border-r pt-36 pl-4">
          {navigation.map((item) => (
            <li key={item.name} className="text-200 font-500 mb-5 capitalize">
              <a
                className={`${active === item.href ? 'text-primary' : ''} hover:text-primary transition-colors duration-300`}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Desktop Navigation */}
      <nav className="hidden lg:inline-block">
        <ul className="md:flex md:gap-6 capitalize">
          {navigation.map((item) => (
            <li key={item.name} className="text-100 font-500">
              <a
                className={`${active === item.href ? 'bg-primary rounded-md px-2 py-1 text-white' : ''}  transition-colors duration-300`}
                href={item.href}
                onClick={() => setActive(item.href)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Navbar
