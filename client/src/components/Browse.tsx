import Job from "./Job"

const randomJobs = [1, 2, 3, 4, 5, 6]

const Browse = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto my-10">
      <h1 className="font-bold text-xl my-10">  Search Result ({randomJobs.length})</h1>
      <div className="grid grid-cols-3 gap-4">
        {
          randomJobs.map((job, index) => {
            return (
              <Job/>
            )
          })
        }
      </div>
      </div>
      
    
    </div>
  )
}

export default Browse
