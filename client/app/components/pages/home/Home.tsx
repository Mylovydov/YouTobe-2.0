import Layout from '@/components/layout/Layout'
import Catalog from '@/components/pages/home/catalog/Catalog'
import Discover from '@/components/pages/home/discover/Discover'
import React, { FC } from 'react'


const Home: FC = () => {
	return (
		<Layout title='Youtobe 2.0 | Videohosting'>
			<Discover />
			<Catalog />
		</Layout>
	)
}

export default Home