function Button({ textcolors, children, iconColor, icon, variant, size }) {

  const variantClasses = {
    primary: "bg-black",
    secondary: "bg-orange-400"
  };

  const sizeClasses = {
    sm : "px-6 py-4 text-xs"
  }

  const iconColors = {
    primary: "bg-black",
    secondary: "bg-white"
  }

  const textcolor ={
    primary: "text-black",
    secondary: "text-white"
  }

  return (
    <div
      className={`${textcolor[textcolors]} font-semibold flex items-center justify-between gap-5 rounded-full w-fit tracking-wider ${sizeClasses[size]} ${variantClasses[variant]}`}
    >
      {children}
      {icon && (
        <span className={`${iconColors[iconColor]} rounded-full w-10 h-10 flex items-center justify-center`}>
          {icon}
        </span>
      )}
    </div>
  );
}

export default Button;
