import { TodosProvider } from "../../pages/todos/model/TodosContext";

type ProvidersProps = {
	children: React.ReactNode;
}

export const Providers = ({children}: ProvidersProps) => {
	return (
		<TodosProvider>
			{children}
		</TodosProvider>
	)
}