import { TodosProvider } from "../../pages/todos/model";

type ProvidersType = {
	children: React.ReactNode;
}

export const Providers = ({children}: ProvidersType) => {
	return (
		<TodosProvider>
			{children}
		</TodosProvider>
	)
}