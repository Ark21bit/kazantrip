export const useYandexMetrika = () => {
	const { public: { yandexMetrika } } = useRuntimeConfig()

	const reachGoal = (name: string) => {
		if (import.meta.env.PROD) ym(yandexMetrika.id, 'reachGoal', name);				
	}

	return {
		reachGoal
	}
}