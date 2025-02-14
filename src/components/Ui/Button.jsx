

export default function Button({className = "", butttontext}) {
  return (
    <button className={`${className}  rounded  text-white`}>
       {butttontext}
    </button>
  )
}
