import { FaTrash } from "react-icons/fa";


export default function RemoveButton() {
    return(
        <div className="flex justify-center items-center gap-2 text-[#0699CA]">
            <FaTrash />
            <p>Remove</p>
        </div>
    )
}