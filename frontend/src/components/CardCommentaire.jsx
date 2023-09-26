import { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const CardCommentaire = ({
  user,
  content,
  creationdate,
  id,
  posts,
  setPosts,
  mauvaisGoutToggle,
}) => {
  const [isModify, setIsModify] = useState(false);
  const [updateContent, setUpdateContent] = useState(content);

  const handleDelete = () => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/message/${id}`)
      .then((res) => {
        if (res.status === 204) {
          setPosts(posts.filter((message) => message.id !== id));
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleEdit = () => {
    setIsModify(true);
  };

  const handleSaveEdit = () => {
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/message/${id}`, {
        content: updateContent,
      })
      .then((res) => {
        if (res.status === 204) {
          setIsModify(false);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleCancelEdit = () => {
    setIsModify(false);
    setUpdateContent(content);
  };

  return (
    <div
      className={`flex flex-col text-black py-4 mt-8 lg:mt-20 mx-4 lg:mx-0 px-4 lg:px-10 border-2 border-accent rounded-2xl ${
        mauvaisGoutToggle &&
        "text-yellow-300 rounded-full border-8 border-white border-b-2"
      }`}
    >
      <div className="flex justify-between items-center font-megrim font-bold text-xl lg:text-2xl border-b-2 border-accent pb-2 lg:pb-6">
        <h1>{user}</h1>
        <p>{creationdate.split("T")[0]}</p>
      </div>
      {isModify ? (
        <div className="font-roboto lg:text-xl mt-6 lg:mt-10 mb-2 lg:mb-6">
          <textarea
            value={updateContent}
            onChange={(e) => setUpdateContent(e.target.value)}
          />
          <div className="flex justify-end">
            <button type="button" onClick={handleSaveEdit} className="m-3">
              Enregistrer
            </button>
            <button type="button" onClick={handleCancelEdit} className="m-3">
              Annuler
            </button>
          </div>
        </div>
      ) : (
        <div className="font-roboto lg:text-xl mt-6 lg:mt-10 mb-2 lg:mb-6">
          <p>{updateContent}</p>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleDelete}
              className="m-3 text-accent"
            >
              Supprimer
            </button>
            <button
              type="button"
              onClick={handleEdit}
              className="m-3 text-accent"
            >
              Modifier
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

CardCommentaire.propTypes = {
  user: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  creationdate: PropTypes.string.isRequired,
  mauvaisGoutToggle: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  posts: PropTypes.array.isRequired,
  setPosts: PropTypes.func.isRequired,
};

export default CardCommentaire;
