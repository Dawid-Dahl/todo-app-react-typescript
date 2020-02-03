import React from "react";

interface Props {
	title: string;
	action: (e: any) => void;
}

export const Button: React.FC<Props> = ({title, action}) => {
	return (
		<>
			<a className="button" href="#" onClick={action}>
				{title}
			</a>
		</>
	);
};
