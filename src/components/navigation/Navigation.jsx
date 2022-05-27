import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setActive } from '../../state/reducers/navigation.reducer';
import { Link} from "react-router-dom";


export default function Navigation() {
    const menu = useSelector(state => state.navigation.menu);
    const active = useSelector(state => state.navigation.active);
    const dispatch = useDispatch();
	return (
		<div className='navigation h-[10vh] flex px-5 py-2 items-center'>
			<div className=" flex">
			{menu.map((item, ind) => {
				return (
					<div className=' text-xl text-dark-100'>
						<Link to={item === "Main" ? "/" : "/done"}>
						<button
							key={ind}
							className={
								active === item
									? " bg-dark-500 font-semibold px-10 py-5 rounded-lg"
									: "px-10 py-5 rounded-lg"
							}
							onClick={(e) => {
								dispatch(setActive(item));
							}}
						>
							
								{item}
							
						</button>
						</Link>
					</div>
				);
			}
			)}
			</div>
		</div>
	);
}
