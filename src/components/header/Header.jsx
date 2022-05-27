import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addList } from '../../state/reducers/todoList.reducer';

import {
	MdOutlineClear,
	MdSearch,
	MdAddTask,
	MdAdd,
	MdDoneOutline,
} from "react-icons/md";

export default function Header() {
	const [todoInput, setTodoInput] = useState('');
	const [searchInput, setSearchInput] = useState("");
	const dispatch = useDispatch();

  return (
		<div className='header h-[15vh] flex items-center'>
			<div className='w-full'>
				<div className='addingTodoFields w-full flex items-center justify-between'>
					<input
						className=' w-[90%] py-3 px-3 mt-2 outline-none text-lg bg-dark-800 text-dark-100 rounded focus:bg-dark-600'
						type='text'
						placeholder='Type new todo...'
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								dispatch(addList(todoInput));
								setTodoInput("");
							}
						}}
						onChange={(e) => {
							setTodoInput(e.target.value);
						}}
						value={todoInput}
					/>
					<div className=' flex gap-2 items-center h-full '>
						<button onClick={(e) => setTodoInput("")}>
							<MdOutlineClear className=' text-2xl text-dark-100 w-7 h-7 rounded-full bg-dark-700' />
						</button>
						<button
							onClick={(e) => {
								dispatch(addList(todoInput));
								setTodoInput("");
							}}
						>
							<MdAdd className='text-2xl text-dark-100 w-7 h-7 rounded-full bg-dark-700 rounded' />
						</button>
					</div>
				</div>
				<div className='searchingFields w-full flex items-center justify-between'>
					<input
						className=' w-[90%] py-3 px-3 mt-2 outline-none text-lg bg-dark-800 text-dark-100 rounded focus:bg-dark-600'
						type='text'
						placeholder='Search a todo...'
						value={searchInput}
						onChange={(e) => setSearchInput(e.target.value)}
					/>
					<div className='flex gap-2 items-center h-full '>
						<button onClick={(e) => setSearchInput("")}>
							<MdOutlineClear className=' text-2xl text-dark-100 w-7 h-7 rounded-full bg-dark-700' />
						</button>
						<button>
							<MdSearch className=' text-2xl text-dark-100 w-7 h-7 rounded-full bg-dark-700' />
						</button>
					</div>
				</div>
			</div>
		</div>
  );
}
