// import { SafeUser } from "@/app/types";

import Logo from "./Logo";
// import Categories from "./Categories";
import Container from "../Container";
import UserMenu from "./UserMenu";
import Link from "next/link";
import MainNav from "../main-nav";

// interface NavbarProps {
//   currentUser?: SafeUser | null;
// }

interface NavbarProps {
  currentUser?:  null;
}

const Navbar: React.FC<NavbarProps> = ({
  currentUser,
}) => {

  let categories:any[] = [];
  return ( 
<div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-black text-xl">Salon Sapelka</p>
          </Link>
          <MainNav data={categories} />
          {/* <NavbarActions /> */}
          <UserMenu currentUser={currentUser} />
        </div>
      </Container>
    </div>
  );
}


export default Navbar;