import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeList, addDoneList } from "../../state/reducers/todoList.reducer";
import {
	MdOutlineClear,
	MdSearch,
	MdAddTask,
	MdAdd,
	MdDoneOutline,
} from "react-icons/md";
export default function Home() {
	const list = useSelector((state) => state.todoList.mainList);
	const dispatch = useDispatch();

	return (
		<div className=' custom-scroll overflow-y-scroll max-w-full h-full py-2 px-2 '>
			{list.map((item, ind) => {
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
								dispatch(addDoneList(item));
							}}
						>
							<MdDoneOutline className='text-3xl text-dark-100' />
						</button>
					</div>
				);
			})}
		</div>
	);
}
