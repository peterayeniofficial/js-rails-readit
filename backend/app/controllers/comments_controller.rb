class CommentsController < ApplicationController
    def index 
        comments = Comment.all 
        render json: comments
    end

    def create 
        content = Content.find_by(id: params[:id])
        comment = Comment.new 
        comment.content = params[:content]
        comment.user_id = 1
        comment.content_id = content.id
        comment.save 

        if content.save 
            render json: comment
        else
            render json: {message: "Error creating a comment"}
        end
    end
end
