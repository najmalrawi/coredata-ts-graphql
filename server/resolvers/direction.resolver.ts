import { default as directions } from "../data-services/direction.service"

export default {
	Query: {
		directions: async (_, { branchId }) => {
			return directions.filter((_direction:any) => _direction.branch === branchId)
		}
	},
	Mutation: {
		async createDirection(_, { branchId, name }) {
			const id = directions.length + 1
			const direction = { id, branch: branchId, name }
			directions.push( direction )
			return direction
		}
	}
}