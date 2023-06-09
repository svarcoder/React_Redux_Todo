import * as React from "react";
import { useSelector } from "react-redux";
import Item from "../Item";
import { MainBody } from "./style";
interface IListProps {}

const List: React.FunctionComponent<IListProps> = (props) => {
	const todos = useSelector((state: any) => state);

	return (
		<>
			<MainBody>
				{todos &&
					todos.map((value: any, i: number) => <Item todoos={value} key={i} />)}
			</MainBody>
		</>
	);
};

export default List;
