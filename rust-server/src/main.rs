use warp::{Filter};

#[tokio::main]
async fn main() {
    let get_todos = warp::path!("todos")
        .and(warp::get())
        .map(|| {
            warp::reply::json(&serde_json::json!([{
                "id": 1,
                "title": "Task 1",
                "isReady": false
            },
            {
                "id": 2,
                "title": "Task 2",
                "isReady": true
            },
            {
                "id": 3,
                "title": "Task 3",
                "isReady": false
            }]))
        });

    let routes = get_todos
        .with(warp::log("api"));

    println!("Server started on http://localhost:8080");
    warp::serve(routes)
        .run(([127, 0, 0, 1], 8080))
        .await;
}