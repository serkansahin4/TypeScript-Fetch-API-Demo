import PostRepository from "../Repository/postRepository";

class homeService{
    async GetPosts() {
        var postRepository = new PostRepository();
        let contentElement: HTMLDivElement = document.getElementsByClassName("content")[0] as HTMLDivElement;
        let listElement: HTMLUListElement = document.createElement("ul");
    
        (await postRepository.posts()).map(post => {
            let listItemElement: HTMLLIElement = document.createElement("li");
            listItemElement.appendChild(document.createTextNode(post.title));
            listElement.appendChild(listItemElement);
        })
        contentElement.append(listElement);
    }
}
async function main() {
    var c = new homeService()
    await c.GetPosts();
}

main();