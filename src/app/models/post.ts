export class Post{
	constructor(
		public id: number,
		public user_id: number,
		public title: string,
		public description: string,
		public image: string,
		public publication_date: any,
		public created_at: any
		
	){
	}
}