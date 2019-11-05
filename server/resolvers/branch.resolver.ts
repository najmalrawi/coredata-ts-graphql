import { default as branches } from "../data-services/branch.service"

export default {
	Query: {
		branches: async () => branches
	}
}