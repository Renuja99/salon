"use client";

import Link from "next/link"
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils"
// import { Category } from "@/types";

interface MainNavProps {
  data: any[];
}

const MainNav: React.FC<MainNavProps> = ({
  data
}) => {
  const pathname = usePathname();

//   const routes = data.map((route) => ({
//     href: `/category/${route.id}`,
//     label: route.name,
//     active: pathname === `/category/${route.id}`,
//   }));

const routes = [
    {
        href:'/products',
        label: 'Products',
        active: pathname === `/products`
    },
    {
        href:'/promotions',
        label: 'Promotions',
        active: pathname === `/promotions`
    },
    {
        href:'/services',
        label: 'Services',
        active: pathname === `/services`
    },
]

  return (
    <nav
      className="mx-6 flex items-center space-x-4 lg:space-x-10"
    >
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            'text-sm font-black transition-colors hover:text-black',
            route.active ? 'text-black' : 'text-neutral-500'
          )}
        >
          {route.label}
      </Link>
      ))}
    </nav>
  )
};

export default MainNav;