import { Home, User, Briefcase, FileText, Wrench, Mail } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'About', url: '/about', icon: User },
    { name: 'Skills', url: '/skills', icon: Wrench },
    { name: 'Projects', url: '/projects', icon: Briefcase },
    { name: 'Experience', url: '/experience', icon: FileText },
    { name: 'Contact', url: '/contact', icon: Mail }
  ]

  return <NavBar items={navItems} />
} 