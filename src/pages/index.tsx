import { Flex, useDisclosure } from '@chakra-ui/react'
import { createClient } from '@/utils/supabase/component'
import { useProducts } from 'medusa-react'
import LeftBar from '../components/Organisms/LeftBar'
import MiddleContent from '@/components/Organisms/MiddleContent'
import RightBar from '@/components/Organisms/RightBar'

export default function Home() {
	const supabase = createClient()
	const { products, isLoading } = useProducts()

	async function signout() {
		const { error } = await supabase.auth.signOut()
	}
	return (
		<Flex height={'100vh'} padding={1} gap={1}>
			<LeftBar />
			<MiddleContent />
			<RightBar />
		</Flex>
	)
}
