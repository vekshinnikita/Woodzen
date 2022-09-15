
import { useMutation } from 'react-query'
import { OrdersAPI } from './api';
import { useSetRecoilState } from 'recoil';
import { AlertAtom, AlertTypes } from '@/state/atoms/Alert';

export const useOrder = () => {
	const setAlert = useSetRecoilState(AlertAtom)

	const { isLoading, mutateAsync, isSuccess} = useMutation(
		'create order',
		(data: any) => OrdersAPI.makeOrder(data),
		{   
            onSuccess: () => {
				setAlert({
					isOpen: true,
					message: 'Заказ успешно оформлен',
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

	return { isLoading, mutateAsync, isSuccess }
}