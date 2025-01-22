import { Avatar, AvatarImage } from "../ui/avatar"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"


const Navbar = () => {
  return (
    <div className="bg-black text-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl py-4 px-4">
      <div>
        <h1 className="text-3xl font-bold text-center">Job <span className="text-orange-700">Hunt</span></h1>
      </div>
      <div className="flex items-center justify-between gap-10">
        <ul className="flex gap-10 font-medium">
          <li>Home</li>
          <li>Jobs</li>
          <li>Browse</li>
        </ul>
        <Popover>
        <PopoverTrigger asChild>
        <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
    </Avatar>
      </PopoverTrigger>
      <PopoverContent>Hiii</PopoverContent>
        </Popover>
      </div>
      </div>

    </div>
  )
}

export default Navbar
