use warp::{Filter};

#[tokio::main]
async fn main() {
    let hello = warp::path::end().map(|| "Welcome to the server!");

    let routes = hello.with(warp::log("server"));

    println!("Server started on http://localhost:8000");
    warp::serve(routes)
        .run(([127, 0, 0, 1], 8000))
        .await;
}
