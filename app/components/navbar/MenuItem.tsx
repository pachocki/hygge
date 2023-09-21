"use client"

interface MenuItemProps{
    onClick:()=>void;
    label:string;

}
const MenuItem:React.FC<MenuItemProps> = ({
    onClick,label
}) => {
    return (
        <div className=" px-4 py-3 transition-all font-semibold cursor-pointer hover:bg-green-400 text-lg 2xl:text-2xl lg:text-lg sm:!text-sm " onClick={onClick}>
           {label}
        </div>
    );
}

export default MenuItem;