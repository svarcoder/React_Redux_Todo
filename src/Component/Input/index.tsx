import * as React from "react";
import { addTodo } from "../../Redux/action";
import { Header, Button, Input } from "./style";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";

interface IInputComponentProps {}

const InputComponent: React.FC<IInputComponentProps> = (props) => {
	const [name, setName] = React.useState<string>("");

	const dispatch = useDispatch();

	return (
		<>
			<Header>
				<Input
					type='text'
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<Button
					onClick={() => {
						dispatch(
							addTodo({
								id: uuidv4(),
								name: name,
							})
						);
						setName("");
					}}>
					Go
				</Button>
			</Header>
		</>
	);
};

export default InputComponent;
