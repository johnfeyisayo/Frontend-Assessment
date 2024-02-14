const Cards = () => {
  return (
    <div>
    <div className="sm:grid grid-cols-2 gap-10 gap-x-2 lg:grid-cols-3">
      <div className="w-10/12 h-40 border my-8 py-10 px-3 rounded-md">
      <p>Course Progress</p>
      <p className="text-xl font-bold">0/0</p>
      </div>
      <div className="w-10/12 h-40 border my-8 py-10 px-3 rounded-md">
      <p>Assignments</p>
      <p className="text-xl font-bold">0</p>
      </div>
      <div className="w-10/12 h-40 border my-8 py-10 px-3 rounded-md">
      <p>Hours learning</p>
      <p className="text-xl font-bold">0hrs 0min</p>
      </div>
    </div>
    </div>
  )
}

export default Cards;
