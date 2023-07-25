export const getPageCount = (totalCount: number | undefined, limit: number) => {
	let result = []
	let totalPages = 0
	if (totalCount) {totalPages = Math.ceil(totalCount / limit)}
	if (totalPages) {
		for (let i = 0; i < totalPages; i++) {
			result.push(i + 1)
		}
	}
	return result
}