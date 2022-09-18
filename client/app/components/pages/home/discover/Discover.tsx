import React, { FC, useState } from 'react'
import Button from '@/components/ui/button/Button'
import { RequestQueryBuilder } from '@nestjsx/crud-request'
import { UserService } from '@/services/user.service'

const Discover: FC = () => {
	const [users, setUsers] = useState([])
	const [usersByFilter, setUsersByFilter] = useState([])

	const getUsers = async () => {
		const queryString = RequestQueryBuilder.create({
			fields: ['email', 'name', 'isVerified', 'subscribersCount', 'description', 'avatarPath'],
			join: [{ field: 'videos' }, { field: 'videos.comments' }, { field: 'videos.likes' }],
			sort: [{ field: 'updatedAt', order: 'DESC' }]
		}).query()
		try {
			const response = await UserService.getAll(queryString)
			setUsers(response.data)
		} catch (err) {
			console.log(err)
		}
	}

	const getUserByFilter = async () => {
		const queryString = RequestQueryBuilder.create({
			fields: ['email', 'name', 'isVerified', 'subscribersCount', 'description', 'avatarPath'],
			join: [{ field: 'videos' }, { field: 'videos.comments' }, { field: 'videos.likes' }],
			search: {
				$or: [
					{
						email: 'test7@test.com'
					},
					{
						email: 'test5@test.com'
					}
				]
			}
		})
		console.log(queryString)
		try {
			const response = await UserService.getUserByFilter(queryString.query())
			console.log('response________________', response)
			setUsersByFilter(response.data)
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<div style={{ color: 'white' }}>
			<div style={{ margin: '40px' }}>
				<Button onClick={() => getUsers()}>Get all users</Button>

				{users.length ? (
					users.map((user: any, i) => (
						<div key={i}>
							<h5>{user.email}</h5>
						</div>
					))
				) : (
					<div>No result</div>
				)}
			</div>
			<br />
			<br />
			<br />
			<div style={{ margin: '40px' }}>
				<Button onClick={getUserByFilter}>Get one</Button>

				{usersByFilter.length ? (
					usersByFilter.map((user: any, i) => (
						<div key={i}>
							<h5>{user.email}</h5>
						</div>
					))
				) : (
					<div>No result</div>
				)}
			</div>
		</div>
	)
}

export default Discover
