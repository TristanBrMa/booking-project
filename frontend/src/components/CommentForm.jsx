import PropTypes from "prop-types";

import { useState } from "react";
import axios from "axios";

const CommentForm = ({ labyrintheToggle, mauvaisGoutToggle, zoomToggle }) => {
  const [content, setContent] = useState("");
  const [user, setUser] = useState("");
  const [postList, setPostList] = useState([]);

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleUserChange = (event) => {
    setUser(event.target.value);
  };

  const postContent = () => {
    axios
      .post("http://localhost:8000/message", {
        user,
        content,
      })
      .then((res) => {
        if (res.status === 201) {
          setPostList([...postList, { user, content }]);
          setUser("");
          setContent("");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div
      id="commentaires"
      className={`"  text-black mb-12 mt-16 lg:mt-20 py-8 mx-4 lg:mx-16 px-4 lg:px-16 border-2 border-accent rounded-2xl text-4xl lg:text-5xl " ${
        labyrintheToggle && "animate-spin-slow"
      } ${mauvaisGoutToggle && " bg-fuchsia-600 text-red-600"} ${
        zoomToggle && "text-custom"
      }`}
    >
      <form className="w-full rounded-lg px-4 pt-2">
        <div className="flex flex-wrap -mx-3 mb-6 ">
          <h2 className="font-megrim font-bold mb-4 text-center lg:text-left">
            Poste ton commentaire
          </h2>
          <div className="w-full px-3 mb-2 mt-2">
            <textarea
              className={`" border-2 border-accent rounded-2xl px-2 pt-2 font-roboto text-lg lg:text-xl w-full " ${
                mauvaisGoutToggle && "h-80 w-12 bg-orange-400"
              }`}
              name="user"
              placeholder="Saisie ton pseudo"
              value={user}
              onChange={handleUserChange}
              required
            />
          </div>
          <div className="w-full px-3 mb-2 mt-2">
            <textarea
              className={`" border-2 h-32 border-accent rounded-2xl px-2 pt-2 font-roboto text-lg lg:text-xl w-full " ${
                mauvaisGoutToggle && "bg-emerald-200 text-yellow-200 h-12 "
              }`}
              name="body"
              placeholder="Saisie ton commentaire"
              value={content}
              onChange={handleContentChange}
              required
            ></textarea>
          </div>
          <div className="w-full flex mt-2 px-3">
            <button
              type="button"
              className={`" btn bg-white hover:bg-secondary hover:text-primary hover:border-accent border-2 border-accent rounded-2xl text-accent font-roboto text-lg lg:text-xl " ${
                mauvaisGoutToggle && " bg-blue-800 text-blue-500"
              } ${zoomToggle && "text-custom"}`}
              onClick={postContent}
            >
              Post Comment
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

CommentForm.propTypes = {
  labyrintheToggle: PropTypes.bool.isRequired,
  mauvaisGoutToggle: PropTypes.bool.isRequired,
  zoomToggle: PropTypes.bool.isRequired,
};

export default CommentForm;
