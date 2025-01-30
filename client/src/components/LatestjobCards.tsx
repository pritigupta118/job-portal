import { Badge } from "./ui/badge"


const LatestjobCards = () => {
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer text-black flex flex-col gap-3">
      <div>
        <h1 className="font-medium text-lg">Company Name</h1>
        <p className="text-sm text-gray-500">Location</p>
        </div>
      <div>
        <h1 className="font-bold text-lg">Job title</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="flex gap-2 text-foreground">
      <Badge variant="default" className="text-blue-700">12 Positins</Badge>
      <Badge variant="default" className="text-red-800">Remote</Badge>
      <Badge variant="default" className="text-violet-800">12LPA</Badge>
      </div>
    </div>
  )
}

export default LatestjobCards
