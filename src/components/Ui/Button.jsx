

export default function Button({className = "", butttontext, ...props}) {
  return (
    <button className={`${className}  rounded  `} {...props}>
       {butttontext}
    </button>
  )
}
