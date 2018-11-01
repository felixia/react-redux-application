const initialState = {
	posts:[]
};


export const postReducer = (state = initialState,action) => {
	switch(action.type){
		case "ADD_POST":
		state = {
			...state,
			posts:state.posts.concat(action.data)
		};
		break;
		case "DELETE_POST":
		state = {
			...state,
			posts:state.posts.filter((post)=>post.id !== action.id)
		};
		break;
		case "EDIT_POST":
		state = {
			...state,
			posts:state.posts.map((post)=>post.id === action.id ? {...post,editing:!post.editing}:post)
		};
		break;
		case "UPDATE":
		state = {
			...state,
			posts:state.posts.map((post)=> {
				if(post.id === action.id){
					  return {
			             ...post,
			             title:action.data.newTitle,
			             message:action.data.newMessage,
			             editing: !post.editing
					}



				}else return post;
			})
		};
		break;
		default:

	}
	return state;


}
