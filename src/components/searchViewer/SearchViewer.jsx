import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdDoneOutline, MdOutlineClear } from "react-icons/md";
import { addDoneList, removeList, removeSearchList, setSearchOutput, resetCurrentSearch} from "../../state/reducers/todoList.reducer";


export default function SearchViewer() {
    const dispatch = useDispatch();
	const searchOutput = useSelector((state) => state.todoList.searchOutput);
	if (searchOutput.length === 0) {
		return;
	}
	return <div className=' search-result-container rounded-lg translate-y-[90%] bottom-0 absolute text-dark-100 left-0 w-full bg-dark-500 px-2 py-1 drop-shadow-lg'>
        <button
        onClick={(e) => {
            dispatch(setSearchOutput([]));
            dispatch(resetCurrentSearch());
        }}
        className=" absolute right-0 top-[-10px] bg-dark-800 rounded-full">
            <MdOutlineClear className='text-[2.15rem] rounded-full bg-dark-700' />
        </button>
        {
        searchOutput.map((item, ind) => {
            return (
				<div
					key={ind}
					className=' flex px-5 py-3 justify-between mt-3 items-center w-full bg-dark-500 rounded'
				>
					<p className=' w-[95%] break-words text-lg text-dark-100'>
						{item}
					</p>
					<button
						className=''
						onClick={(e) => {
							dispatch(removeList(item));
                            dispatch(removeSearchList(item));
							dispatch(addDoneList(item));
						}}
					>
						<MdDoneOutline className='text-3xl text-dark-100' />
					</button>
				</div>
			);
        })
    }</div>;
}
