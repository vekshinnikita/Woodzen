
import { useQuery } from 'react-query'
import { OffersAPI } from './api';


export const useOffers = () => {

	const { isLoading, data: offers } = useQuery(
		'offer list',
		() => OffersAPI.getAll(),
		{   
			onError: (error: any) => {
				console.log(error.message)
			},
            select: ({data}) => data
		}
	)

	return { isLoading, offers }
}

