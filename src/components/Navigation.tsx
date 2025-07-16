import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { 
      name: 'Services', 
      href: '/services',
      dropdown: [
        { name: 'Training', href: '/training' },
        { name: 'Consultancy', href: '/consultancy' },
        { name: 'Research', href: '/research' },
        { name: 'Volunteering', href: '/volunteering' }
      ]
    },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActiveRoute = (href: string) => {
    return location.pathname === href;
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-lg md:text-xl font-bold text-primary">
              <span className="hidden sm:inline">Project Partners Research & Data Solutions Hub</span>
              <span className="sm:hidden">Project Partners</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button 
                          variant="ghost" 
                          className={`text-foreground hover:text-accent hover:bg-accent/10 ${
                            item.dropdown.some(subItem => isActiveRoute(subItem.href)) ? 'text-accent bg-accent/10' : ''
                          }`}
                        >
                          {item.name}
                          <ChevronDown className="ml-1 h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-background border border-border shadow-lg">
                        {item.dropdown.map((subItem) => (
                          <DropdownMenuItem key={subItem.name} asChild>
                            <Link
                              to={subItem.href}
                              className={`cursor-pointer hover:bg-accent/10 ${
                                isActiveRoute(subItem.href) ? 'bg-accent/10 text-accent' : ''
                              }`}
                            >
                              {subItem.name}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Button
                      variant="ghost"
                      asChild
                      className={`text-foreground hover:text-accent hover:bg-accent/10 ${
                        isActiveRoute(item.href) ? 'text-accent bg-accent/10' : ''
                      }`}
                    >
                      <Link to={item.href}>
                        {item.name}
                      </Link>
                    </Button>
                  )}
                </div>
              ))}
              <Button
                variant="ghost"
                asChild
                className={`text-foreground hover:text-accent hover:bg-accent/10 ${
                  isActiveRoute('/student-portal') ? 'text-accent bg-accent/10' : ''
                }`}
              >
                <Link to="/student-portal">Student Portal</Link>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div>
                    <div className="text-muted-foreground px-3 py-2 text-sm font-medium">
                      {item.name}
                    </div>
                    {item.dropdown.map((subItem) => (
                      <Button
                        key={subItem.name}
                        variant="ghost"
                        asChild
                        className={`w-full text-left justify-start pl-6 text-foreground hover:text-accent hover:bg-accent/10 ${
                          isActiveRoute(subItem.href) ? 'text-accent bg-accent/10' : ''
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        <Link to={subItem.href}>
                          {subItem.name}
                        </Link>
                      </Button>
                    ))}
                  </div>
                ) : (
                  <Button
                    variant="ghost"
                    asChild
                    className={`w-full text-left justify-start text-foreground hover:text-accent hover:bg-accent/10 ${
                      isActiveRoute(item.href) ? 'text-accent bg-accent/10' : ''
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <Link to={item.href}>
                      {item.name}
                    </Link>
                  </Button>
                )}
              </div>
            ))}
            <div className="px-3 py-2">
              <Button
                variant="ghost"
                asChild
                className={`w-full text-left justify-start text-foreground hover:text-accent hover:bg-accent/10 ${
                  isActiveRoute('/student-portal') ? 'text-accent bg-accent/10' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                <Link to="/student-portal">Student Portal</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;