import * as React from "react"

const Button = React.forwardRef(({ className = "", ...props }, ref) => {
  return (
    <button
      className={
        "inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none " +
        className
      }
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export default Button; 