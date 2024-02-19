interface Post{
    userId:number
    id:number
    title:string
    body:string
}

class PostRepository{
    private apiUrl:string = "https://jsonplaceholder.typicode.com/posts";

    async posts(): Promise<Post[]> {
        try {
            let response = await fetch(this.apiUrl);
            if (!response.ok) {
                throw new Error('HTTP error, status = ' + response.status);
            }
            
            let data: Post[] = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching data: ', error);
            return [];
        }
    }
}

export default PostRepository;