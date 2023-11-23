import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function SinglePost({ id, posts }) {
  return (
    <>
      {posts.map((post) => {
        const { postImage, postCategory, postTitle, postContent, postId } =
          post;
        return (
          <Link
            className="lg:flex lg:gap-[4rem] lg:items-center"
            key={postId}
            to={`${id}/`}
          >
            <div className="">
              <img
                src={postImage}
                alt="post image"
                className="min-h-[28rem] min-w-full object-cover lg:h-[28rem] lg:w-[39.7rem]"
              />
            </div>
            <div className="mt-10 lg:mt-4">
              <h5 className="text-[#592EA9] text-[1.6rem] font-semibold leading-8 tracking-[.3rem] uppercase mb-8">
                {postCategory}
              </h5>
              <h2 className="max-w-[62.4rem] font-Sen text-[3.6rem] font-bold leading-[4.8rem] tracking-[-.2rem] mb-[1.6rem]">
                {postTitle}
              </h2>
              <p className="text-[#6D6E76] max-w-[62.4rem] text-[1.6rem] leading-[2.8rem] mb-[3.2rem] lmd:m-0">
                {postContent}
              </p>
            </div>
          </Link>
        );
      })}
    </>
  );
}

SinglePost.propTypes = {
  id: PropTypes.string,
  postImage: PropTypes.string,
  postCategory: PropTypes.string,
  postTitle: PropTypes.string,
  postContent: PropTypes.string,
  posts: PropTypes.array,
};
export default SinglePost;
