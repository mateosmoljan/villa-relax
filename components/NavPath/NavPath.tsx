"use client";
import { usePathname } from "next/navigation";
import { FaHome } from "react-icons/fa";

type Props = {
  homePage?: boolean;
};
function NavPath({ homePage = false }: Props) {
  const pathname = usePathname();
  return (
    <div className="b bg-gray-100 py-2 px-4 sm:px-8">
      <div className="flex items-center gap-2">
        <FaHome />
        {!homePage && (
          <div className="flex items-center gap-2">
            <span className="text-xl"> {">"} </span>
            {pathname.substring(1)}
          </div>
        )}
      </div>
    </div>
  );
}

export default NavPath;
