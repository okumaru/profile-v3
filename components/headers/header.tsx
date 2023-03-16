import Logo from "./logo"
import Nav from "./nav"

export default function Header () {
  return <div className="flex flex-col sm:flex-row gap-y-3 justify-between items-center py-5 mb-4 lg:mb-8">
    <Logo />
    <Nav />
  </div>
}