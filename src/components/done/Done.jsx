import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeDoneList } from '../../state/reducers/todoList.reducer';
import {
	MdOutlineClear,
	MdSearch,
	MdAddTask,
	MdAdd,
	MdDoneOutline,
} from "react-icons/md";

export default function Done() {
  const doneList = useSelector(state=> state.todoList.doneList);
  const dispatch = useDispatch();
  return (
		<div className=' overflow-y-scroll max-w-full h-full py-2 px-2'>
			{doneList.map((item, ind) => {
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
								dispatch(removeDoneList(item));
							}}
						>
							<MdOutlineClear className='text-3xl text-dark-100' />
						</button>
					</div>
				);
			})}
		</div>
  );
}
