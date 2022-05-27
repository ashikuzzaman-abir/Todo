import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/header/Header";
import Done from "./components/done/Done";
import Navigation from "./components/navigation/Navigation";
import { useSelector, useDispatch } from "react-redux";
import { setActive } from "./state/reducers/navigation.reducer";


import Home from "./components/home/Home";
function App() {
	const location = useLocation();
	const dispatch = useDispatch();
	const mainList = useSelector(state => state.todoList.mainList);
	const doneList = useSelector(state => state.todoList.doneList);
	useEffect(()=> {
		if(location.pathname==="/"){
			dispatch(setActive("Main"));
		}else{
			dispatch(setActive("Done"));
		}
	}, [location.pathname])

	// useEffect(()=> {
	// 	if(mainList.length===0){
	// 		dispatch(setActive("Main"));
	// 	}
	// }, [mainList, doneList])


	return (
		<div className='App w-screen h-screen bg-dark-900'>
			<div className=" w-[700px] mx-auto">
				<Header />
				<div className='main-container  h-[75vh] bg-dark-800 rounded-lg'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/done' element={<Done />} />
					</Routes>
				</div>
				<Navigation />
			</div>
		</div>
	);
}

export default App;
