

const SearchedImageTemplate = ({ data }) => {
    // console.log(data.pagemap?.cse_image?.[0]?.src)

  return (
    <div className="group flex flex-col py-3 cursor-pointer">

      <div className="rounded-xl overflow-hidden bg-black/[0.03] h-[100px] md:h-[120px] lg:h-[140px] group-hover:shadow">
      <img src={data?.link} alt="" className="h-full w-full object-contain" />
      </div>

      <div className="text-xs text-[#70757a] pt-2">
      {data?.displayLink}
      </div>

      <div className="text-sm text-[#3c4043] truncate pt-1 group-hover:underline">
      {data?.title}
      </div>

    </div>
  )
}

export default SearchedImageTemplate
