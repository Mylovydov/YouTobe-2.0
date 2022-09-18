import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { VideoEntity } from '../entities/video.entity'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'

// @Injectable()
// export class VideoService {
// 	constructor(
// 		@InjectRepository(VideoEntity)
// 		private readonly videoRepository: Repository<VideoEntity>,
// 		@InjectRepository(LikeEntity)
// 		private readonly likeRepository: Repository<LikeEntity>,
// 		@InjectRepository(UserEntity)
// 		private readonly userRepository: Repository<UserEntity>
// 	) {
// 	}
//
// 	async getById(id: number, isPublic: boolean = false) {
// 		const filter = isPublic ? { id, isPublic: true } : { id }
// 		const video = await this.videoRepository.findOne({
// 			where: filter,
// 			relations: { user: true, comments: { user: true } },
// 			select: {
// 				user: {
// 					id: true,
// 					name: true,
// 					avatarPath: true,
// 					isVerified: true,
// 					subscribersCount: true,
// 					subscriptions: true
// 				},
// 				comments: {
// 					message: true,
// 					id: true,
// 					user: {
// 						id: true,
// 						name: true,
// 						avatarPath: true,
// 						isVerified: true,
// 						subscribersCount: true
// 					}
// 				}
// 			}
// 		})
//
// 		if (!video) {
// 			throw new NotFoundException('Video not found')
// 		}
// 		return video
// 	}
//
// 	async update(id: number, dto: VideoDto) {
// 		const video = await this.getById(id)
// 		return await this.videoRepository.save({ ...video, ...dto })
// 	}
//
// 	async findAll(searchTerm?: string) {
// 		let options: FindOptionsWhereProperty<VideoEntity> = {}
//
// 		if (searchTerm) {
// 			options = {
// 				name: ILike(`%${searchTerm}%`)
// 			}
// 		}
//
// 		return await this.videoRepository.find({
// 			where: {
// 				...options,
// 				isPublic: true
// 			},
// 			order: {
// 				createdAt: 'DESC'
// 			},
// 			relations: {
// 				user: true,
// 				comments: { user: true, video: true },
// 				likes: true
// 			},
// 			select: {
// 				user: {
// 					id: true,
// 					name: true,
// 					avatarPath: true,
// 					isVerified: true
// 				},
// 				likes: {
// 					id: true
// 				}
// 			}
// 		})
// 	}
//
// 	async getMostPopularByViews() {
// 		return await this.videoRepository.find({
// 			where: {
// 				views: MoreThan(0)
// 			},
// 			relations: {
// 				user: true
// 			},
// 			select: {
// 				user: {
// 					id: true,
// 					name: true,
// 					avatarPath: true,
// 					isVerified: true
// 				}
// 			},
// 			order: {
// 				views: -1
// 			}
// 		})
// 	}
//
// 	async create(userId: number) {
// 		const videoData = {
// 			name: '',
// 			user: { id: userId },
// 			description: '',
// 			videoPath: '',
// 			thumbnailPath: ''
// 		}
//
// 		const newVideo = await this.videoRepository.create(videoData)
// 		const video = await this.videoRepository.save(newVideo)
// 		return video.id
// 	}
//
// 	async delete(id: number) {
// 		const video = await this.videoRepository.findOneBy({ id })
//
// 		if (!video) {
// 			throw new NotFoundException('Video not found')
// 		}
//
// 		return await this.videoRepository.delete({ id })
// 	}
//
// 	async updateCountViews(videoId: number) {
// 		const video = await this.videoRepository.findOneBy({ id: videoId })
//
// 		if (!video) {
// 			throw new NotFoundException('Video not found')
// 		}
//
// 		video.views++
// 		return await this.videoRepository.save(video)
// 	}
//
// 	async updateCountLikes(userId: number, videoId: number) {
// 		const like = {
// 			user: { id: userId },
// 			video: { id: videoId }
// 		}
// 		const isLiked = await this.likeRepository.findOneBy(like)
//
// 		const user = await this.userRepository.findOneBy({ id: userId })
// 		const video = await this.videoRepository.findOneBy({ id: videoId })
//
// 		console.log('user', user)
// 		console.log('video', video)
//
// 		if (!isLiked) {
// 			const newLike = await this.likeRepository.create({ video, user })
// 			await this.likeRepository.save(newLike)
// 			return await this.likeRepository.countBy({ video: like.video })
// 		}
//
// 		await this.likeRepository.delete(like)
// 		return await this.likeRepository.countBy({ video: like.video })
// 	}
// }

@Injectable()
export class VideoService extends TypeOrmCrudService<VideoEntity> {
	constructor(
		@InjectRepository(VideoEntity)
		readonly repo
	) {
		super(repo)
	}
}
