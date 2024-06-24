import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'

export default function Home() {

	// Use these below when get some response such as data from an API.
	const [response, setResponse] = useState<any>()

	const makeRequest = async () => {
		const res = await fetch('/api/hello')

		setResponse({
			status: res.status,
			body: await res.json(),
			limit: res.headers.get('X-RateLimit-Limit'),
			remaining: res.headers.get('X-RateLimit-Remaining'),
		})
	}
  return (
    <Layout></Layout>
  )
}
