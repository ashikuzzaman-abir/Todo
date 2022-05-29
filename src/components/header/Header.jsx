import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addList, setCurrentSearch, setSearchOutput, resetCurrentSearch } from '../../state/reducers/todoList.reducer';
import SearchViewer from '../searchViewer/SearchViewer';

import {
	MdOutlineClear,
	MdSearch,
	MdAddTask,
	MdAdd,
	MdDoneOutline,
} from "react-icons/md";

export default function Header() {
	const [todoInput, setTodoInput] = useState('');
	const dispatch = useDispatch();
	const currentSearch = useSelector(state => state.todoList.currentSearch);
	const searchOutput = useSelector(state => state.todoList.searchOutput);
	const mainList = useSelector(state => state.todoList.mainList);

	const changeOnSearch = (e) => {
		if( currentSearch !== ""){
			const filteredSearchResult = mainList.filter(item => item.includes(currentSearch));
			dispatch(setSearchOutput(filteredSearchResult));
			if (filteredSearchResult.length === 0) {
				dispatch(setCurrentSearch("No result found!"));
			}
		}
	}

	

  return (
		<div className='header relative h-[15vh] flex items-center'>
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
						value={currentSearch}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								changeOnSearch();
							}
						}}
						onChange={(e) => {
							dispatch(setCurrentSearch(e.target.value));
						}}
					/>
					<div className='flex gap-2 items-center h-full '>
						<button
							onClick={(e) => {
								dispatch(resetCurrentSearch());
								dispatch(setSearchOutput([]));
							}}
						>
							<MdOutlineClear className=' text-2xl text-dark-100 w-7 h-7 rounded-full bg-dark-700' />
						</button>
						<button>
							<MdSearch
								onClick={changeOnSearch}
								className=' text-2xl text-dark-100 w-7 h-7 rounded-full bg-dark-700'
							/>
						</button>
					</div>
				</div>
			</div>
			<SearchViewer />
		</div>
  );
}
