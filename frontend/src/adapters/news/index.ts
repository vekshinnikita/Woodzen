
import { AlertAtom, AlertTypes } from '@/state/atoms/Alert';
import { useMutation, useQuery } from 'react-query';
import { useSetRecoilState } from 'recoil';
import { NewsAPI } from './api';

export const useNews = () => {

	const { isLoading, data: news} = useQuery(
		'list news',
		() => NewsAPI.getLimit(),
		{   
			select: ({data}) => data,
			onError: (error: any) => {
				console.log(error.message)
			},
		}
	)

	return { isLoading, news }
}


export const useSubscribe = () => {
	const setAlert = useSetRecoilState(AlertAtom)

	const { isLoading, mutateAsync} = useMutation(
		'subscribe',
		(data: any) => NewsAPI.subscribe(data),
		{   
            onSuccess: () => {
				setAlert({
					isOpen: true,
					message: 'Вы успешно подписались на новости',
					type: AlertTypes.success
				})
			},
			onError: (error: any) => {
				setAlert({
					isOpen: true,
					message: 'Упс... что-то пошло не так',
					type: AlertTypes.error
				})
			},
		}
	)

	return { isLoading, mutateAsync }
}