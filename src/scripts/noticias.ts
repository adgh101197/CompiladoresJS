declare let axios;

export class Noticia {
    getAll(): Promise<any> {
        const tema = document.getElementById("inputSearch").innerText;
        console.log(tema);
        const url: string = "https://newsapi.org/v2/everything?q=Apple&from=2021-10-04&sortBy=popularity&apiKey=9864f60007714b2e92fbd09570c232bb"
        return axios.get(url);
    }
}