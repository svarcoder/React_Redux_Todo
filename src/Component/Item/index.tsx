import * as React from "react";
import {
	BodyCard,
	BodyCardTitle,
	BodyCardBody,
	BodyCardIcon,
	EditInput,
} from "./style";
import { RiEdit2Fill } from "react-icons/ri";
import { AiFillDelete } from "react-icons/ai";
import { MdDoneOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "../../Redux/action";

interface IItemProps {
	todoos: any;
	key: number;
}

const Item: React.FC<IItemProps> = (props) => {
	const dispatch = useDispatch();

	const [editTable, setEditTable] = React.useState<boolean>(false);
	const [editTodoDetails, setEditTodDetails] = React.useState<string>(
		props.todoos.name
	);

	return (
		<>
			<BodyCard>
				<BodyCardTitle>
					{editTable ? (
						<>
							<EditInput
								type='text'
								value={editTodoDetails}
								onChange={(e) => setEditTodDetails(e.target.value)}
							/>
						</>
					) : (
						props.todoos.name
					)}
				</BodyCardTitle>
				<BodyCardBody>
					<BodyCardIcon>
						{editTable ? (
							<MdDoneOutline
								onClick={() => {
									dispatch(
										editTodo({
											...props.todoos,
											name: editTodoDetails,
										})
									);
									setEditTable(false);
								}}
							/>
						) : (
							<RiEdit2Fill onClick={() => setEditTable(!editTable)} />
						)}
					</BodyCardIcon>
					<BodyCardIcon>
						<AiFillDelete
							onClick={() => dispatch(deleteTodo(props.todoos.id))}
						/>
					</BodyCardIcon>
				</BodyCardBody>
			</BodyCard>
		</>
	);
};

export default Item;
