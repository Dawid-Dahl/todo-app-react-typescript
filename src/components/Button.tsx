import React, {DetailedHTMLProps, ButtonHTMLAttributes} from "react";

interface Props {
	title: string;
	buttonType: any;
	action: (e: any) => void;
}

export const Button: React.FC<Props> = ({title, action, buttonType}) => {
	return (
		<>
			<button className="button" type={buttonType} onClick={action}>
				{title}
			</button>
		</>
	);
};
