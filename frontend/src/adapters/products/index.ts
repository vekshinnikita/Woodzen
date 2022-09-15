
import { useQuery } from 'react-query'
import { useSetRecoilState } from 'recoil';
import { ProductsAPI } from './api';

export const useLimitProducts = () => {

	const { isLoading, data: products } = useQuery(
		'product list limit',
		() => ProductsAPI.getLimit(),
		{   
			onError: (error: any) => {
				console.log(error.message)
			},
            select: ({data}) => data
		}
	)

	return { isLoading, products }
}

export const useProducts = () => {

	const { isLoading, data: products } = useQuery(
		'product list',
		() => ProductsAPI.getAll(),
		{   
			onError: (error: any) => {
				console.log(error.message)
			},
            select: ({data}) => data
		}
	)

	return { isLoading, products }
}


export const useType = (id: string | undefined) => {

	const { isLoading, data: type } = useQuery(
		['type retriew', id],
		() => ProductsAPI.getType(String(id)),
		{   
			onError: (error: any) => {
				console.log(error.message)
			},
            select: ({data}) => data,
			enabled: !!id,
		}
	)

	return { isLoading, type }
}