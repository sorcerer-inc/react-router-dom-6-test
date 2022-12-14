import {Link, Outlet} from "react-router-dom"

export default () => {
    return <>
	<h1>Home</h1>
	
	{/* link */}
	<Link to="manager">manager</Link>
	<br />
	<Link to="viewer">viewer</Link>

	{/* 3.コンポーネント表示する場所 */}
	<Outlet/>
	</>;
};
